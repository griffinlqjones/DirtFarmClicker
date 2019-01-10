<template>
  <div id="app">
    <h1>Dirt Farm</h1>
    <div id="nav">
      <router-link to="/">Dirt Farm</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/victory">Victory</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}
html, body {
  background-color: #200707;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #200707;
  color: white;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #587ea4;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
