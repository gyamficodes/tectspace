<template>
  <section class="Esperience-background">
    <div class="container">
      <div class="Esperience-menu">
        <div class="esperince-left">
          <img class="pic" :src="images" alt="" />
        </div>
        <div class="esperince-right">
          <div class="esperience-content">
            <h6>30 YEARS OF EXPERIENCE</h6>
            <h1>Preparing For Your Success Provide Best <span>IT Solutions.</span></h1>
             <div class="h-line"></div>
             <p>We are privileged to work with hundred future thinking awesom <br> business including many of the world’s top hardware</p>
            <div class="flex-espe">
                <div class="icon">
                    <span class="material-icons">lock</span>
                </div>
                <div class="image-test">
                    <h5>Warranty Management</h5>
                    <p>Morem Ipsum is simply dummy text of the printing and <br/> pepesetting found.</p>
                </div>
            </div>
            <div class="flex-espe">
                <div class="icon">
                    <span class="material-icons">integration_instructions</span>
                </div>
                <div class="image-test">
                    <h5>Quality Control System</h5>
                    <p>Morem Ipsum is simply dummy text of the printing and <br/> pepesetting found.</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from "../assets/image/about1.jpg";

export default {
  name: "EsperiencePage",
  components: {},
  props: {},
  data() {
    return {
      images: image,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/EsperiancePage";
</style>
