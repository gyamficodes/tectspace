<template>
  <section class="top-section">
    <div class="container">
      <div class="top-section-menu">
        <div class="top-left-menu">
          <a href="#"><font-awesome-icon class="myicon" icon="fa-solid fa-envelope" />example@example.com</a>
          <a href="#"><font-awesome-icon class="myicon" icon="fa-solid fa-map" />example@example.com</a>
          <a href="#"><font-awesome-icon class="myicon" icon="fa-solid fa-phone" />example@example.com</a>
        </div>
        <div class="top-right-menu">
          <font-awesome-icon class="social" icon="fa-solid fa-message" />
          <font-awesome-icon class="social" icon="fa-solid fa-music" />
          <font-awesome-icon class="social" icon="fa-solid fa-search" />
          <font-awesome-icon class="social" icon="fa-solid fa-star" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/style.scss";
</style>
