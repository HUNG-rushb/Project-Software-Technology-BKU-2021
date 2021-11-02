<template>
  <div>
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-3">
          <form class="form-container">
            <h2 class="text-center">
              Register
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
                <label for="floatingInput"> First Name</label>
                <div class="invalid-feedback">
                  Please enter first name.
                </div>
              </div>

              <div class="col-sm-6  form-floating">
                <input
                  type="tẽt"
                  v-model="lastName"
                  class="form-control"
                  :class="{ 'is-invalid': islastname }"
                  @blur="checklastname"
                  placeholder="Enter Your last name"
                />
                <label for="floatingInput"> Last Name</label>
                <div
                  id="validationServerUsernameFeedback"
                  class="invalid-feedback"
                >
                  Please enter last name.
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
              <label for="floatingInput">Phone Numbers</label>
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
              <label for="floatingInput">Your Address</label>
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                Please enter your address.
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
              <label for="floatingInput">Password</label>
              <div
                id="validationServerUsernameFeedback"
                class="invalid-feedback"
              >
                Please enter password.
              </div>
            </div>
            <div class="d-flex justify-content-center ">
              <button class="btn btn-primary">Register</button>
            </div>

            <hr />
            <p class="small text-center">Are you a member?</p>
            <div class="d-flex justify-content-center">
              <router-link to="/login">
                <button class="btn btn-primary">Login</button>
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
          this.message = "Phone numbers dose not exit.";
        }
      } else {
        this.isphone = true;
        this.message = "Please enter phone number.";
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
