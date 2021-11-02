<template>
  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItem  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItem  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItem  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItem  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItem  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItem  class="p-3 border bg-light"/>
      </div>
    </div>
  </div>
</template>

<script>

import FoodItem from './FoodItem.vue'

export default {
  name: "Grid",
  components: {
      FoodItem
  }
};
</script>