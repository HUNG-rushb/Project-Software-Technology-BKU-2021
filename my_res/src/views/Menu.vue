<template>
  <div>
    <Header />

    <OrderButton />
    <AddToast />

    <ZaloChat />
    <ReviewFood />

    <div class="row" id="menu">
      <div class="col-lg-9 col-md-9 col-sm-12" id="left_col">
        <FoodItem :foodmenu="searchMenu" />
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12" id="right_col">
        <div>
          <br />
          <br />
          <label for="search" class="left" id="search_label">Tìm kiếm: </label>

          <input
            type="text"
            v-model="search"
            name="search_value"
            class="form-control"
            id="search"
          />
          <br />
          <br />
          <br />
          <br />
          <br />

          <label for="sort" class="left" id="sort_label">Sắp xếp theo: </label>
          <select id="sort" class="form-select" v-model="sort" name="Sort">
            <option value="default" class="option" selected>Mặc định</option>
            <option value="aaa" class="option">Tên: A -> Z</option>
            <option value="zzz" class="option">Tên: Z -> A</option>
            <option value="high" class="option">Giá: Cao -> Thấp</option>
            <option value="low" class="option">Giá: Thấp -> Cao</option>
          </select>
        </div>
      </div>
    </div>

    <Footer />

    <CheckCart />
  </div>
</template>

<script>
import FoodItem from "../components/Menu/FoodItem.vue";
import getMenu from "../firebase/getMenu.js";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";

import CheckCart from "../components/Layout/CheckCart.vue";
import OrderButton from "../components/Layout/OrderButton.vue";
import AddToast from "../components/Layout/AddToast.vue";
import ReviewFood from "../components/Menu/ReviewFood.vue";
import ZaloChat from "../components/Layout/ZaloChat.vue";

export default {
  name: "Menu",
  components: {
    FoodItem,
    Header,
    CheckCart,
    Footer,
    OrderButton,
    AddToast,
    ReviewFood,
    ZaloChat,
  },
  data() {
    // console.log(getMenu);
    return {
      foodmenu: getMenu,
      search: "",
      sort: "",
      filter: "",
    };
  },
  method: {
    filterMenu(category) {
      this.resetMenu();
      if (category !== "All") {
        this.foodmenu = this.foodmenu.filter((item) => {
          return item.type === category;
        });
      }
    },

    resetMenu() {
      this.foodmenu = getMenu;
    },

    filterFood() {
      return this.foodmenu.filter((item) => {
        return item.type === "food";
      });
    },
  },
  computed: {
    searchMenu: function() {
      var foodmenu = this.foodmenu.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });

      // if (this.filter == 'all')
      // {
      //     foodmenu = data;
      // }
      // else if (this.filter == 'food')
      // {
      //     foodmenu = this.foodmenu.filter((item) => {
      //     return item.type == 'food';
      //   });
      // }
      // else if (this.filter == 'drink')
      // {
      //     foodmenu = this.foodmenu.filter((item) => {
      //     return item.type == 'drink';
      //   });
      // }

      if (this.sort == "high") {
        return foodmenu.sort(function(a, b) {
          return b.price - a.price;
        });
      } else if (this.sort == "low") {
        return foodmenu.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (this.sort == "aaa") {
        return foodmenu.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (this.sort == "zzz") {
        return foodmenu.sort((a, b) => (b.name > a.name ? 1 : -1));
      } else {
        return foodmenu;
      }
    },
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

  margin-top: 10rem;

  margin-bottom: 20px;
}
.left {
  float: left;
}
.form-check {
  /* float: right; */

  margin-left: 90px;
}
.form-select {
  /* width: 200px; */
  margin-left: 90px;

  padding-left: 10px;
}
#sort {
  width: 200px;
}
#sort_label,
#search_label {
  padding-top: 8px;
}
.option {
  width: 100px;
}
#search {
  width: 200px;

  margin-left: 30px;
  display: inline-block;
}

label,
.option,
#sort,
.form-control {
  font-size: 90%;
}
</style>
