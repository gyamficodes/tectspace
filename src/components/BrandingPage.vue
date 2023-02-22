<template>
  <section class="branding-Section">
    <div class="container">
        <div  class="branding-menu">
            <div class="branding-left">
                <div class="text-box">
                    <span>Why Choose Us</span>
                </div>
                <p>Branding New Business <br> Solutions, Ideas & The
            <br>  Digital <span>Advanced.</span></p>

            </div>
            <div class="branding-rigth">
                <div class="image-page">
                <img class="mylogo" :src="image" alt="">
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import choose from '../assets/image/choose.png';

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
