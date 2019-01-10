<template>
  <div id="click-space" @click="clicked">
    <h4>Click to Farm Dirt!</h4>
  </div>
</template>

<script>
export default {
  name: "ClickSpace",
  methods: {
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
  width: 200px;
  height: 200px;
  border: 4px solid black;
  background-color: @dirtColor;
  background-image: url("../assets/imgs/DirtTexture.png");
  background-repeat: repeat;
  background-size: 200px 200px;
  background-position: center;
  color: white;
}

h4 {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
