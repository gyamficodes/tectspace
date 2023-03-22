<template>
  <section class="navbar">
<div class="container">
<div class="navbar-menu">
    <div class="nav-logo">
        <img src="../assets/image/main-logo.png" alt="">
    </div>
    <div class="nav-right-box">
        <div class="box-links">
            <a href="#">home<font-awesome-icon class="myicon" icon="fa-solid fa-key" /></a>
          <a href="#">company</a>
          <a href="#">services <font-awesome-icon class="myicon" icon="fa-solid fa-key " /></a>
          <a href="#">pages<font-awesome-icon class="myicon" icon="fa-solid fa-key" /></a>
          <a href="#">element<font-awesome-icon class="myicon" icon="fa-solid fa-key" /></a>
          <a href="#">blog<font-awesome-icon class="myicon" icon="fa-solid fa-key" /></a>
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