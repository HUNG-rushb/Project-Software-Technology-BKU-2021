<template>
  <div class="main">
    <Header />
    <div class="container custom">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-xm-12"><Form /></div>
        <div class="col-lg-6 col-md-12 col-xm-0"><Logo /></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Form from "../components/Feedback/Form.vue";
import Logo from "../components/Feedback/Logo.vue";
import Footer from "../components/Layout/Footer.vue";

export default {
  components: {
    Header,
    Form,
    Logo,
    Footer,
    Footer
},
};
</script>

<style scoped>
.main {
  background-color: #b3b3b3;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.custom {
  background-color: #fff;
  margin: 90px auto 30px;
  border-radius: 4px;
}
</style>
