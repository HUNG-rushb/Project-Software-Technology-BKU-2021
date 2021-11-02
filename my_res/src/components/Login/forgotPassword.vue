<template>
   <div>
    <section class ="container-fluid">
        <section class = "row justify-content-center">
            <section class = "col-12 col-sm-6 col-md-3">
                <form class = "form-container">
                    <h2 class="text-center">
                        Reset Password
                    </h2>
                    <br>
                    <div class="mb-3 form-floating">
                        <input type="text" v-model="phoneNumbers" class="form-control" placeholder="Enter Your Password ">
                       <label for="floatingInput"> Phone Numbers</label>
                    </div>
                     <div class="mb-3 form-floating">
                        <input type="password" class="form-control" placeholder="Enter New Password" >
                       <label for="floatingInput"> New Password</label>
                    </div>
                    <div class=" mb-3 row">
                        <div class="col-sm-6  form-floating">
                             <input type="text" class="form-control"  placeholder="Enter Code">
                        <label for="floatingInput"> Enter Code</label>
                        </div>

                        <div class="col-sm-6 d-flex justify-content-center " >
                             <button type="submit" @click="generateOTP" class="btn btn-primary">Get code</button>
                        </div>
                    </div>
<hr>
                    <div class="d-flex justify-content-center ">
                        <button type="submit" class="btn btn-primary">Confirm</button>
                            
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
        phoneNumbers: ''

    }
},
methods:{
    generateOTP() {
        var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let OTP = '';
        // Tìm độ dài của chuỗi
        var len = string.length;
        for (let i = 0; i < 6; i++ ) {
            OTP += string[Math.floor(Math.random() * len)];
        }
        alert("send code ( "+OTP+" ) to "+ this.phoneNumbers )
        //return OTP;
    },
}
}
</script>

<style scoped>
.form-container{
    position: absolute;
    top: 140px;
    background: #fff;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px #000;
    /* width: 450px; */
}

</style>