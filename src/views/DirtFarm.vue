<template>
  <div class="dirt-farm">
    <HUD/>
    <ClickSpace/>
    <Upgrades/>
  </div>
</template>

<script>
// @ is an alias to /src
// imported name must be same as file name apparently.
import HUD from "@/components/HUD.vue";
import Upgrades from "@/components/Upgrades.vue";
import ClickSpace from "@/components/ClickSpace.vue";

export default {
  name: "DirtFarm",
  components: {
    HUD,
    Upgrades,
    ClickSpace
  },
  data() {
    return {};
  }
};
</script>
