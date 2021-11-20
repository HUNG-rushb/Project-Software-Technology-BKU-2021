<template>
  <div>
    <button @click="toggleActive">toggle MoMo</button>

    <img v-if="isActive == true" :src="qrCode" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    qrCode() {
      const amount = this.$store.getters.totalSum.toString();
      return "http://momofree.apimienphi.com/api/QRCode?phone=0964407953".concat(
        "&amount=",
        amount,
        "& note=",
        parseInt(amount).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })
      );
    },
  },
  methods: {
    toggleActive() {
      if (this.isActive == true) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      //    window.location = res.data.order_url;
    },
  },
};
</script>

<style scoped>
img {
  max-height: 20rem;
  max-width: 20rem;
}
</style>
