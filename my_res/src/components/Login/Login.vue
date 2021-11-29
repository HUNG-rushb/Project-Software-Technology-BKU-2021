<template>
  <div id="login">
    <Header />

    <section class="container-fluid imag">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-3">
          <form class="form-container">
            <h2>
              <!-- <i class="bi bi-house"></i> -->
              Đăng Nhập
            </h2>
            <br />
            <div class="mb-3 form-floating">
              <input
                type="text"
                v-model="phoneNumbers"
                class="form-control"
                :class="{ 'is-invalid': isphone }"
                @blur="checkPhoneNumbers"
                aria-describedby="PhoneHelp"
                placeholder="Enter Your Phone Numbers"
              />
              <label for="floatingInput"> Số điện thoại</label>
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                {{ message }}
              </div>
            </div>
            <div class="mb-3 form-floating">
              <input
                type="password"
                class="form-control"
                v-model="password"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
              />
              <label for="floatingInput"> Mật khẩu</label>
              <!-- </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                v-model="save"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Ghi nhớ tài khoản</label
              > -->
            </div>
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                @click.prevent="login"
                class="btn btn-primary"
              >
                Đăng nhập
              </button>
            </div>
            <div class="text-center">
              <router-link class="small" to="/resetpassword"
                >Quên mật khẩu?</router-link
              >
            </div>
            <hr />
            <p class="small text-center">Bạn đã có tài khoản chưa ?</p>
            <div class="d-flex justify-content-center">
              <router-link to="/register">
                <button type="submit" class="btn btn-primary signup">
                  Đăng kí
                </button>
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
import BuyButton from "../shared/BuyButton.vue";

export default {
  data() {
    return {
      phoneNumbers: "",
      isphone: null,
      password: "",
      message: "",
      OTPcode: "",
      save: null,
    };
  },
  methods: {
    async login() {
      const collecAccount = projectFirestore
        .collection("Customer Account")
        .doc(this.phoneNumbers);

      // const docsAcc = collecAccount.get();

      if ((await collecAccount.get()).exists) {
        if (collecAccount.get("Password")) {
          this.$router.push({ path: "/home" });

          // Updated by Hung
          // Hien thi tai khoan khach hang
          this.$store.dispatch("logIn", this.phoneNumbers);
        } else {
          this.isphone = true;
          this.message = "Tài khoản hoặc mật khẩu không chính xác";
        }
      } else {
        this.isphone = true;
        this.message = "Tài khoản hoặc mật khẩu không chính xác";
      }
    },
    checkPhoneNumbers() {
      // SĐT đã được đăng kí
      this.isphone = false;
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (this.phoneNumbers !== "") {
        if (vnf_regex.test(this.phoneNumbers) == false) {
          this.isphone = true;
          this.message = "Số điện thoại không tồn tại.";
        }
      } else {
        this.isphone = true;
        this.message = "Hãy nhập số điện thoại của bạn.";
      }
    },
    saveinfo() {
      console.log(document.cookie);
    },
  },
  components: {
    Header,
    Footer,
    BuyButton,
  },
};
</script>

<style scoped>
/* .imag{
    background-image: url(D:/CSS_HTML/Đồ án/Project-Software-Technology-BKU-2021/my_res/src/assets/logo.jpg);
}, */

#login {
  background-image: url("../../assets/background.jpg");
  background-size: cover;
}

.form-container {
  margin-top: 6rem;
  margin-bottom: 5rem;
  top: 10vh;
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px #000;
  width: 400px;
  background-image: linear-gradient(to bottom right, #e9dcdc, #fef2e2);
}
</style>
