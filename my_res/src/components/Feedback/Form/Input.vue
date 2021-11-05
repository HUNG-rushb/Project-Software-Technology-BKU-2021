<template>
    <form class="form" method="POST" @submit="checkForm">
        <div class="form-group" :class="invalidName">
            <label for="fullname" class="form-label">
                Tên của bạn
                <span style="color: red;">*</span>
            </label>
            <input type="text" v-model="name" @blur="checkValidName" placeholder="Nhập vào tên của bạn" class="form-control">
            <span class="form-message">{{ nameMsg }}</span>
        </div>
        
        <div class="form-group" :class="invalidPhone">
            <label for="phone" class="form-label">
                Số điện thoại của bạn
                <span style="color: red;">*</span>
            </label>
            <input type="tel" v-model="phone" @blur="checkValidPhone" placeholder="Nhập vào số điện thoại của bạn" class="form-control">
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
                    <button @click="showModal" class="form-submit send">Gửi</button>
                    
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
            this.checkValidName();
            this.checkValidPhone();
            e.preventDefault();
        },
        checkValidName() {
            this.nameMsg = '';
            this.invalidName = '';
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
        },
        checkValidPhone() {
            this.phoneMsg = '';
            this.invalidPhone = '';
            this.isPhone = true;

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
        },
        showModal() {
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
</style>