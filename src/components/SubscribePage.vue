<template>
  <section class="Subscribe-page">
    <div class="container">
      <div class="sub-memu">
        <div class="main-back" :style="` background-image: url(${imageA});`">
          <div class="main-menu">
            <div class="main-a">
              <h2>Subscribe Our Newsletter</h2>
              <p>Subscribe to Keep Up to Date with Everything Techno</p>
              <div class="myBox">
                <div class="myBox-menu">
                  <input type="text" placeholder="enter your email" />
                  <div class="btn">Subscribe</div>
                </div>
              </div>
            </div>
            <div class="main-b">
                <img :src="messages" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import back from "../assets/image/subcrib-bg.png";
import sms from "../assets/image/messege.png";

export default {
  name: "SubscribePage",
  data() {
    return {
      imageA: back,
      messages: sms,
    };
  },
  methods: {
    greet() {
      alert("good morning");
    },
  },
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/Subscribe";
</style>
