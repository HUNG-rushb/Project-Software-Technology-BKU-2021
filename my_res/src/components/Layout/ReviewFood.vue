<template>
  <!-- <div class="fixed-top"> -->
  <div>
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          {{ food.name }}
        </h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <img :src="image" />

      <div class="offcanvas-body small">
        {{ food.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

// import { Offcanvas } from "bootstrap";

export default {
  data() {
    return {
      food: {},
    };
  },
  inject: ["offcanvas"],
  mounted() {
    const emitter = inject("emitter");

    emitter.on("show-food-details", (arg) => {
      // var modal = new Offcanvas(document.getElementById("offcanvasBottom"), {
      var modal = new this.offcanvas(
        document.getElementById("offcanvasBottom"),
        {
          keyboard: true,
          // backdrop: false,
        }
      );
      modal.show();

      this.food = arg;
    });
  },
  computed: {
    image() {
      return this.food.image;
    },
  },
};
</script>

<style scoped>
#offcanvasBottom {
  height: 95vh;
  width: 50%;

  margin-left: auto;
  margin-right: auto;
}
</style>
