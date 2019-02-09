<template>
  <div id="containers-panel">
    <h3 class="stat heading">Sell</h3>
    <div class="containers-wrapper">
      <button class="container-card" v-for="(container, index) in shippingContainers" :key="index" @click="sellDirt(container)">
        <h3>{{container.name}}</h3>
        <p>-{{container.capacity}} Good Dirt</p>
        <p>+{{calcProfit(container)}} Currency</p>
      </button>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Container",
  methods: {
    ...mapActions(["genericDispatch", "sellDirt"]),
    /* For selling dirt in containers */
    sell(shippingObject) {
      this.sellDirt(shippingObject);
    }
  },
  computed: {
    ...mapState(["dirtUnitPrice"]),
    ...mapGetters(["shippingContainers", "calcProfit"])
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../variables.less";

#containers-panel {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-width: 1px 0px;
  border-style: solid;
  border-color: @border-color;

  .heading {
    width: 100%;
    margin: 0;
  }
}

.containers-wrapper {
  width: 100%;
  overflow-x: scroll;
}

.container-card {
  min-width: 20%;
  padding: 10px;
  margin: 5px;

  // &:active {
  //   // background-color: black;
  // }

  h3,
  p {
    margin: 0;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    text-align: left;
    margin-bottom: 0.5rem;
  }
}
</style>
