import Vue from "vue";
import Router from "vue-router";
import DirtFarm from "./views/DirtFarm.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dirt-farm",
      component: DirtFarm
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue")
    },
    {
      path: "/victory",
      name: "victory",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Victory.vue")
    }
  ]
});
