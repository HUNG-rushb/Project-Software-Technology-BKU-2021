<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog">
        <img src="https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg?size=626&ext=jpg&ga=GA1.2.1686565817.1634083200" alt="">
        <div class="msg">
        <p>Cám ơn bạn đã gửi đánh giá nhà hàng chúng mình!</p>
        <p>Mong bạn đã có những trải nghiệm vui vẻ tại đây!</p>
        </div>
        <router-link to="/" @click="close" class="close">&times;</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
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
}
.modal {
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 85%;
    height: 70%;
    margin: auto;
    padding: 24px 16px;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 6px;
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
    cursor: pointer;
}
@media screen and (min-width: 992px) {
    .modal {
        width: 60%;
    }
}
</style>