<template>
  <div>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 75%"
      ></div>

      <nav class="nav nav-pills nav-justified">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Much longer nav link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled">Disabled</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["length"],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
