<template>
  <div class="home">
    <MobilePage/>
    <AppHeader />
    <NavbarSection />
    <BannerSection />
    <FeatureArea />
    <AboutPage />
    <ServicePage />
    <BrandingPage />
    <CallSection />
    <PortfolioSection />
    <TestimonialPage />
    <BlogSection />
  <SubscribePage/>
  <FooterPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import NavbarSection from "@/components/NavbarSection.vue";
import BannerSection from "@/components/BannerSection.vue";
import FeatureArea from "@/components/FeatureArea.vue";
import AboutPage from "@/components/AboutPage.vue";
import ServicePage from "@/components/ServicePage.vue";
import BrandingPage from "@/components/BrandingPage.vue";
import CallSection from "@/components/CallSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import TestimonialPage from "@/components/TestimonialPage.vue";
import BlogSection from "@/components/BlogSection.vue";
import SubscribePage from "@/components/SubscribePage.vue";
import FooterPage from "@/components/FooterPage.vue";
import MobilePage from "@/components/MobilePage.vue";

export default {
  name: "HomeView",
  props:[],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppHeader,
    // eslint-disable-next-line vue/no-unused-components
    NavbarSection,
    // eslint-disable-next-line vue/no-unused-components
    BannerSection,
    // eslint-disable-next-line vue/no-unused-components
    FeatureArea,
    // eslint-disable-next-line vue/no-unused-components
    AboutPage,
    // eslint-disable-next-line vue/no-unused-components
    ServicePage,
    // eslint-disable-next-line vue/no-unused-components
    BrandingPage,
    // eslint-disable-next-line vue/no-unused-components
    CallSection,
    // eslint-disable-next-line vue/no-unused-components
    PortfolioSection,
    // eslint-disable-next-line no-undef
    TestimonialPage,
    // eslint-disable-next-line vue/no-unused-components
    BlogSection,
    // eslint-disable-next-line vue/no-unused-components
    SubscribePage,
    // eslint-disable-next-line vue/no-unused-components
    FooterPage,
// eslint-disable-next-line vue/no-unused-components
MobilePage
  },
  data() {
    return{
  
    }
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>
<style scoped lang="scss"></style>
