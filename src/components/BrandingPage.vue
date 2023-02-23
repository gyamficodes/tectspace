<template>
  <section class="branding-Section">
    <div class="container">
      <div class="branding-menu">
        <div class="branding-left">
          <div class="text-box">
            <span>Why Choose Us</span>
          </div>
          <p>
            Branding New Business <br />
            Solutions, Ideas & The <br />
            Digital <span>Advanced.</span>
          </p>
          <h4>
            Completely strategize client-centric niche markets for go forward
            <br />
            Phosfluorescently iterate efficient internal or organic.
          </h4>
          <div class="edit">
            <div class="edit-flex">
              <h1>HTML5</h1>
              <span>65%</span>
            </div>
            <div class="edit-line"></div>
          </div>
          <div class="edit-a">
            <div class="edit-flex">
              <h1>CSS3</h1>
              <span>90%</span>
            </div>
            <div class="edit-line-a"></div>
          </div>
          <div class="edit-c">
            <div class="edit-flex">
              <h1>JAVA</h1>
              <span>80%</span>
            </div>
            <div class="edit-line-c"></div>
          </div>
        </div>
        <div class="branding-rigth">
          <div class="image-page">
            <img class="mylogo" :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import choose from "../assets/image/choose.png";

export default {
  name: "BrandingPage",
  props: {},
  data() {
    return {
      image: choose,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/brandingPage";
</style>
