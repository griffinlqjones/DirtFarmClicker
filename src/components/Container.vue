<template>
  <div id="containers-panel">
    <button class="container-card" v-for="(container, index) in shippingContainers" :key="index" @click="sell(container)">
      <h4>{{container.name}}</h4>
      <p>-{{container.capacity}} Good Dirt</p>
      <p>+ Money</p>
    </button>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "Container",
  methods: {
    sell(shippingObject) {
      this.$store.commit("sellDirt", shippingObject);
    }
  },
  computed: {
    ...mapState(["shippingContainers"])
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#containers-panel {
  width: 100%;
  display: flex;
  overflow: hidden;
}

.container-card {
  min-width: 18%;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
}

h4, p {
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin: 0;
  text-align:left;
}

</style>
