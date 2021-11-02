<template>
  <div>
      <!-- <Login/> -->
    <forgot-pw/>
    <!-- <register/> -->
  </div>
</template>

<script>
import Login from "../components/Login/Login.vue"
import ForgotPw from "../components/Login/forgotPassword.vue"
import Register from "../components/Register/register.vue"
export default {
components:{ Login , ForgotPw, Register}
}
</script>

<style>

</style>