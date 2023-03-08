<template>
  <section class="blog-background">
    <div class="container">
      <div class="blog-top">
        <div class="blog-top-content-a">
          <div class="box"><span>Our Blog</span></div>
          <h1>Latest from <span>Our Blog</span></h1>
        </div>
        <div class="blog-top-content-b">
          <div class="card-box">
            <div class="cd">
              <span
                ><font-awesome-icon class="myicon" icon="fa-solid fa-map"
              /></span>
            </div>
            <div class="cd">
              <span
                ><font-awesome-icon class="myicon" icon="fa-solid fa-map"
              /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-down">
        <div class="card-flex">
            <div class="card">
               <div class="back-image" style="background: url(../assets/image/blog1.png);"></div>
                <div class="card-body"></div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogSection",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>
<style lang="scss">
@import "../assets/BlogSection";
</style>
