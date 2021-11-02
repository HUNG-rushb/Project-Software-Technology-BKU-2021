<template>
   <div>
    <section class ="container-fluid">
        <section class = "row justify-content-center">
            <section class = "col-12 col-sm-6 col-md-3">
                <form class = "form-container">
                    <h2 class="text-center">
                        Đặt lại mật khẩu
                    </h2>
                    <br>
                    <div class="mb-3 form-floating">
                        <input type="text" v-model="phoneNumbers" class="form-control" placeholder="Enter Your Password ">
                       <label for="floatingInput"> Nhập số điện thoại</label>
                    </div>
                     <div class="mb-3 form-floating">
                        <input type="password" class="form-control" placeholder="Enter New Password" >
                       <label for="floatingInput"> Nhập mật khẩu mới</label>
                    </div>
                    <div class=" mb-3 row">
                        <div class="col-sm-6  form-floating">
                             <input type="text" class="form-control"  placeholder="Enter Code">
                        <label for="floatingInput"> Nhập mã xác nhận</label>
                        </div>

                        <div class="col-sm-6 d-flex justify-content-center " >
                             <button type="submit" @click.prevent="generateOTP" class="btn btn-primary">Lấy mã xác nhận</button>
                        </div>
                    </div>
<hr>
                    <div class="d-flex justify-content-center ">
                        <button type="submit" class="btn btn-primary">Xác nhận</button>
                            
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