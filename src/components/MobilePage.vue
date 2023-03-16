<template>
        <section>
        <div class="navbar-mobile">
            <div class="main-navbar-mobile-box">
                <h3>Techno</h3>
          <font-awesome-icon @click="ShowMobileView" class="social" icon="fa-solid fa-bars" />
                <!-- <i id="open" class="fa-solid fa-bars"></i> -->
                <!-- <i id="close" class="fa-solid fa-xmark times"></i> -->
            </div>
            <div v-if="isHowMobile" class="main-navbar-mobile-dropdown-box">
                <div class="dropdown-item-box">
                    <span>Home</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <span>Company</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <span>Services</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <span>IT Solution</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <span>Element</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <span>Blog</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <span>Contact</span>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>
            </div>
    </div>
    </section>
</template>

<script>
    export default {
        name: 'MobilePage',
        props: [],
  data() {
    return {
    isHowMobile: false,
    };
  },
  methods: {
    ShowMobileView(){
        this.isHowMobile = !this.isHowMobile;
    }
  },
  computed: {},
  mounted() {},
  watch: {},
    }
</script>

<style lang="scss">
@import'../assets/Mobilepage';
</style>