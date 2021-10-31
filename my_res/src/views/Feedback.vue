<template>
    <!-- <h1>Hello World</h1> -->
    <div class="main">
        <div class="container custom">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-xm-12"><Form /></div>
                <div class="col-lg-6 col-md-12 col-xm-0"><Logo /></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '../components/Feedback/Form.vue'
    import Logo from '../components/Feedback/Logo.vue'

    export default {
        components: {
            Form, 
            Logo,
        }
    }
</script>

<style scoped>
    .main {
        background-color: #b3b3b3;
        padding: 32px 0;
    }
    .custom {
        background-color:#fff;
    }
</style>