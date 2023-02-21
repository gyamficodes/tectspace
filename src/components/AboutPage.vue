<template>
  <section class="about-section">
    <div class="container">
      <div class="about-menu-top">
        <div class="top-img">
            <div class="mid">
                <img src="../assets/image/circle1.png" alt="">
            </div>
          <div class="inn">
            <img src="../assets/image/circle.png" alt="" />
          </div>
          <img style="width: 540px; height: 614px" id="vv" :src="img" alt="" />
          <div class="immk">
            <img src="../assets/image/about-peple.png" alt="" />
          </div>
        </div>
        <div class="top-content-right">
          <div class="box-p">about tecno</div>
          <div class="text">
            <p>
              Choose The Best IT <br />
              Service <span>Company</span>
            </p>
          </div>
          <div class="flex-content">
            <div class="h-line"></div>
            <p>
              Completely strategize client-centric niche markets for go forward
              <br />
              Phosfluorescently iterate efficient internal or "organic" sources
              wh <br />
              revolutionary services. Objectively syndicate crosplatform data
              <br />
              scalable deliverables. Holisticly enhance
            </p>
          </div>
          <div class="main-box">
            <div class="main-box-menu">
              <div class="mb-flec1">
                <img style="width: 55px; height: 50px" :src="iconA" alt="" />
                <h1>
                  Moneyback <br />
                  Gurentee
                </h1>
              </div>
              <div class="mb-flec1">
                <img style="width: 55px; height: 50px" :src="iconB" alt="" />
                <h1>
                  Moneyback <br />
                  Gurentee
                </h1>
              </div>
            </div>
          </div>
          <div class="last-box">
            <div class="last-flex-a">
                <div class="last-btn">
                    <span>contact us</span>
                    <font-awesome-icon class="myicon" icon="fa-solid fa-search" />
                </div>
            </div>
            <div class="last-flex-b">
                <div class="my-icon"><font-awesome-icon class="myicon" icon="fa-solid fa-phone" /></div>
                <span>Call for Help <br><p>+98 321 (7690) 326</p></span>
            </div>
          </div>
        </div>
      </div>
      <div class="about-menu-down">
        <div class="down-flex-a">
            <h2>Join over +18,000 happy Clients</h2>
            <div class="lin-a"></div>
        </div>
        <div class="down-flex-b">
            <img class="figma" :src="figma" alt="">
            <img class="figma" :src="google" alt="">
            <img class="figma" :src="redit" alt="">
            <img class="figma" :src="skett" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imgcircle from "../assets/image/about.png";
import icon1 from "../assets/image/icon.png";
import icon2 from "../assets/image/icon1.png";
import  fig from  "../assets/image/figma.png";
import  gogl from  "../assets/image/google.png";
import  red from  "../assets/image/redit.png";
import sket from "../assets/image/sket.png";
export default {
  name: "AboutPage",
  props: {},
  data() {
    return {
      img: imgcircle,
      iconA: icon1,
      iconB: icon2,
      figma: fig,
      google: gogl,
      redit: red,
      skett: sket,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/about";
</style>
