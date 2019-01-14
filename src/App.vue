<template>
  <div id="app">
    <h1>Dirt Farm</h1>
    <div id="nav">
      <router-link to="/"><span @click="pause">Menu</span></router-link> |
      <router-link to="/dirt-farm"><span @click="start">Dirt Farm</span></router-link> |
      <router-link to="/inventory">Inventory</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Upgrades",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["genericDispatch", "startTimer"]),
    pause() {
      this.genericDispatch({
        mutation: "stopTimer",
        payload: null
      });
    },
    start() {
      this.startTimer();
    }
  }
};
</script>

<style lang="less">
@import "./variables.less";

* {
  box-sizing: border-box;
}

html,
body {
  background-color: @background-color;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: @font-roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @base-text-color;

  .section-heading,
  .section-subheading {
    text-align: center;
    width: 100%;
  }
}

.stat {
  font-weight: bolder;
}

h1 {
  margin: 10px;
}

#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #587ea4;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
