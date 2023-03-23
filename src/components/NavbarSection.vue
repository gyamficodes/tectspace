<template>
  <section class="navbar">
<div class="container">
<div class="navbar-menu">
    <div class="nav-logo">
        <img src="../assets/image/main-logo.png" alt="">
    </div>
    <div class="nav-right-box">
        <div class="box-links">
            <a href="#">home<span id="myicon" class="material-icons">expand_more</span></a>
          <a href="#">company </a>
          <a href="#">services <span id="myicon" class="material-icons">expand_more</span></a>
          <a href="#">pages<span id="myicon" class="material-icons">expand_more</span></a>
          <a href="#">element<span id="myicon" class="material-icons">expand_more</span></a>
          <a href="#">blog<span id="myicon" class="material-icons">expand_more</span></a>
          <a href="#">contact</a>
        </div>
        <div class="box-btn">
            <div class="mybtn">
                <span>get a quote</span>
                
            </div>
        </div>
    </div>
</div>
</div>
  </section>
</template>

<script>
export default {
  name: "NavbarSection",
  components: {
  },
  props: {},
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
@import'../assets/style.scss' ;
</style>