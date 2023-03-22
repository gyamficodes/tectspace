<template>
  <div class="about">
    <MobilePageVue />
    <AppHeader />
    <NavbarSection />
    <AboutTwo/>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import NavbarSection from "@/components/NavbarSection.vue";
import MobilePageVue from "@/components/MobilePage.vue";
import AboutTwo from "@/components/AboutTwo.vue";

export default {
  name: "AboutView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppHeader,
    // eslint-disable-next-line vue/no-unused-components
    NavbarSection,
    // eslint-disable-next-line vue/no-unused-components
    MobilePageVue,
    // eslint-disable-next-line vue/no-unused-components
    AboutTwo,
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
