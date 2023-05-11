<template>
  <section class="blog-background">
    <div class="container">
      <div class="blog-top">
        <div class="blog-top-content-a">
          <div class="box"><span>Our Blog</span></div>
          <h1>Latest from <span>Our Blog</span></h1>
        </div>
        <div class="blog-top-content-b">
          <div class="card-box">
            <div class="cd">
              <span
                ><font-awesome-icon class="myicon" icon="fa-solid fa-map"
              /></span>
            </div>
            <div class="cd">
              <span
                ><font-awesome-icon class="myicon" icon="fa-solid fa-map"
              /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-down">
        <div class="card-flex">
          <div class="card" v-for="item in cards" :key="item.id">
            <div
              class="back-image"
              :style="`background-image: url(${item.pic1})`"
            ></div>
            <div class="card-body">
              <div class="card-flex">
                <div class="im"><img :src="item.pic2" alt="" /></div>
                <span> {{ item.date }} </span>
              </div>
              <a href="#">
                {{ item.a }}
              </a>
              <p>
                {{ item.title }}
              </p>
              <div class="line"></div>
              <div class="card-main-box">
                <div class="main-box-a">
                  <img :src="item.pic3" alt="" />
                  <span>{{ item.name }} </span>
                </div>
                <div class="main-box-b">
                  <span>{{ item.learn }}</span>
                  <font-awesome-icon class="myicon" icon="fa-solid fa-search" />
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
import image1 from "../assets/image/blog1.png";
import image2 from "../assets/image/date.png";
import image3 from "../assets/image/target.png";
import image4 from "../assets/image/blog2.png";
import image5 from "../assets/image/blog3.png";

export default {
  name: "BlogSection",
  props:[],
  components:{},
  data() {
    return {
      pic3: image3,
      cards: [
        {
          id: 1,
          pic1: image1,
          pic2: image2,
          date: " August 21, 2023 ",
          a: "Top 10 Most Populars Google Chrome Extensions",
          title:
            "Monotonectally actualize  customer  methodologie rather than",
          pic3: image3,
          name: "Michel Das",
          learn: "learn more",
        },
        {
          id: 2,
          pic1: image4,
          pic2: image2,
          date: " August 21, 2023 ",
          a: " Most Important Figma  Tools Discussion",
          title:
            "Monotonectally actualize  customer  methodologie rather than",
          pic3: image3,
          name: "Boxon Sen",
          learn: "learn more",
        },
        {
          id: 3,
          pic1: image5,
          pic2: image2,
          date: " August 21, 2023 ",
          a: " How to Plugin Install  in Wordpress Server? ",
          title:
            "Monotonectally actualize customer  methodologie rather than",
          pic3: image3,
          name: "Alex Collins",
          learn: "learn more",
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
@import "../assets/BlogSection";
</style>
