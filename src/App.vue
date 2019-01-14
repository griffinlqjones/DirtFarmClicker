<template>
  <div id="app">
    <h1>Dirt Farm</h1>
    <div id="nav">
      <router-link to="/">Dirt Farm</router-link> |
      <router-link to="/inventory">Inventory</router-link> |
      <router-link to="/victory">Victory</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  // background-color: @background-color;
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
