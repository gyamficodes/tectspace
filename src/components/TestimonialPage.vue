<template>
  <section class="testi-background" :style="`background-image: url(${testi})`">
    <div class="container">
      <div class="test-menu">
        <div class="testi-menu-image">
         <img class="image" :src="menu" alt="">

        </div>
        <div class="testi-menu-content">
          <div class="box-tex">
            Client Testimonial
          </div>
          <h1>Techno all Over World 23M+ <br> Satisfied Customers</h1>
          <p>“I am Very Happy for the Awesome Service!”</p>
          <h6>Completely strategize client-centric niche markets for forward platform <br> Phosfluorescently iterate efficient internal or "organic" sources wherea <br> revolutionary service. Objectively syndicate crosplatform  data without <br> scalable deliverables. Holisticly enhance.</h6>
          <div class="flex-content">
            <div class="flex-a">
              <img class="pic" :src="pic1" alt="">
              <div class="text">
                <h4>Martin Collings</h4>
                <p>CEO, Founder</p>
              </div>
            </div>
            <div class="flex-b">
              <div id="org" class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  </section>
</template>

<script>
import backg from "../assets/image/mybackground.png";
import test from "../assets/image/test1.png";
import pic from "../assets/image/people.png"


export default {
  name: "TestimonialPage",
  data() {
    return {
      testi: backg,
      menu: test,
      pic1: pic,
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
