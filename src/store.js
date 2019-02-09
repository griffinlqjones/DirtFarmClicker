"use strict";

import Vue from "vue";
import Vuex from "vuex";
// import math from "mathjs";
import upgrades from "./assets/game-objects/upgrades.js";
import initializer from "./assets/initializer.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseValues: initializer,
    morality: initializer.morality,
    timer: initializer.timer,
    timerRunning: initializer.timerRunning,
    /* Property size that limits the amount of dirt that can be stored at once */
    maxGoodDirt: initializer.maxGoodDirt,
    /* Dirt production per timer tick*/
    passiveDirtRate: initializer.passiveDirtRate,
    clickedDirtRate: initializer.clickedDirtRate,
    laborCost: initializer.laborCost,
    dirtUnitPrice: initializer.dirtUnitPrice,
    money: initializer.money,
    goodDirt: initializer.goodDirt,
    upgrades: upgrades,
    upgradeUnlockAlertDisplay: false
  },

  mutations: {
    incrementClicked(state) {
      if (state.goodDirt < state.maxGoodDirt) {
        /* If adding dirt would result in more dirt than property size, just set good dirt to state.maxGoodDirt * 3 */
        if (state.goodDirt + state.clickedDirtRate > state.maxGoodDirt) {
          state.goodDirt = state.maxGoodDirt;
        } else {
          state.goodDirt += state.clickedDirtRate;
        }
      }
    },

    updateClickedDirtRate(state, payload) {
      state.clickedDirtRate = payload;
    },
    updatePassiveDirtRate(state, payload) {
      state.passiveDirtRate = payload;
    },
    updateLaborCost(state, payload) {
      state.laborCost = payload;
    },
    // Apply the moral toll
    updateMorality(state, payload) {
      state.morality = payload;
    },
    updateDirtUnitPrice(state, payload) {
      state.dirtUnitPrice = payload;
    },
    updateMaxDirt(state, payload) {
      state.maxGoodDirt = payload;
    },

    updateOnTick(state) {
      /* This will probably need to handle a lot of stuff.
      - work shifts
      - daytime hours
      */
      /* If you have less money th */
      if (state.money > state.laborCost) {
        if (state.goodDirt < state.maxGoodDirt) {
          /* If adding dirt would result in more dirt than property size, just set good dirt to state.maxGoodDirt * 3 */
          state.money -= state.laborCost;
          if (state.goodDirt + state.passiveDirtRate > state.maxGoodDirt) {
            state.goodDirt = state.maxGoodDirt;
          } else {
            state.goodDirt += state.passiveDirtRate;
          }
        }
      } else {
        console.log("You can't afford to pay your employees.");
      }
    },
    displayUpgradeAlert(state, displayBool) {
      console.log("NEW UPGRADES AVAILABLE");
      state.upgradeUnlockAlertDisplay = displayBool;
    },
    unlockUpgrades(state, payload) {
      payload.map(function(upgrade) {
        return (upgrade.available = true);
      });
    },

    buyUpgrade(state, payload) {
      if (state[payload.acquisitionCurrency] >= payload.aquisitionCost) {
        // Set upgrade to owned and unavailable
        payload.owned = true;
        payload.count += 1;
        if (!payload.repurchaseable) {
          payload.available = false;
        }
        // Deduct cost from inventory
        state[payload.acquisitionCurrency] -= payload.aquisitionCost;
        /* This is where adding the upgrade to farmer inventory will need to happen */
      } else {
        console.log("You don't have enough currency to buy that.");
      }
    },

    reduceCount(state, upgrade) {
      if (upgrade.count > 0) {
        upgrade.count--;
      }
    },


    sellDirt(state, payload) {
      if (payload.capacity <= state.goodDirt) {
        // subtract dirt from inventory
        state.goodDirt -= payload.capacity;
        // add profit, value is container-specific bonus value
        state.money += (payload.capacity * state.dirtUnitPrice) + payload.value;
      } else {
        console.log("You don't have enough good dirt to fill that order.");
      }
    },

    setTimer(state, timerID) {
      state.timer = timerID;
      state.timerRunning = true;
    },

    stopTimer(state) {
      console.log(state.timer);
      clearInterval(state.timer);
      state.timer = null;
      state.timerRunning = false;
    },

    testCondition(state, obj) {
      console.log("Test Condition Mutation: ");
      if (obj.condition(state)) {
        console.log("The condition is: " + obj.condition(state));
      }
    }
  },

  actions: {
    testCondition(context, obj) {
      context.commit("testCondition", obj);
    },
    /*
    To save the keystrokes involved in writing specific actions for each mutation, consider this generic dispatch action which uses the payload of a normal dispatch call to hold an oject of the form:
    mutation: "nameOfMutation",
    payload: whatever you were going to pass to the mutation as a payload
    Yes, yes, very smart. I know. Thank you thank you.
    */
    genericDispatch(context, obj) {
      if (obj.payload == null) {
        context.commit(obj.mutation);
      } else {
        context.commit(obj.mutation, obj.payload);
      }
    },

    updateAll(context) {
      context.commit(
        "updateClickedDirtRate",
        context.getters.dirtPerClick
      );
      context.commit(
        "updatePassiveDirtRate",
        context.getters.dirtPerTick
      );
      context.commit("updateLaborCost", context.getters.laborCostPerTick);
      context.commit("updateMorality", context.getters.getMorality);
      context.commit(
        "updateDirtUnitPrice",
        context.getters.genericFilteredGetter(
          "dirtQuality",
          "value",
          "dirtUnitPrice"
        )
      );
      context.commit(
        "updateMaxDirt",
        context.getters.genericFilteredGetter(
          "propertyExpansion",
          "capacity",
          "maxGoodDirt"
        )
      );
    },

    /* object holds the container and the calculated profit */
    sellDirt(context, obj) {
      context.commit("sellDirt", obj);
    },

    buyUpgrade(context, upgrade) {
      context.commit("buyUpgrade", upgrade);
      context.dispatch("updateAll");
    },

    reduceCount(context, upgrade) {
      context.commit("reduceCount", upgrade);
      context.dispatch("updateAll");
    },

    /* Sets an interval (only 1) representing the PASSAGE OF TIME. */
    startTimer(context) {
      if (!context.state.timerRunning) {
        // Timer is running
        let timer = setInterval(() => {
          context.commit("updateOnTick");
          context.dispatch("checkForUnlockableUpgrades");
        }, 1000);
        context.commit("setTimer", timer);
      } else {
        console.log("Timer already started.");
      }
    },

    // Check for upgrades whose unlock condition has been met and mark them "available"
    checkForUnlockableUpgrades(context) {
      let upgrades = context.getters.lockedUpgrades();
      if (upgrades.length > 0) {
        context.commit("unlockUpgrades", upgrades);
        context.commit("displayUpgradeAlert", true);
        setTimeout(() => {
          context.commit("displayUpgradeAlert", false)
        }, 3000);
      }
    }
  },

  getters: {
    calcProfit: state => container => {
      return ((container.capacity * state.dirtUnitPrice) + container.value) - container.intervalCost;
      // (payload.capacity * state.dirtUnitPrice) + payload.value
    },

    /* Write a generic function to check if adding x money or dirt would exceed the threshold and return a bool */
    getMorality: (state, getters) => {
      return getters.ownedUpgrades.reduce(function(accumulator, upgrade) {
        return upgrade.morality * upgrade.count + accumulator;
      }, 0);
    },

    laborCostPerTick: (state, getters) => {
      return getters.hiredStaff.reduce(function(accumulator, employee) {
        return employee.intervalCost * employee.count + accumulator;
      }, 0);
    },

    dirtPerClick: (state, getters) => {
      return getters.ownedUpgrades.filter(
        upgrade => upgrade.type.includes("clickProduction")
      ).reduce(function(accumulator, upgrade) {
        return upgrade.value * upgrade.count + accumulator;
      }, 0);
    },
    dirtPerTick: (state, getters) => {
      return getters.hiredStaff.reduce(function(accumulator, employee) {
        return employee.value * employee.count + accumulator;
      }, 0);
    },

    /*
    The problem is that dirtUnitPrice and maxGoodDirt start with non-zero values
    so they need to have the total of the upgrade modifiers ADDED to them
    Unfortunately it stacks all kinds of things.
    Dirt unit price stays normal if you recruit child labor,
    But after you purchase an upgrade that increases dirt price EVERY upgrade increases dirt price.
    FIX IT.
    */
    genericFilteredGetter: (state, getters) => (
      upgradeType,
      reduceProp,
      defaultProp
    ) => {
      let filteredUpgrades = getters.ownedUpgrades.filter(
        upgrade => upgrade.type == upgradeType
      );
      if (filteredUpgrades.length > 0) {
        filteredUpgrades = filteredUpgrades.reduce(function(
          accumulator,
          upgrade
        ) {
          return upgrade[reduceProp] * upgrade.count + accumulator;
        },
        0);
        /* I want to say, just for the record, that ESLint thought the formatting you're seeing here was a good idea. */
        return filteredUpgrades + state.baseValues[defaultProp];
      } else {
        return state[defaultProp];
      }
    },

    shippingContainers: (state, getters) => {
      let filteredUpgrades = getters.ownedUpgrades;
      return filteredUpgrades.filter(
        upgrade => upgrade.type == "shippingContainer"
      );
    },

    hiredStaff: (state, getters) => {
      let filteredUpgrades = getters.ownedUpgrades;
      return filteredUpgrades.filter(upgrade => upgrade.type == "staff");
    },

    /* To ensure this function actually runs each time it's invoked,
    we've got to do the double arrow thing. */
    lockedUpgrades: (state, getters) => () => {
      let upgrades = getters.upgradesNotOwnedOrAvailable;
      upgrades = upgrades.filter(upgrade => upgrade.condition(state) == true);
      return upgrades;
    },

    upgradesNotOwnedOrAvailable: state => {
      return state.upgrades.filter(
        upgrade => !upgrade.owned && !upgrade.available
      );
    },

    // Upgrades available for purchase in the upgrade panel
    availableUpgrades: state => {
      return state.upgrades.filter(upgrade => upgrade.available);
    },

    // Upgrades purchased by the player
    ownedUpgrades: state => {
      return state.upgrades.filter(upgrade => upgrade.owned);
    },

    stateForSave: (state, getters) => {
      let ownedUpgradeData = getters.ownedUpgrades.map(upgrade => {
        return {
          name: upgrade.name,
          available: upgrade.available,
          owned: upgrade.owned,
          count: upgrade.count
        };
      });
      return {
        id: null,
        money: state.money,
        goodDirt: state.goodDirt,
        upgrades: ownedUpgradeData
      };
    }
  }
});
