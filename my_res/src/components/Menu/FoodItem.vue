<template>
  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div
        class="col-lg-4 col-md-6 col-sm-12"
        v-for="product in products"
        :key="product.food_id"
      >
        <div class="card p-3 border bg-light">
          <img
            v-bind:src="require('../../assets/Menu/' + product.food_image)"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.food_name }}</h5>
            <p class="card-text">Giá: {{ product.food_price }} VNĐ</p>
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
  data: () => {
    return {
      products: [
        {
          food_id: 1,
          food_name: "Cơm tấm",
          food_price: 100000,
          food_type: "food",
          food_image: "comtam.jpg",
        },
        {
          food_id: 2,
          food_name: "Bánh mì",
          food_price: 80000,
          food_type: "food",
          food_image: "banhmi.jpg",
        },
        {
          food_id: 3,
          food_name: "Phở",
          food_price: 90000,
          food_type: "food",
          food_image: "pho.jpg",
        },
        {
          food_id: 4,
          food_name: "Coca",
          food_price: 10000,
          food_type: "drink",
          food_image: "coca.jpg",
        },
        {
          food_id: 5,
          food_name: "Pepsi",
          food_price: 10000,
          food_type: "drink",
          food_image: "pepsi.jpg",
        },
        {
          food_id: 6,
          food_name: "Cơm dương châu",
          food_price: 120000,
          food_type: "food",
          food_image: "comchien.png",
        },
        {
          food_id: 7,
          food_name: "Hủ tiếu",
          food_price: 100000,
          food_type: "food",
          food_image: "hutieu.jpg",
        },
        {
          food_id: 8,
          food_name: "Trà chanh",
          food_price: 20000,
          food_type: "drink",
          food_image: "trachanh.jpg",
        },
        {
          food_id: 9,
          food_name: "Nước khoáng",
          food_price: 10000,
          food_type: "drink",
          food_image: "nuockhoang.png",
        },
      ],
    };
  },
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
