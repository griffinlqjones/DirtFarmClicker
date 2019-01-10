<template>
  <div id="upgrades-panel">
    <h3 class="section-heading">Upgrade Panel</h3>
    <h4 class="section-subheading">This is where you upgrade your dirt farm</h4>
    <!-- <UpgradeCard/> -->
    <button class="upgrade-card" v-for="(upgrade, index) in upgrades" :key="index" @click="buy(upgrade)">
      <h4>{{upgrade.name}}</h4>
      <p>{{upgrade.description}}</p>
      <p>Cost: {{upgrade.price}} money</p>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Upgrades",
  data() {
    return {};
  },
  methods: {
    buy(item) {
      this.$store.commit("buyUpgrade",item);
    }
  },
  computed: {
    ...mapState(["upgrades"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#upgrades-panel {
  border: 1px solid grey;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}

.upgrade-card {
  min-width: 18%;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
}

h3, h4, p {
  margin: 0;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
