import Vue from "vue";
import Router from "vue-router";
import Menu from "./views/Menu.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "menu",
      component: Menu
    },
    {
      path: "/dirt-farm",
      name: "dirt-farm",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/DirtFarm.vue")
    },
    {
      path: "/inventory",
      name: "inventory",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Inventory.vue")
    }
  ]
});
