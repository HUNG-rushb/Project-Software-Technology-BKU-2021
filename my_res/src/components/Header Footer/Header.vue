<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light shadow-lg">
      <div class="container">
        <!-- LOGO -->
        <img id="smallLogo" src="../../assets/logo_final.png" alt="..." />

        <a class="navbar-brand" href="index.html">
          <strong>Món Việt</strong>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto" id="navbar">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Trang chính</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#menu">Menu</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#order">Đặt món</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#book">Đặt bàn</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#contact">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import HeaderVideo from "./HeaderVideo.vue";
// export default {
//   components: { HeaderVideo },
// };
</script>

<style scoped>
.nav-link {
  color: red;
}

#smallLogo {
  width: 12px;
  height: 12px;
}
/* #navbar ul li {
  position: right;
} */
</style>
