<template>
  <div id="menu">
    <h1 class="section-heading">Welcome to the Dirt Farm.</h1>
    <div class="buttons-wrapper">
      <button @click="saveGame">Save Game</button>
      <button @click="loadGame">Load Game</button>
      <button>This Button Does NOTHING!</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// imported name must be same as file name apparently.


export default {
  name: "Menu",

  data() {
    return {};
  },
  methods: {
    saveGame() {
      console.log("Save Game");
    },
    loadGame() {
      console.log("Load Game");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../variables.less";
#menu {
  width: 100%;
  text-align: center;
}

.buttons-wrapper {
  width: 100%;
  background: orange;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    border-radius: 5px;
    color: @base-text-color;
  }
}
</style>
