<template>
  <div id="upgrades-panel">
    <h2 class="section-heading">Upgrade Panel</h2>
    <p class="section-subheading">This is where you upgrade your dirt farm</p>
    <!-- <UpgradeCard/> -->
    <button class="upgrade-card" v-for="(upgrade, index) in availableUpgrades" :key="index" @click="buy(upgrade)">
      <h3 class="section-heading">{{ upgrade.name }}</h3>
      <h4>Price: {{ upgrade.aquisitionCost }} {{ upgrade.acquisitionCurrency}}</h4>
      <p class="description">{{ upgrade.lockedDescription }}</p>
      <template v-if="upgrade.type == 'shippingContainer'">
        <p><span class="stat">Ships:</span> {{ upgrade.capacity }} units of dirt per shipment</p>
        <p><span class="stat">Shipping Cost:</span> {{ upgrade.intervalCost }} {{ upgrade.acquisitionCurrency }} per shipment</p>
      </template>
      <template v-else-if="upgrade.type == 'staff'">
        <p><span class="stat">Wage:</span> {{ upgrade.intervalCost }} money/hr</p>
        <!-- <p>Daily Hours: {{ upgrade.capacity }}</p> -->
        <p><span class="stat">Produces:</span> {{ upgrade.value }} units of dirt per hour (stackable)</p>
      </template>
      <template v-else-if="upgrade.type == 'propertyExpansion'">
        <p><span class="stat">Maximum Dirt:</span> +{{ upgrade.capacity }}</p>
      </template>
      <template v-else-if="upgrade.type == 'dirtQuality'">
        <p><span class="stat">Dirt Value per unit:</span> +{{ upgrade.value }}</p>
      </template>
      <template v-if="upgrade.morality != 0">
        <p><span class="stat">Moral Implications</span>: {{upgrade.morality > 0 ? "+" : ""}} {{ upgrade.morality }} thetans</p>
      </template>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Upgrades",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["buyUpgrade"]),
    buy(upgrade) {
      this.buyUpgrade(upgrade);
    }
  },
  computed: {
    ...mapGetters(["availableUpgrades"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../variables.less";

#upgrades-panel {
  border: 1px solid @border-color;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}

.upgrade-card {
  max-width: 50%;
  padding: 8px;
}

.description {
  // background-color: #faf9cf;
}

h2,
h3,
p {
  // color: white;
  text-align: left;
  margin: 0;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 0.5rem;
}

p {
  padding: 3px;
}
</style>
