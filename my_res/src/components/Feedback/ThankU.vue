<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="wrap">
                                <img src="https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg?size=626&ext=jpg&ga=GA1.2.1686565817.1634083200" alt="">
                                <div class="msg">
                                    <p>Cám ơn bạn đã gửi đánh giá nhà hàng chúng mình!</p>
                                    <p>Mong bạn đã có những trải nghiệm vui vẻ tại đây!</p>
                                </div>
                                <router-link to="/" @click="close" class="close">&times;</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'ThankU',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}
.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}
.btn-close {
    position: absolute; 
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}
.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
.wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
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
    top: 0;
    right: 20px;
    font-size: 50px;
    text-decoration: none;
}
</style>