<template>
  <button id="click-space" @click="clicked">
    <h4>Click to Farm Dirt!</h4>
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ClickSpace",
  methods: {
    ...mapActions(["incrementClicked"]),
    clicked() {
      this.$store.commit("incrementClicked");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../variables.less";

#click-space {
  margin: auto;
  width: 100%;
  height: 200px;
  border: 4px solid @border-color;
  background-color: @dirt-color;
  background-image: url("../assets/imgs/DirtTexture.png");
  background-repeat: repeat;
  background-size: 150px 150px;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    border-color: lighten(@border-color, 10%);
    box-shadow: inset 0 0 15px;
    h4 {
      text-shadow: 0px 0px 60px black;
    }
  }

  h4 {
    font-size: 40px;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
}
</style>
