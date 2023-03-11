<template>
  <section
    class="footerpages"
    :style="`background-image: url(${backgroundA})`"
  >
  <div class="container">
    <div class="Footer-top">
        <div class="Footer-top-a">
            <div class="footer-top-left">
                <img class="image" :src="logo" alt="">
                <p>Completely strategize client-cent <br> Phosfluorescently  iterate efficient  <br> internal or organic.</p>
                <h1>follow us</h1>
                <div class="social-media-flex"></div>
            </div>
            <div class="footer-top-right"></div>
        </div>
        <div class="Footer-top-b"></div>
    </div>
    <div class="Footer-down"></div>
  </div>
  </section>
</template>

<script>
import background from "../assets/image/footer-bg-techno.png";
import logo2 from "../assets/image/logo2.png";

export default {
  name: "FooterPage",
  props: [],
  data() {
    return {
      backgroundA: background,
      logo: logo2
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/FooterPage";
</style>
