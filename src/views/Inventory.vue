<template>
  <div id="inventory">
    <h2>Acquired Upgrades</h2>
    <div class="upgrade-card" v-for="(upgrade, index) in ownedUpgrades" :key="index" @click="display(upgrade)">
      <h3>{{upgrade.name}} <span v-if="upgrade.repurchaseable">({{upgrade.count}})</span></h3>
      <p>{{upgrade.unlockedDescription}}</p>
      <template v-if="upgrade.type == 'shippingContainer'">
        <p><span class="stat">Shipping Cost:</span> {{upgrade.intervalCost}} cubic dollars per shipment</p>
        <p><span class="stat">Ships:</span> {{upgrade.capacity}} units of dirt per shipment</p>
      </template>
      <template v-else-if="upgrade.type == 'staff'">
        <p><span class="stat">Wage:</span> {{upgrade.intervalCost}} money/hr</p>
        <!-- <p>Daily Hours: {{upgrade.capacity}}</p> -->
        <p><span class="stat">Produces:</span> {{upgrade.value}} per hour (stackable)</p>
      </template>
      <template v-else-if="upgrade.type == 'propertyExpansion'">
        <p><span class="stat">Maximum Dirt:</span> +{{ upgrade.capacity }}</p>
      </template>
      <template v-else-if="upgrade.type == 'dirtQuality'">
        <p><span class="stat">Dirt Value per unit:</span> +{{ upgrade.value }}</p>
      </template>
      <template v-if="upgrade.morality != 0">
        <p><span class="stat">Moral Implications:</span> {{upgrade.morality > 0 ? "+" : ""}} {{ upgrade.morality }} thetans</p>
      </template>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Inventory",
  data() {
    return {};
  },
  methods: {
    // Use display method to display full upgrade info
    display(item) {
      console.log(item);
    }
  },
  computed: {
    ...mapGetters(["ownedUpgrades"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../variables.less";

#inventory {
  border: 1px solid @border-color;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}

.upgrade-card {
  padding: 10px;
  margin: 5px;
  background-color: #beeeef;
  color: #01031f;
  border: 4px solid @border-color;
}

h3 {
  text-align: center;
}

h2,
h3,
p {
  margin: 0;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 0.5rem;
}

p {
  text-align: left;
}
</style>
