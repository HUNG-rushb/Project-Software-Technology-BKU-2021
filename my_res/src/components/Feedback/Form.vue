<template>
    <form action="" method="POST" class="form" id="form-1">
        <h1 class="heading">Đánh giá chất lượng</h1>
        <div class="spacer"></div>

        <Rating :grade="0" :maxStars="5" :hasCounter="true" />
        <div class="spacer"></div>

        <Input />
    </form>
</template>

<script>
    import Rating from '../Feedback/Form/Rating.vue'
    import Input from '../Feedback/Form/Input.vue'

    export default {
        components: { Rating, Input }
    }
    // Validator({
    //     form: '#form-1',
    //     errorSelector: '.form-message',
    //     rules: [
    //         Validator.isRequired('#fullname', 'Vui lòng nhập tên của bạn'),
    //         Validator.isRequired('#phone', 'Vui lòng nhập vào số điện thoại của bạn'),
    //     ]
    // })
</script>

<style scoped>
.form {
    padding: 32px 24px;
    margin: auto;
    text-align: center;
}
.form .heading {
    font-size: 30px;
}
.spacer {
    margin-top: 24px;
}   
@media screen and (min-width: 992px) {
    .form {
        width: 90%;
    }
}
</style>