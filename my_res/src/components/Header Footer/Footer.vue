<template>
  <div>
    <GoogleMap />

    <footer class="site-footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5 class="text-white">
              <i class="bi-geo-alt-fill me-2"></i>
              Thành phố Hồ Chí Minh, Việt Nam
            </h5>

            <a href="mailto:info@company.com" class="custom-link mt-3 mb-5">
              bku@hcmut.edu.vn
            </a>
          </div>

          <div class="col-6">
            <p class="copyright-text mb-0">
              Copyright © BKU 2021
            </p>
          </div>

          <div class="col-lg-3 col-5 ms-auto">
            <ul class="social-icon">
              <li><a href="#" class="social-icon-link bi-facebook"></a></li>

              <li><a href="#" class="social-icon-link bi-instagram"></a></li>

              <li><a href="#" class="social-icon-link bi-youtube"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GoogleMap from "./Google Map/GoogleMap.vue";
export default {
  components: { GoogleMap },
};
</script>

<style scoped>
#footer {
  background-color: pink;
}

ul li {
  text-decoration: none;
}
</style>
