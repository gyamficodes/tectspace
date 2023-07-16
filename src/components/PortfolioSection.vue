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
              <div class="port-card"
              :class="{'active': activePage === index}"
               v-for="(item, index) in MyCards" :key="index" 
              @click.prevent="activePage = index"
              >
                <span>{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-down">
        <div class="portfolio-down-cards" v-if="activePage === 0">
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

        <div class="portfolio-down-cards" v-if="activePage === 1">
          <div class="card" v-for="{id, portA, image, text, ltext} in cards1" :key="id">
            <div :style="`background:url(${portA})`" class="img">
              <div class="around">
                <font-awesome-icon class="myicon" icon="fa-solid fa-search" />
              </div>
            </div>
            <div class="card-content">
              <div class="flex-cont">
                <span><img id="img" :src="image" alt="" /></span>
                <span class="text">{{ text }}</span>
              </div>
              <h1>{{ ltext }}</h1>
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
      activePage:0,
      MyCards: [
        { text: "all" },
        {  text: "Branding" },
        {  text: "Design" },
        {  text: "Dashboard" },
        {  text: "Logo" },
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

      cards1: [
       
      
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
  methods: {
    setActivePage(index) {
      this.activePage = index;
    },
  },
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/portfolioSection";
</style>
