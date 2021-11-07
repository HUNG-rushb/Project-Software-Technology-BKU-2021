<template>
  <div id="FPW">
    <Header />
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-3">
          <form class="form-container">
            <h2 class="text-center">
              Đặt lại mật khẩu
            </h2>
            <br />
            <div class="mb-3 form-floating">
              <input
                type="text"
                v-model="phoneNumbers"
                class="form-control"
                placeholder="Enter Your Password "
              />
              <label for="floatingInput"> Nhập số điện thoại</label>
            </div>
            <div class="mb-3 form-floating">
              <input
                type="password"
                class="form-control"
                placeholder="Enter New Password"
              />
              <label for="floatingInput"> Nhập mật khẩu mới</label>
            </div>
            <div class=" mb-3 row">
              <div class="col-sm-6  form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Code"
                />
                <label for="floatingInput"> Nhập mã xác nhận</label>
              </div>

              <div class="col-sm-6 d-flex justify-content-center ">
                <button
                  type="submit"
                  @click.prevent="generateOTP"
                  class="btn btn-primary"
                >
                  Lấy mã xác nhận
                </button>
              </div>
            </div>
            <br />
            <div class="d-flex justify-content-center ">
              <button type="submit" class="btn btn-primary">Xác nhận</button>
            </div>
            <hr />
            <p class="small text-center">Quay lại đăng nhập ?</p>
            <div class="d-flex justify-content-center">
              <router-link to="/login">
                <button class="btn btn-primary">Đăng nhập</button>
              </router-link>
            </div>
          </form>
        </section>
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      phoneNumbers: "",
    };
  },
  methods: {
    generateOTP() {
      var string =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let OTP = "";
      // Tìm độ dài của chuỗi
      var len = string.length;
      for (let i = 0; i < 6; i++) {
        OTP += string[Math.floor(Math.random() * len)];
      }
      alert("send code ( " + OTP + " ) to " + this.phoneNumbers);
      //return OTP;
    },
  },
};
</script>

<style scoped>
#FPW {
  background-image: url("../../assets/background.jpg");
  background-size: cover;
}
.form-container {
  /* position: absolute; */
  margin-top: 5rem;
  top: 140px;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px #000;
  width: 400px;
  background-image: linear-gradient(to bottom right, #e9dcdc, #fef2e2);
}
</style>
