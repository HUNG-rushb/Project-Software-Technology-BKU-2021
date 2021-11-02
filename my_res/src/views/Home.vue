<template>
  <div>
    <Header />

    <HeaderVideo />

    <CheckCart />

    <AddToast />

    <HomeMenu />

    <GoogleMap />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import HeaderVideo from "../components/Home/HeaderVideo.vue";
import CheckCart from "../components/Layout/CheckCart.vue";
import AddToast from "../components/Layout/AddToast.vue";
import HomeMenu from "../components/Home/HomeMenu.vue";
import GoogleMap from "../components/Layout/GoogleMap.vue";
import Footer from "../components/Layout/Footer.vue";

export default {
  components: {
    HeaderVideo,
    Header,
    HomeMenu,
    Footer,
    CheckCart,
    AddToast,
    GoogleMap,
  },
};
</script>

<style scoped></style>
