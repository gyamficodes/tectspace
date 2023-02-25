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
      <div class="portfolio-down">
        <div class="portfolio-down-cards">
          <div class="card">
            <div :style="`background:url(${portA})`" class="img">
              <div class="around">
                <font-awesome-icon class="myicon" icon="fa-solid fa-search" />
              </div>
            </div>
            <div class="card-content"></div>
          </div>
        </div>
        <!-- card-down -->
        <!-- <div class="portfolio-down-cards">
          <div class="card">
            <img src="" alt="">
            <div class="card-content"></div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import port1 from "../assets/image/port1.png";

export default {
  name: "PortfolioSection",
  props: {},
  data() {
    return {
      portA: port1,
      show: false,
      MyCards: [
        { id: 1, text: "all" },
        { id: 2, text: "Branding" },
        { id: 3, text: "Design" },
        { id: 4, text: "Dashboard" },
        { id: 5, text: "Logo" },
      ],
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
