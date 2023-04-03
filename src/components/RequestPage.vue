<template>
  <section class="Request-Page" :style="`background-image: url(${images})`">
    <div class="container">
      <div class="Request-menu">
        <div class="Request-content">
          <h5>+880 013 143 206</h5>
          <h1>
            To make requests for the <br />
            further information
          </h1>
          <div class="btn">
            <a href="#">join with now <span id="ic" class="material-icons">east</span></a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pic from "../assets/image/slider-6.jpg";

export default {
  name: "RequestPage",
  components: {},
  props: {},
  data() {
    return {
      images: pic,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="sass" scoped></style>
