<template>
  <div>
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-3">
          <form class="form-container">
            <h2 class="text-center">
              Đăng kí tài khoản
            </h2>
            <br />
            <div class=" mb-3 row g-3">
              <div class="col-sm-6  form-floating">
                <input
                  type="text"
                  v-model="firstName"
                  class="form-control"
                  :class="{ 'is-invalid': isfirstname }"
                  @blur="checkfirstname"
                  placeholder="Enter Your first name"
                />
                <label for="floatingInput"> Họ và tên đệm</label>
                <div class="invalid-feedback">
                  Hãy nhập họ và tên đệm.
                </div>
              </div>

              <div class="col-sm-6  form-floating">
                <input
                  type="text"
                  v-model="lastName"
                  class="form-control"
                  :class="{ 'is-invalid': islastname }"
                  @blur="checklastname"
                  placeholder="Enter Your last name"
                />
                <label for="floatingInput"> Tên</label>
                <div
                  id="validationServerUsernameFeedback"
                  class="invalid-feedback"
                >
                  Hãy nhập tên của bạn.
                </div>
              </div>
            </div>
            <div class="mb-3 form-floating">
              <input
                type="text"
                v-model="phoneNumbers"
                class="form-control"
                :class="{ 'is-invalid': isphone }"
                @blur="checkPhoneNumbers"
                placeholder="Enter Your Phone Numbers"
              />
              <label for="floatingInput">Số điện thoại</label>
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                {{ message }}
              </div>
            </div>
            <div class="mb-3 form-floating">
              <input
                type="address"
                v-model="address"
                class="form-control"
                :class="{ 'is-invalid': isaddress }"
                @blur="checkaddress"
                placeholder="Enter Your Address"
              />
              <label for="floatingInput">Địa chỉ</label>
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                Hãy nhập địa chỉ của bạn.
              </div>
            </div>
            <div class="mb-3 form-floating">
              <input
                type="password"
                v-model="password"
                class="form-control"
                :class="{ 'is-invalid': ispassword }"
                @blur="checkpassword"
                placeholder="Enter Your Password"
              />
              <label for="floatingInput">Mật khẩu</label>
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                Hãy nhập mật khẩu.
              </div>
            </div>
            <div class="d-flex justify-content-center ">
              <button class="btn btn-primary">Đăng kí</button>
            </div>

            <hr />
            <p class="small text-center">Bạn đã có tài khoản chưa ?</p>
            <div class="d-flex justify-content-center">
              <router-link to="/login">
                <button class="btn btn-primary">Đăng nhập</button>
              </router-link>
            </div>
          </form>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfirstname: null,
      islastname: null,
      isaddress: null,
      ispassword: null,
      isphone: null,
      firstName: "",
      lastName: "",
      phoneNumbers: "",
      message: "",
      password: "",
      address: "",
    };
  },
  methods: {
    checkfirstname() {
      if (this.firstName === "") this.isfirstname = true;
      else this.isfirstname = false;
    },
    checklastname() {
      if (this.lastName === "") this.islastname = true;
      else this.islastname = false;
    },
    checkaddress() {
      if (this.address === "") this.isaddress = true;
      else this.isaddress = false;
    },
    checkPhoneNumbers() {
      // SĐT đã được đăng kí
      this.isphone = false;
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (this.phoneNumbers !== "") {
        if (vnf_regex.test(this.phoneNumbers) == false) {
          this.isphone = true;
          this.message = "Tài khoản không tồn tại.";
        }
      } else {
        this.isphone = true;
        this.message = "Hãy nhập số điện thoại.";
      }
    },
    checkpassword() {
      if (this.password === "") this.ispassword = true;
      else this.ispassword = false;
    },
  },
};
</script>

<style scoped>
.form-container {
  position: absolute;
  top: 5vh;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px #000;
  /* width: 450px; */
}
</style>
