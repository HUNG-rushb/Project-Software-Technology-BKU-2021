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
            <div class="mb-3 form-floating" >
              <input
                type="text"
                v-model="phoneNumbers"
                class="form-control"
                :class="{ 'is-invalid': isphone }"
                placeholder="Enter Your Password "
                @blur="this.isphone = false"
              />
              <label for="floatingInput"> Nhập số điện thoại</label>
              <div class="invalid-feedback">
                 {{messagePhone}}
                </div>
            </div>
            <div class="mb-3 form-floating">
              <input
                type="password"
                class="form-control"
                placeholder="Enter New Password"
                v-model="this.newPwd"
              />
              <label for="floatingInput"> Nhập mật khẩu mới</label>
            </div>
            <div class=" mb-3 row">
              <div class="col-sm-6  form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Code"
                  v-model="this.OTPcode"
                  :class="{'is-invalid': isOTP}"
                  @blur="this.isOTP = false"
                />
                <label for="floatingInput" > Nhập mã xác nhận</label>
                <div class="invalid-feedback">
                 {{messageOTP}}
                </div>
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
              <button type="submit" class="btn btn-primary" @click.prevent="UpdatePwd">Xác nhận</button>
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
import { projectFirestore } from "../../firebase/config";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      phoneNumbers: "",
      newPwd:"",
      OTPcode:"",
      OTP:"",
      messageOTP:"",
      messagePhone:"",
      isphone:null,
      isOTP:null
    };
  },
  methods: {
   async UpdatePwd()
    {
      const account = projectFirestore.collection("Customer Account").doc(this.phoneNumbers)
      if((await account.get()).exists )
      {
        if(this.OTP == this.OTPcode)
        {
            projectFirestore.collection("Customer Account").doc(this.phoneNumbers).update(
              {
                "Password": this.newPwd
              })
              this.$router.push({path: '/login'})
        }
        else{
          this.isOTP = true,
          this.messageOTP = "Mã xác nhận không đúng"
        }
        
      }
      else{
        this.isphone =true,
        this.messagePhone = "Số điện thoại không hợp lệ"
      }
    },
    generateOTP() {
      var string ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var len = string.length;
      for (let i = 0; i < 6; i++) {
        this.OTP += string[Math.floor(Math.random() * len)];
      }
      alert("send code ( " + this.OTP + " ) to " + this.phoneNumbers);

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
