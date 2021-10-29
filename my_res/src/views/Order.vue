<template>
  <div>
    <div class="row">
      <div class="col-md-9"><OrderGrid /></div>
      <div class="col-md-3"><Invoice /></div>
    </div>
  </div>
</template>

<script>
import OrderGrid from "../components/Order/OrderGrid.vue";
import Invoice from "../components/Order/Invoice.vue";

export default {
  components: { OrderGrid, Invoice },
};
</script>

<style scoped></style>
