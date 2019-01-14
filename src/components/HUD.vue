<template>
  <div id="hud">
    <h2 class="section-heading">HUD</h2>
    <div class="stats">
      <div class="currency">
        <p>Money: {{ money }} Currency</p>
        <p>Good Dirt: {{ goodDirt }} / {{ maxGoodDirt }} m<sup>3</sup></p>
        <p>Staff Cost: {{ laborCost }} money per hour</p>
        <p>Dirt Production: {{ passiveDirtRate }} dirt per hour</p>
        <p>Dirt Unit Price: {{ dirtUnitPrice }} money</p>
        <p>Morality: {{ morality }} thetans</p>
      </div>
      <div class="staff" v-if="hiredStaff.length > 0">
        <h3>Employees:</h3>
        <ul>
          <li v-for="(employee, index) in hiredStaff" :key="index">
            <p class="stat">{{employee.name}}: {{employee.count}}</p>
            <button class="remove-button" @click="dismissEmployee(employee)">
              Dismiss 1
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="actions">
      <button type="button" name="button" @click="startTime">Start</button>
      <button type="button" name="button" @click="stopTime">Stop</button>
      <button type="button" name="button" @click="unlockables">Check for unlocked things</button>
    </div>
    <!-- <button type="button" name="button" @click="test">Test</button> -->
    <!-- <button type="button" name="button" @click="buy">Buy a thing ($20)</button> -->
    <Container/>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Container from "@/components/Container.vue";

export default {
  name: "HUD",
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "startTimer",
      "genericDispatch",
      "checkForUnlockableUpgrades",
      "reduceCount"
    ]),
    startTime() {
      this.startTimer();
    },
    stopTime() {
      this.genericDispatch({
        mutation: "stopTimer",
        payload: null
      });
    },
    unlockables() {
      this.checkForUnlockableUpgrades();
    },
    dismissEmployee(employee) {
      this.reduceCount(employee);
    }
  },
  computed: {
    ...mapState([
      "dirtUnitPrice",
      "morality",
      "laborCost",
      "money",
      "goodDirt",
      "maxGoodDirt",
      "passiveDirtRate"
    ]),
    ...mapGetters([
      "hiredStaff",
      "laborCostPerTick",
      "dirtProductionPerTick",
      "getMorality"
    ])
  },
  components: {
    Container
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../variables.less";

#hud {
  width: 100%;
  text-align: center;
  border: 1px solid @border-color;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  .section-heading {
    margin: 0;
  }
}
.stats,
.actions {
  width: 100%;
  display: flex;
}

.currency,
.staff {
  flex-grow: 1;
  text-align: left;

  .remove-button {
    white-space: nowrap;
    padding: 2px;
    width: min-content;
    border-radius: 5px;
    background-color: @destructive-red;
    color: #ffffff;
  }
}

ol {
  padding-inline-start: 20px;
}

li {
  list-style: none;
}

p {
  margin: 0;
  text-align: left;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
