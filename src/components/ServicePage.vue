<template>
  <section class="service-section">
    <div class="container">
      <div class="service-section-top">
        <div class="service-top-content">
          <div class="service-bx">
            <span>Featured Services</span>
          </div>
          <p>Techno Provide Best <span>IT Solutions</span></p>
          <h3>
            Completely strategize client-centric niche markets for go forward
            plat Phosfluorescently <br />
            iterate efficient internal organic.
          </h3>
        </div>
      </div>
      <div class="service-section-down">
 <div class="main-box">
    <div class="card-box">
          <div class="mycard" v-for="card in cards" :key="card.id">
            <div class="card-flex">
              <span><img :src="card.serA" alt="" /></span>
              <p>{{ card.title }}</p>
            </div>
            <h3>{{ card.content }}</h3>
            <h4>{{ card.text }}</h4>
            <div class="btn">
              <h1>{{ card.btnText }}</h1>
              <div class="i">
                <font-awesome-icon
                  style="color: blue"
                  id="pen"
                  icon="fa-solid fa-search"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box-b">
          <div class="mycard" v-for="data in cardB" :key="data.id">
            <div class="card-flex">
              <span><img :src="data.serA" alt="" /></span>
              <p>{{ data.title }}</p>
            </div>
            <h3>{{ data.content }}</h3>
            <h4>{{ data.text }}</h4>
            <div class="btn">
              <h1>{{ data.btnText }}</h1>
              <div class="i">
                <font-awesome-icon
                  style="color: blue"
                  id="pen"
                  icon="fa-solid fa-search"
                />
              </div>
            </div>
          </div>
        </div>
 </div>
      </div>
    </div>
  </section>
</template>
<script>
import service1 from "../assets/image/servic1.png";
import service2 from "../assets/image/servic2.png";
import service3 from "../assets/image/servic3.png";
import service4 from "../assets/image/servic4.png";
import service5 from "../assets/image/servic6.png";
import service6 from "../assets/image/servic5.png";
export default {
  name: "ServicePage",
  props: {},
  data() {
    return {
      cards: [
        {
          id: 1,
          serA: service1,
          title: "Development",
          content: "Website Applications  Development",
          text: "Monotonectally actualize customer methodologie rather than",
          btnText: "learn more",
        },
        {
          id: 1,
          serA: service2,
          title: "User Experience",
          content: "IOS & Android Apps Interface Design",
          text: "Monotonectally actualize customer methodologie rather than",
          btnText: "learn more",
        },
        {
          id: 1,
          serA: service3,
          title: "Strategy",
          content: "Content Marketing Strategy",
          text: "Monotonectally actualize customer methodologie rather than",
          btnText: "learn more",
        },
      ],
      cardB: [
        {
          id: 1,
          serA: service4,
          title: "Research",
          content: "Market Research and Serveying",
          text: "Monotonectally actualize customer methodologie rather than",
          btnText: "learn more",
        },
        {
          id: 2,
          serA: service5,
          title: "Branding",
          content: "Experience Maping and Developed",
          text: "Monotonectally actualize customer methodologie rather than",
          btnText: "learn more",
        },
        {
          id: 3,
          serA: service6,
          title: "Market Strategy",
          content: "Content Marketing Strategy",
          text: "Monotonectally actualize customer methodologie rather than",
          btnText: "learn more",
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
@import "../assets/servicepage";
</style>
