<template>
    <form class="form" method="POST" @submit="checkForm">
        <div class="form-group" :class="invalidName">
            <label for="fullname" class="form-label">
                Tên của bạn
                <span style="color: red;">*</span>
            </label>
            <input id="fullname" name="fullname" type="text" v-model="name" placeholder="Nhập vào tên của bạn" class="form-control">
            <span class="form-message">{{ nameMsg }}</span>
        </div>
        
        <div class="form-group" :class="invalidPhone">
            <label for="email" class="form-label">
                Số điện thoại của bạn
                <span style="color: red;">*</span>
            </label>
            <input id="phone" name="phone" type="tel" v-model="phone" placeholder="Nhập vào số điện thoại của bạn" class="form-control">
            <span class="form-message">{{ phoneMsg }}</span>
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
                    <button class="form-submit send" @click="showModal">Gửi</button>
                    <ThankU v-show="isModalVisible" @close="closeModal"/>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import ThankU from '../ThankU.vue'
export default {
    components: { ThankU },
    data() {
        return {
            name: null,
            phone: null,
            nameMsg: '',
            phoneMsg: '',
            invalidName: '',
            invalidPhone: '',
            isPhone: false,
            isName: false,
            isModalVisible: false,
        }
    },
    methods: {
        checkForm(e) {
            // if (this.name && this.phone) return true;
            this.nameMsg = '';
            this.phoneMsg = '';
            this.invalidName = '';
            this.invalidPhone = '';
            this.isPhone = true;
            this.isName = true;

            var hasNumber = /\d/;
            if (hasNumber.test(this.name)) {
                this.nameMsg = 'Tên không đúng định dạng';
                this.invalidName = 'invalid';
                this.isName = false;
            }
            var reWhiteSpace = new RegExp(/^\s+$/);
            if (reWhiteSpace.test(this.name) || !this.name) {
                this.nameMsg = 'Vui lòng nhập vào tên';
                this.invalidName = 'invalid';
                this.isName = false;
            }
        
            var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (vnf_regex.test(this.phone) == false ) {
                this.phoneMsg = 'Số điện thoại của bạn không đúng định dạng!';
                this.invalidPhone = 'invalid';
                this.isPhone = false;
            }
            if (!this.phone) {
                this.phoneMsg = 'Bạn chưa điền số điện thoại!';
                this.invalidPhone = 'invalid';
                this.isPhone = false;
            }
            
            e.preventDefault();
        },
        showModal() {
            console.log(this.name)
            if (this.isName && this.isPhone) {
                this.isModalVisible = true;
            }
        },
        closeModal() {
            this.isModalVisible = false;
        },
    // watch: {
    //     thing: function () {
    //         this.$dispatch('nameHasChanged', this.name);
    //         this.$dispatch('phoneHasChanged', this.phone)
    //     }
    // },
    }
}
</script>

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
.form-group.invalid .form-control {
    border-color: #f33a58;
}
.form-group.invalid .form-message {
    color: #f33a58;
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


.feedback__modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: fadeIn ease-in 0.3s;
    z-index: 1;
}
.feedback__overlay {
    position: absolute;
    background-color: #fff;
    opacity: 0.9;
    height: 100%;
    width: 100%;
}

.wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 80%;
    margin: auto;
    padding: 24px 16px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 6px;
    border: 1px solid #ddd;
    background-color: #fff;
}
img {
    width: 300px;
    margin-bottom: 20px;
}
.msg p {
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.close {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 30px;
    text-decoration: none;
}
</style>