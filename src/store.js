import Vue from "vue";
import Vuex from "vuex";
// import math from "mathjs";
// import containers from "./assets/game-objects/containers/containers.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: null,
    timerRunning: false,

    /* property size represents total square meters */
    propertySize: 10,
    /* dirt rate represents amount of dirt per square meter in cubed meters.
      passiveDirtRate of 0.1 represents 0.1m^3 per m^2 of property size.
    */
    passiveDirtRate: 0.1,
    clickedDirtRate: 1,
    // Per unit of dirt
    dirtPrice: 1,
    money: 100,
    goodDirt: 0,
    employees: [
      {
        type: "Child",
        wage: "2",
        dailyHours: "4"
      },
      {
        type: "Smelly Teenager",
        wage: "8",
        dailyHours: "6"
      },
    ],
    shippingContainers: [
      {
        name: "Small Box",
        capacity: 10,
        shippingCost: 1
      },
      {
        name: "Bucket",
        capacity: 20,
        shippingCost: 2
      },
      {
        name: "Coffin",
        capacity: 800,
        shippingCost: 50
      },
      {
        name: "Quite A Large Box",
        capacity: 1000,
        shippingCost: 75
      },
      {
        name: "Shipping Crate",
        capacity: 7500,
        shippingCost: 150
      },
      {
        name: "20ft Ventilated Shipping Container",
        capacity: 33200,
        shippingCost: 2300
      }
    ],
    upgradesOwned: [],
    /* Upgrades is the list of upgrades available */
    upgradesAvailable: [
      {
        name: "Slave labor",
        description: "Make your peasants peas.",
        price: 25
      },
      {
        name: "Slave labor 2",
        description: "Electric Boogaloo.",
        price: 230
      }
    ]
  },

  mutations: {
    // updateShippingMenu(state) {
    //   state.shippingContainers = containers.list;
    // },
    incrementClicked(state) {
      state.goodDirt += state.clickedDirtRate;
    },
    updateOnTick(state) {
      /* This will probably need to handle a lot of stuff.
        - work shifts
        - daytime hours
      */
      // eventually will need to both update dirt and account for paying employees hourly during the x hours they work each day.
      state.goodDirt += state.passiveDirtRate;
    },
    buyUpgrade(state, item) {
      if (state.money >= item.price) {
        state.money -= item.price;
        /* This is where adding the upgrade to farmer inventory will need to happen */

      } else {
        console.log("You don't have enough cubic dollars to buy that.");
      }
    },
    // Purchase price is by volume or container?
    sellDirt(state, container) {
      if (container.capacity <= state.goodDirt) {
        state.goodDirt -= container.capacity;
        state.money += container.capacity * state.dirtPrice;
      } else {
        console.log("You don't have enough good dirt to fill that order.");
      }
    },
    stopTimer(state) {
      clearInterval(this.timer);
      state.timerRunning = false;
    }
  },

  actions: {
    startTimer(context) {
      if (!context.timerRunning) {
        // Timer is running
        context.timerRunning = true;
        // context.commit("updateShippingMenu");
        context.timer = setInterval(() => {
          context.commit("updateOnTick");
        }, 1000);
      } else {
        console.log("Timer already started.");
      }
    }
  }
});
