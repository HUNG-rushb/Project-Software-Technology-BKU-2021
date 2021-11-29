<template>
  <div>
    <Header />

    <Progress :barWidth="100" :first="true" :second="true" :third="true" />

    <div class="container overflow-hidden">
      <p class="h8 py-3">Thông Tin Thanh Toán</p>

      <div class="row gx-1">
        <p class="cardInfo gx-4">Thông Tin Thẻ:</p>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Name"
            placeholder="name@example.com"
            required
            v-model.trim="recvName"
          />
          <label for="recvName">Họ Tên</label>
        </div>
      </div>

      <div class="row gx-1">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Series"
            placeholder="name@example.com"
            required
          />
          <label for="recvName">Mã Số Thẻ</label>
        </div>
      </div>

      <div class="row gx-2">
        <div class="col pr-5">
          <div class="form-floating mb-1">
            <input
              type="text"
              class="form-control"
              id="Expired"
              placeholder="name@example.com"
              required
            />
            <label for="recvName">Ngày Hết Hạn</label>
          </div>
        </div>

        <div class="col pl-5">
          <div class="form-floating mb-1">
            <input
              type="text"
              class="form-control"
              id="CVV"
              placeholder="name@example.com"
              required
            />
            <label for="recvName">CVV/CVC</label>
          </div>
        </div>
      </div>

      <div class="row gx-1">
        <p class="cardInfo gx-4">Discount:</p>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Series"
            placeholder="name@example.com"
            required
          />
          <label for="recvName">Mã Giảm Giá</label>
        </div>
      </div>

      <div class="row">
        <div class="col"><hr /></div>
        <div class="col-auto">
          <p class="cardInfo gx-4">Hoặc</p>
        </div>
        <div class="col"><hr /></div>
      </div>

      <ul class="list-group" id="paymentgroup">
        <li class="list-group-item"><MoMo /></li>
        <li class="list-group-item"><ZaloPay /></li>
        <li class="list-group-item"><VNPay /></li>
      </ul>

      <div class="row gx-5">
        <div class="col">
          <div class="p-3">
            <button
              type="button"
              class="btn btn-danger"
              @click="$router.go(-1)"
            >
              Quay về địa chỉ
            </button>
          </div>
        </div>

        <div class="col">
          <div class="p-3" @click="orderSuccess">
            <router-link to="/home" class="btn btn-success text-right">
              Đặt hàng
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import Progress from "./Progress.vue";

import ZaloPay from "./ZaloPay.vue";
import MoMo from "./MoMo.vue";
// import MoMoOfficial from "./MoMoOfficial.vue";
import VNPay from "./VNPay.vue";

import { inject } from "vue";

export default {
  components: { Progress, Header, Footer, ZaloPay, MoMo, VNPay },
  setup() {
    const emitter = inject("emitter");

    return {
      emitter,
    };
  },
  data() {
    return {
      recvName: "",
    };
  },
  methods: {
    orderSuccess() {
      // this.emitter.emit("show-order-success");

      this.$store.dispatch("emptyCart");

      // alert("Đơn hàng của bạn đã được tiếp nhận!");
    },
  },
};
</script>

<style scoped>
.h8 {
  font-size: 27px;
  font-weight: 750;
  text-align: center;
}

.cardInfo {
  font-size: 16px;
  font-weight: 770;
}

.momo {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}

#paymentgroup {
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
}
</style>
