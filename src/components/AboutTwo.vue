<template>
  <section class="About-section" :style="`background-image: url(${slide}) ;`">
    <div class="container">
      <div class="menu-sec">
        <div class="menu-sec-content">
          <h1>{{ name }}</h1>
          <div class="flex-main">
            <a href="#">{{ home }}</a>
            <a href="#">{{ pages }}</a>
            <a href="#">{{test}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slider from "../assets/image/slider-10.jpg";

export default {
  name: "AboutTwo",
  components: {},
  props: ['name', 'home', 'pages','test'],
  data() {
    return {
      slide: slider,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/AboutTwo";
</style>
