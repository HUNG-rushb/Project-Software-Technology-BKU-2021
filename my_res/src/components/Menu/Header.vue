<template>
  <div class="row" id="header">
    <div class="col-lg-6 col-sm-12">
      <h1>Menu</h1>
    </div>
    <div class="col-lg-6 col-sm-12">
      <h5>Home | Menu | Contact</h5>
      
      <div>
        <label for="search" class="center" id="search_label">Tìm kiếm: </label>
        <input type="text" name="search_value" class="form-control" id="search">
        <button class="btn btn-light">Tìm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h1 {
  text-align: left;
  padding-left: 22px;
}

#header {
    border-bottom: solid black 1px;
}

h5 {
    margin-left: 30%;
    margin-top: 50px;
}

.center {
    margin-left: 30%;
}

/* #search {
    width: 200px;
    margin-left: 105px;
} */

.form-control {
    width: 25%;
    display: inline-block;
    margin-left: 10px;
}

.btn-light {
    /* border-color: blue; */
    margin-left: 10px;
}
</style>