<template>
  <div id="hud">
    <p>Money: {{ money }} cubic dollars</p>
    <p>Good Dirt: {{ goodDirt }} cubic meters</p>
    <p>Property Size: {{ propertySize }} square units of collective surface dirt</p>
    <button type="button" name="button" @click="startTime">Start</button>
    <button type="button" name="button" @click="stopTime">Stop</button>
    <!-- <button type="button" name="button" @click="sell">Sell a bucket of dirt (20 liters)</button> -->
    <!-- <button type="button" name="button" @click="buy">Buy a thing ($20)</button> -->
    <Container/>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Container from "@/components/Container.vue";

export default {
  name: "HUD",
  data() {
    return {};
  },
  methods: {
    startTime() {
      this.$store.dispatch("startTimer");
    },
    stopTime() {
      this.$store.commit("stopTimer");
    },
    // sell() {
    //   this.$store.commit("sellDirt", 20);
    // },
    buy() {
      this.$store.commit("buyStuff", 20);
    }
  },
  computed: {
    ...mapState(["money", "goodDirt", "propertySize"])
  },
  components: {
    Container
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#hud {
  border: 1px solid grey;
  // background-color: #ece3bc;
  width: 100%;
  // height: 200px;
  // display: flex;
  // flex-wrap: wrap;
}

p {
  text-align: left;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
