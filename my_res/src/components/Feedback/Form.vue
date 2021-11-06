<template>
    <div class="wrapper">
        <h1 class="heading">Đánh giá chất lượng</h1>
        <div class="spacer"></div>

        <Rating :grade="3" :maxStars="5" :hasCounter="true" />
        <div class="spacer"></div>

        <Input />
    </div>
</template>

<script>
    import Rating from '../Feedback/Form/Rating.vue'
    import Input from '../Feedback/Form/Input.vue'

    export default {
        components: { Rating, Input },
    }
</script>

<style scoped>
.wrapper {
    padding: 32px 24px;
    margin: auto;
    text-align: center;
}
.wrapper .heading {
    font-size: 30px;
}
.spacer {
    margin-top: 24px;
}   
@media screen and (min-width: 992px) {
    .wrapper {
        width: 90%;
    }
}
</style>