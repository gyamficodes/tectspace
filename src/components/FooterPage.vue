<template>
  <section class="footerpages" :style="`background-image: url(${backgroundA})`">
    <div class="container">
      <div class="Footer-top">
        <div class="Footer-top-a">
          <div class="footer-top-left">
            <img class="image" :src="logo" alt="" />
            <p>
              Completely strategize client-cent <br />
              Phosfluorescently iterate efficient <br />
              internal or organic.
            </p>
            <h1>follow us</h1>
            <div class="social-media-flex">
              <div class="facebook">
                <font-awesome-icon class="social" icon="fa-solid fa-message" />
              </div>
              <div
                class="facebook"
                style="
                  background: linear-gradient(to top left, #e94d5a, #c327a2);
                "
              >
                <font-awesome-icon class="social" icon="fa-solid fa-phone" />
              </div>
              <div class="facebook">
                <font-awesome-icon class="social" icon="fa-solid fa-table" />
              </div>
              <div class="facebook" style="background: #f70102">
                <font-awesome-icon
                  class="social"
                  icon="fa-solid fa-voicemail"
                />
              </div>
            </div>
          </div>
          <div class="footer-top-right">
            <h1>Quick Links</h1>
            <h2><div class="dash"></div> Links</h2>
            <h2><div class="dash"></div>about us </h2>
            <h2><div class="dash"></div> contact us</h2>
            <h2><div class="dash"></div>service</h2>
            <h2><div class="dash"></div>our team</h2>
          </div>
        </div>
        <div class="Footer-top-b">
          <div class="Footer-topLeft">
            <h1>Popular Posts</h1>
            <div class="flexbase">
              <div class="image-box">
                <img :src="blogA" alt="">
              </div>
              <div class="image-content">
                <a href="#">How To Plugin <br> Install WP server?</a>
                <span>December 12, 2023</span>
              </div>
            </div>
        
            <div class="flexbase-b">
              <div class="image-box">
                <img :src="blogC" alt="">
              </div>
              <div class="image-content">
                <a href="#">How To Plugin <br> Install WP server?</a>
                <span>December 12, 2023</span>
              </div>
            </div>
          </div>      
          <div class="Footer-topRight">
            <h1>Contact Info</h1>
            <div class="toRight-flex">
              <div class="Icon-box">
                <font-awesome-icon class="social" icon="fa-solid fa-location" />
              </div>
              <div class="Icon-content">
                <h1>location</h1>
                <p>55 Main Street, New York</p>
              </div>
            </div>

            <div class="toRight-flex">
              <div class="Icon-box">
                <font-awesome-icon class="social" icon="fa-solid fa-envelope" />
              </div>
              <div class="Icon-content">
                <h1>email us</h1>
                <p>55 Main Street, New York</p>
              </div>
            </div>

            <div class="toRight-flex">
              <div class="Icon-box">
                <font-awesome-icon class="social" icon="fa-solid fa-phone" />
              </div>
              <div class="Icon-content">
                <h1>phone us</h1>
                <p>55 Main Street, New York</p>
              </div>
            </div>

          </div>      
         </div>
      </div>
      <div class="Footer-navbar">
        <div class="Footer-nav-menu">
          <div class="CopyRight-text">
            <p>© 2023 Techno.All Rights Reserved.</p>
          </div>
          <div class="CopyRight-privacy">
            <span>Privacy Policy / Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import background from "../assets/image/footer-bg-techno.png";
import logo2 from "../assets/image/logo2.png";
import blog from "../assets/image/footer-blog-1.png";
import blogB from "../assets/image/footer-blog-2.png";

export default {
  name: "FooterPage",
  props: [],
  data() {
    return {
      backgroundA: background,
      logo: logo2,
      blogA:  blog,
      blogC:  blogB,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/FooterPage";
</style>
