<template>
  <div class="home">
    <AppHeader/>
    <NavbarSection/>
    <BannerSection/>
    <FeatureArea/>
    <AboutPage/>
    <ServicePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import NavbarSection from '@/components/NavbarSection.vue';
import BannerSection from '@/components/BannerSection.vue';
import FeatureArea from '@/components/FeatureArea.vue';
import AboutPage from '@/components/AboutPage.vue';
import ServicePage from '@/components/ServicePage.vue';

export default {
  name: 'HomeView',
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
  },
  data() {},
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
}
</script>
<style scoped lang="scss">

</style>