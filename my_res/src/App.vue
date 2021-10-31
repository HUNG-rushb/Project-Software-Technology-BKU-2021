<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/feedback">FeedBack</router-link>
    <router-view />
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import Feedback from './views/Feedback.vue'

  export default {
    components: { Feedback, Home },
  }
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
  padding: 0;
  margin: 0;
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
