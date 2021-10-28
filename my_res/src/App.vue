<template>
  <div>
    <!-- <router-view></router-view> -->

    <!-- <CartCard /> -->
    <!-- <Progress /> -->
    <!-- <OrderGrid /> -->

    <Order />
  </div>
</template>

<script>
// import Test from "./views/Test.vue";
import Order from "./views/Order.vue";
// import FoodCard from "./components/Menu/FoodCard.vue";
import CartCard from "./components/Order/CartCard.vue";
import Progress from "./components/Order/Progress.vue";
import OrderGrid from "./components/Order/OrderGrid.vue";

export default {
  components: { Order, CartCard, Progress, OrderGrid },
};
</script>

<style>
/* Import Bootstrap */
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-icons/font/bootstrap-icons.css";

/* Import Google Font  */
/* @import url("https://fonts.googleapis.com/css?family=Roboto:100,400,900");
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700"); */

/* #8e9189, #494449, #857f74, #eeefeb, #ddeac1  */
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  /* font-family: "Montserrat", sans-serif; */
  margin: 0;
  height: 100%;
}
</style>
