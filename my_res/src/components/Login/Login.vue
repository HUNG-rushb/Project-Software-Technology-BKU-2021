<template>
  <div>
    <section class ="container-fluid imag">
        <section class = "row justify-content-center">
            <section class = "col-12 col-sm-6 col-md-3">
                <form class = "form-container">
                    <h2>
                        <i class="bi bi-house"></i>Member Login 
                    </h2>
                    <br>
                    <div class="mb-3 form-floating">
                        <input type="text" v-model="phoneNumbers" class="form-control" :class="{'is-invalid':isphone}" @blur="checkPhoneNumbers" aria-describedby="PhoneHelp" placeholder="Enter Your Phone Numbers">
                        <label for="floatingInput"> Phone Numbers</label>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                {{message}}
                        </div>
                    </div>
                    <div class="mb-3 form-floating">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password">
                        <label for="floatingInput"> Your Password</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" v-model="save" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Login</button>
                            
                    </div>
                    <div class="text-center">
                        <router-link class="small" to="/forgotpassword">Forgot password?</router-link>
                        
                    </div>  
                    <hr>
                    <p class="small text-center">Not a Member ?</p>
                     <div class="d-flex justify-content-center">
                        <router-link to="/register">
                        <button type="submit" class="btn btn-primary signup">Sign up</button>
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
data(){
    return{
        phoneNumbers:'',
        isphone:null,
        message:'',
        OTPcode:'',
        save:null,
    }
},
methods:{
    
    checkPhoneNumbers()
        {
            // SĐT đã được đăng kí
            this.isphone = false
            var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if(this.phoneNumbers !==''){
                if (vnf_regex.test(this.phoneNumbers) == false) 
                {
                    this.isphone = true
                    this.message = 'Phone numbers dose not exit.'
                }
            }else{
                this.isphone = true
                this.message = 'Please enter phone number.'
            }
    },
    saveinfo()
    {
          console.log( document.cookie)
    }

}
}
</script>

<style scoped>
/* .imag{
    background-image: url(D:/CSS_HTML/Đồ án/Project-Software-Technology-BKU-2021/my_res/src/assets/logo.jpg);
}, */
.form-container{
    position: absolute;
    top: 10vh;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px #000;
    width: 400px;
    
}
.signup{
    color:#FFF;
}

</style>