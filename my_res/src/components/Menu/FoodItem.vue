<template>
  <!-- v-bind:src="require('../../assets/Menu/' + item.image)" -->
  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div
        class="col-lg-4 col-md-6 col-sm-12"
        v-for="item in foodmenu"
        :key="item.id"
      >

        <FoodCard :food="item" :id="item.id" />

      </div>
    </div>
  </div>
</template>

<script>
import FoodCard from "./FoodCard.vue";

export default {
  name: "FoodItem",
  components: { FoodCard },
  props: ["foodmenu"],
};
</script>

<style scoped>
.center {
  text-align: center;
}

img {
  height: 220px;
  object-fit: cover;
}

#des {
  -webkit-line-clamp: 3;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
