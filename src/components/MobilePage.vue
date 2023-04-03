<template>
        <section>
        <div class="navbar-mobile">
            <div class="main-navbar-mobile-box">
                <h3>Techno</h3>
          <font-awesome-icon @click="ShowMobileView" class="social" icon="fa-solid fa-bars" />
            </div>
            <div v-if="isHowMobile" class="main-navbar-mobile-dropdown-box">
                <div class="dropdown-item-box">
                    <router-link to="/" style="text-decoration: none; color: #232323;">
                        <span>Home</span>
            </router-link>
                    <font-awesome-icon class="i" icon="fa-solid fa-plus" />
                </div>

                <div class="dropdown-item-box">
                    <router-link to="/about" style="text-decoration: none;color: #232323;">
                        <span>About</span>
            </router-link>
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