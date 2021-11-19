<template>
<!-- v-bind:src="require('../../assets/Menu/' + item.image)" -->
  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div
        class="col-lg-4 col-md-6 col-sm-12"
        v-for="item in foodmenu"
        :key="item.id"
      >
        <div class="card p-3 border bg-light h-100">
          <img
            :src="item.image"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Giá: {{ item.price }} VNĐ</p>
            <p class="card-text">
            <!-- {{ item.description.slice(0,100) }} -->
            {{ item.description.slice(0,82) }}
            </p>
            <button class="btn btn-primary center">Mua</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FoodItem",
  props: [
    'foodmenu'
  ]
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
</style>
