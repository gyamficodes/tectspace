<template>
  <div class="about">
    <MobilePageVue />
    <AppHeader />
    <NavbarSection/>
    <AboutTwo name="About Two" home="home" pages="pages" test="about page two"/>
    <EsperiencePage/>
    <RequestPage/>
    <ServicesPagetwo/>
    <ProcessPage/>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import NavbarSection from "@/components/NavbarSection.vue";
import MobilePageVue from "@/components/MobilePage.vue";
import AboutTwo from "@/components/AboutTwo.vue";
import EsperiencePage from "@/components/EsperiencePage.vue";
import RequestPage from "@/components/RequestPage.vue";
import ServicesPagetwo from "@/components/ServicesPagetwo.vue";
import ProcessPage from "@/components/ProcessPage.vue";

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
    // eslint-disable-next-line vue/no-unused-components
    EsperiencePage,
    // eslint-disable-next-line vue/no-unused-components
    RequestPage,
    // eslint-disable-next-line vue/no-unused-components
    ServicesPagetwo,
    // eslint-disable-next-line vue/no-unused-components
    ProcessPage,
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
