<template>
  <div>
    <HeaderVideo />
    <Header />
    <!-- Home -->

    <Footer />
  </div>
</template>

<script>
import HeaderVideo from "../components/Header Footer/HeaderVideo.vue";
import Header from "../components/Header Footer/Header.vue";
import Footer from "../components/Header Footer/Footer.vue";

export default {
  components: { HeaderVideo, Header, Footer },
};
</script>

<style scoped></style>
