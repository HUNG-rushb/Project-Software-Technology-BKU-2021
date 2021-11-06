<template>
  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItemEdit  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItemEdit  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItemEdit  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItemEdit  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItemEdit  class="p-3 border bg-light"/>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <FoodItemEdit  class="p-3 border bg-light"/>
      </div>
    </div>
  </div>
</template>

<script>

import FoodItemEdit from './FoodItemEdit.vue'

export default {
  name: "GridEdit",
  components: {
      FoodItemEdit
  }
};
</script>