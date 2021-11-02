<template>
  <div>
    <!-- <Progress /> -->

    <router-view />

    <!-- <YourCart /> -->

    <!-- <Destination v-else-if="currentPage === 2" /> -->
  </div>
</template>

<script>
import Progress from "../components/Order/Progress.vue";
import YourCart from "../components/Order/YourCart.vue";
import Destination from "../components/Order/Destination.vue";
import Confirm from "../components/Order/ConfirmOrder.vue";

export default {
  data() {
    return {
      currentPage: 2,
    };
  },
  components: { YourCart, Destination, Confirm },
};
</script>

<style scoped></style>
