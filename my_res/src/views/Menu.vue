<template>
  <div>
    <Header />

    <CheckCart />

    <!-- <Header /> -->
    <!-- <h1>Menu</h1> -->
    <div class="row" id="menu">
      <!-- <FoodItem /> -->
      <div class="col-lg-9 col-md-9 col-sm-12" id="left_col">
        <Grid />
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12" id="right_col">
        <div>
          <!-- <label for="search" class="left" id="search_label">Tìm kiếm: </label>
        <input type="text" name="search_value" class="form-control" id="search">
        <br> <br> <br> <br> <br> -->
          <label for="sort" class="left" id="sort_label">Sắp xếp theo: </label>
          <select id="sort" class="form-select">
            <option value="aaa" class="option">Tên: A-Z</option>
            <option value="zzz" class="option">Tên: Z-A</option>
            <option value="high" class="option">Giá: Cao-Thấp</option>
            <option value="low" class="option">Giá: Thấp-Cao</option>
          </select>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <label class="left">Category: </label>
          <br />
          <div class="form-check">
            <input
              class="form-check-input right"
              type="radio"
              name="food_type"
              id="type_all"
              checked
            />
            <label class="form-check-label" for="type_all"> All </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input right"
              type="radio"
              name="food_type"
              id="type_food"
            />
            <label class="form-check-label" for="type_food"> Food </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input right"
              type="radio"
              name="food_type"
              id="type_drink"
            />
            <label class="form-check-label" for="type_drink"> Drink </label>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// import FoodItem from '../components/Menu/FoodItem.vue'
import Grid from "../components/Menu/Grid.vue";
// import Header from "../components/Header.vue";

import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import CheckCart from "../components/Layout/CheckCart.vue";

export default {
  name: "MenuPhu",
  components: {
    // FoodItem
    Grid,
    Header,
    CheckCart,
    Footer,
  },
};
</script>

<style scoped>
#left_col {
  border-right: solid black 1px;
  padding-top: 30px;
}
#right_col {
  padding-top: 30px;
}
#menu {
  padding-top: 0;
  margin-top: 14rem;
  margin-bottom: 14rem;
}
.left {
  float: left;
}
.form-check {
  /* float: right; */
  margin-left: 100px;
}
.form-select {
  /* width: 200px; */
  margin-left: 105px;
  padding-left: 10px;
}
#sort {
  width: 200px;
}
#sort_label,
#search_label {
  padding-top: 5px;
}
.option {
  width: 100px;
}
#search {
  width: 200px;
  margin-left: 105px;
}
</style>
