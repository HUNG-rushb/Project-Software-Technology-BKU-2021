import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Test from "../views/Test.vue";
import Feedback from "../views/Feedback.vue";
import ThankU from "../components/Feedback/ThankU.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    components: { default: Home },
  },
  {
    path: "/menu",
    name: "Menu",
    components: { default: Menu },
  },
  {
    path: "/feedback",
    name: "Feedback",
    components: { default: Feedback }
  },
  {
    path: "/thanku",
    name: "ThankU",
    components: { default: ThankU }
  }
  // {
  //   path: "/test",
  //   name: "Test",
  //   components: { default: Test },
  // },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
