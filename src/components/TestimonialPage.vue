<template>
  <section class="testi-background" :style="`background-image: url(${testi})`">
    <div class="container">
      <div class="test-menu">
        <div class="testi-menu-image">
         <img class="image" :src="menu" alt="">
         <div class="round">
            <div class="round-box">
                <span>4.7</span>
                <div class="stars">
                    <font-awesome-icon class="mystars" icon="fa-solid fa-star " />
                    <font-awesome-icon class="mystars" icon="fa-solid fa-star " />
                    <font-awesome-icon class="mystars" icon="fa-solid fa-star " />
                    <font-awesome-icon class="mystars" icon="fa-solid fa-star " />
                </div>
                <p>ratings</p>
            </div>
         </div>
        </div>
        <div class="testi-menu-content">qdwdqw</div>
      </div>
    </div>
  </section>
</template>

<script>
import backg from "../assets/image/mybackground.png";
import test from "../assets/image/test1.png";

export default {
  name: "TestimonialPage",
  data() {
    return {
      testi: backg,
      menu: test,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/TestimonialSection";
</style>
