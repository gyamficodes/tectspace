<template>
  <section class="portfolio-background">
    <div class="container">
      <div class="portfolio-top">
        <div class="port-top-content">
          <div class="top-box">
            <span>Case Studies</span>
          </div>
          <div class="port-top-flex">
            <div class="port-top-flex-a">
              <h1>
                Techno Recently <span>Business</span> <br />
                Case Studies
              </h1>
            </div>
            <div class="port-top-flex-b">
                <div class="port-card" v-for="item in MyCards" :key="item.id">
                    <span>{{ item.text }}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-down"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
  props: {},
  data() {
    return {
        MyCards: [
        {id: 1, text: 'all'},
        {id: 2, text: 'Branding'},
        {id: 3, text: 'Design'},
        {id: 4, text: 'Dashboard'},
       {id: 5, text: 'Logo'},
        ]
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/portfolioSection";
</style>
