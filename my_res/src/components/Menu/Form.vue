<template>
  <form action="">
    <img src="../../assets/place_holder.jpg" alt="..." />
    <input type="button" value="Chọn hình ảnh" class="btn right" id="browse_btn">
    <br />
    <label for="food_name">Nhập tên món: </label>
    <input type="text" class="txt_input" id="food_name" />
    <br />
    <label for="food_price">Nhập giá món: </label>
    <input type="text" class="txt_input" id="food_price" />
    <br>
    <label for="">Category: </label>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="food_type" id="type_food" checked />
      <label class="form-check-label" for="type_food">
        Food
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="food_type" id="type_drink" />
      <label class="form-check-label" for="type_drink">
        Drink
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style>
/* .center {
        align-content: center;
    }

    .left {
        text-align: left;
    } */
form {
  max-width: 430px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: solid black 1px;
}
label {
  color: black;
  display: inline-block;
  /* margin: 25px 0 15px; */
  letter-spacing: 1px;
}

.txt_input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  color: #555;
}

.form-check {
    margin-left: 270px;
    text-align: right;
}

.right {
    float: right;
}

#browse_btn {
    background-color: lightgray;
}

</style>