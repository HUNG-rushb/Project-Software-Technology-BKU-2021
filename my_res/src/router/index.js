import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login/Login.vue";
import ForgotPassword from "../components/Login/ForgotPassword.vue";
import Register from "../components/Register/Register.vue";

import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";

import Order from "../views/Order.vue";
import YourCart from "../components/Order/YourCart.vue";
import Destination from "../components/Order/Destination.vue";
import ConfirmOrder from "../components/Order/ConfirmOrder.vue";

import Feedback from "../views/Feedback.vue";

import Error_404 from "../views/Page_404.vue";
import Test from "../views/Test.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    components: { default: Home },
  },
  {
    path: "/login",
    name: "Login",
    components: { default: Login },
  },
  {
    path: "/register",
    name: "Register",
    components: { default: Register },
  },
  {
    path: "/resetpassword",
    name: "ForgotPasword",
    components: { default: ForgotPassword },
  },
  {
    path: "/menu",
    name: "Menu",
    components: { default: Menu },
  },

  {
    path: "/order",
    name: "Order",
    components: { default: Order },
    children: [
      {
        name: "cart",
        path: "/order/cart",
        component: YourCart,
      },
      {
        name: "destination",
        path: "/order/destination",
        component: Destination,
      },
      {
        name: "confirm",
        path: "/order/confirm",
        component: ConfirmOrder,
      },
    ],
  },
  {
    path: "/feedback",
    name: "Feedback",
    components: { default: Feedback },
  },
  { path: "/:notFound(.*)", component: Error_404 },
  {
    path: "/test",
    name: "Test",
    components: { default: Test },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;
