<template>
    <div class="wrap">
        <div class="form-group">
            <label for="fullname" class="form-label">
                Tên của bạn
                <span style="color: red;">*</span>
            </label>
            <input id="fullname" name="fullname" type="text" placeholder="Nhập vào tên của bạn" class="form-control">
            <span class="form-message"></span>
        </div>
        
        <div class="form-group">
            <label for="email" class="form-label">
                Số điện thoại của bạn
                <span style="color: red;">*</span>
            </label>
            <input id="phone" name="phone" type="tel" placeholder="Nhập vào số điện thoại của bạn" class="form-control">
            <span class="form-message"></span>
        </div>
        
        <div class="form-group">
            <label for="floatingTextarea" class="form-label">Đánh giá chi tiết về nhà hàng</label>
            <textarea class="form-control" placeholder="Nhập vào chi tiết đánh giá" id="floatingTextarea"></textarea>
        </div>
        
        <div class="form-group">
            <div class="row g-0">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <router-link to="/" class="form-submit cancel">Hủy</router-link>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <router-link to="/thanku" class="form-submit send">Gửi</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

// <script>
// export default {
//     data() {
//         return {

//         }
//     }
// }
// </script>

<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.form-label, .form-message {
    text-align: left;
}
.form-label {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    padding-bottom: 8px;
    margin: 0;
}
.form-control {
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #b3b3b3;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
}
.form-control:hover {
    border-color: #1dbfaf;
}
.form-group.invalid .form-control,
.form-group.invalid .form-message {
    border-color: #f33a58;
}
.form-message {
    font-size: 12px;
    line-height: 16px;
    padding: 4px 0 0;
}
.form-submit {
    padding: 10px 36px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 14px;
    outline: none;
    color: #fff;
    border-radius: 8px;
    border: none;
    display: inline-block;
    text-decoration: none;
}
.form-submit.cancel {
    background-color: #636d77;
}
.form-submit.cancel:hover {
    background-color: #6f757a;
}
.form-submit.send {
    background-color: #1dbfaf;
}
.form-submit.send:hover {
    background-color: #1ac7b6;
}
#floatingTextarea {
    resize: none;
    height: 120px;
}
@media screen and (max-width: 768px) {
    .form-submit {
        width: 100%;
    }
}
</style>