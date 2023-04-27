<template>
  <section class="navbar">
    <div class="container">
      <div class="navbar-menu">
        <div class="nav-logo">
          <router-link to="/">
            <img :src="pics" alt="" />
            </router-link>
        </div>
        <div class="nav-right-box">
          <div class="box-links">
            <router-link to="/">
              <a href="#"
                >home<span id="myicon" class="material-icons"
                  >expand_more</span
                ></a
              >
            </router-link>

            <router-link to="/about">
              <a href="#">about </a>
            </router-link>
            <a href="#"
              >services
              <span id="myicon" class="material-icons">expand_more</span></a
            >
            <a href="#"
              >pages<span id="myicon" class="material-icons"
                >expand_more</span
              ></a
            >
            <a href="#"
              >element<span id="myicon" class="material-icons"
                >expand_more</span
              ></a
            >
            <a href="#"
              >blog<span id="myicon" class="material-icons"
                >expand_more</span
              ></a
            >
            <a href="#">contact</a>
          </div>
          <div class="box-btn">
            <div class="mybtn">
              <span>get a quote</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img from "../assets/image/main-logo.png";
export default {
  name: "NavbarSection",
  components: {},
  props: {},
  data() {
    return {
      pics:img,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/style.scss";
</style>
