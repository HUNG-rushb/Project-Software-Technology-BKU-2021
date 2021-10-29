<template>
  <div>
    <Header />

    <HeaderVideo />

    <CheckCart> </CheckCart>

    <HomeMenu />

    <Footer />
  </div>
</template>

<script>
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import HomeMenu from "../components/Home/HomeMenu.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import CheckCart from "../components/Layout/CheckCart.vue";

export default {
  components: { HeaderVideo, Header, HomeMenu, Footer, CheckCart },
};
</script>

<style scoped></style>
