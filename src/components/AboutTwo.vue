<template>
    <section class="About-section" :style="`background-image: url(${slide}) ;`">

    </section>
</template>

<script>
import slider from "../assets/image/slider-10.jpg";


    export default {
        name: 'AboutTwo',
        components: {},
        props: {},
  data() {
    return {
        slide: slider,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
    }
</script>

<style lang="scss">
@import"../assets/AboutTwo";
</style>