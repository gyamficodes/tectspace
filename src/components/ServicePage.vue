<template>
  <section class="service-section">
    <div class="container">
        <div class="service-section-top">
            <div class="service-top-content">
              <div class="service-bx">
                <span>Featured Services</span>
              </div>
              <p>Techno Provide Best IT Solutions</p>

            </div>
        </div>
        <div class="service-section-down"></div>
    </div>
  </section>
</template>
<script>
import backg from "../assets/image/service-bg.png";

export default {
  name: "ServicePage",
  props: {},
  data() {
    return {
      backgroun: backg,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/servicepage";
</style>
