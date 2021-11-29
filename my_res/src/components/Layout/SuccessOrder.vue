<template>
  <div>
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="successOffcanvas"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          Đặt hàng thành công!
        </h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body small">
        nice
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  inject: ["offcanvas"],
  mounted() {
    // https://forum.vuejs.org/t/vue-3-call-a-method-from-setup/112084
    // https://stackoverflow.com/questions/64746129/how-to-call-method-in-setup-of-vuejs3-app
    const emitter = inject("emitter");

    emitter.on("show-order-success", () => {
      // var modalLive = document.getElementById("successModal");
      // var modal = new Modal(modalLive, {
      //   var success = new this.offcanvas(
      //     document.getElementById("successOffcanvas"),
      //     {
      //       keyboard: true,
      //     }
      //   );
      //   success.show();
    });
  },
};
</script>

<style scoped>
#offcanvasBottom {
  height: 50vh;
  width: 50%;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: auto;
  margin-top: auto;
}
</style>
