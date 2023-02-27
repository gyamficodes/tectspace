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
          <div class="card" v-for="data in cards" :key="data.id">
            <div :style="`background:url(${data.portA})`" class="img">
              <div class="around">
                <font-awesome-icon class="myicon" icon="fa-solid fa-search" />
              </div>
            </div>
            <div class="card-content">
              <div class="flex-cont">
                <span><img id="img" :src="data.image" alt="" /></span>
                <span class="text">{{ data.text }}</span>
              </div>
              <h1>{{ data.ltext }}</h1>
            </div>
          </div>
        </div>
        <!-- card-down -->
        <div class="portfolio-down-cards">
          <div class="card" v-for="data in cardB" :key="data.id">
            <div :style="`background:url(${data.portA})`" class="img">
              <div class="around">
                <font-awesome-icon class="myicon" icon="fa-solid fa-search" />
              </div>
            </div>
            <div class="card-content">
              <div class="flex-cont">
                <span><img id="img" :src="data.image" alt="" /></span>
                <span class="text">{{ data.text }}</span>
              </div>
              <h1>{{ data.ltext }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import port1 from "../assets/image/port1.png";
import port2 from "../assets/image/port2.png";
import port3 from "../assets/image/port3.png";
import port4 from "../assets/image/port4.png";
import port5 from "../assets/image/port5.png";
import port6 from "../assets/image/port6.png";
import code from "../assets/image/code.png";
import code1 from "../assets/image/code1.png";

export default {
  name: "PortfolioSection",
  props: {},
  data() {
    return {
      MyCards: [
        { id: 1, text: "all" },
        { id: 2, text: "Branding" },
        { id: 3, text: "Design" },
        { id: 4, text: "Dashboard" },
        { id: 5, text: "Logo" },
      ],
      cards: [
        {
          id: 1,
          portA: port1,
          image: code,
          text: "Development",
          ltext: "Food App Development",
        },
        {
          id: 2,
          portA: port2,
          image: code1,
          text: "Product Design",
          ltext: "Sales ERP Software",
        },
        {
          id: 3,
          portA: port3,
          image: code,
          text: "Development",
          ltext: "Business Admin Panel",
        },
      ],
      cardB: [
        {
          id: 1,
          portA: port4,
          image: code,
          text: "Development",
          ltext: "Restaurent App Design",
        },
        {
          id: 2,
          portA: port5,
          image: code1,
          text: "Product Design",
          ltext: "Figma Dashboard Design",
        },
        {
          id: 3,
          portA: port6,
          image: code,
          text: "Development",
          ltext: "Awesome Logo Design",
        },
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
