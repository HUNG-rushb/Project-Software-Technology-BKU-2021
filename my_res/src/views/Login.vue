<template>
  <div>
    <!-- <Login/> -->
    <forgot-pw />
    <!-- <register/> -->
  </div>
</template>

<script>
import Login from "../components/Login/Login.vue";
import ForgotPw from "../components/Login/ForgotPassword.vue";
import Register from "../components/Register/Register.vue";
export default {
  components: { Login, ForgotPw, Register },
};
</script>

<style></style>
