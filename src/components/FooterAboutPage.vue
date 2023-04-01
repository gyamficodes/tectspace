<template>
  <section class="footerpages" :style="`background-image: url(${backgroundA})`">
    <div class="container">
      <div class="Footer-top">
        <div class="Footer-top-a">
          <div class="footer-top-left">
            <!-- <img class="image" :src="logo" alt="" /> -->
            <md-avatar>
              <img src="../assets/image/logo2.png" alt="Avatar" />
            </md-avatar>
            <p>
              Condimentum rhoncus, sem quam <br> semper libero, sit amet adipiscing <br>
              sem neque sed ipsum. Nam quam <br> nunc, blandit vel, luctus.
            </p>
            <div class="social-media-flex">
              <h1>follow us</h1>

              <div class="facebook">
                <font-awesome-icon class="social" icon="fa-solid fa-message" />
              </div>
              <div class="facebook" style="
                    background: linear-gradient(to top left, #e94d5a, #c327a2);
                  ">
                <font-awesome-icon class="social" icon="fa-solid fa-phone" />
              </div>
              <div class="facebook">
                <font-awesome-icon class="social" icon="fa-solid fa-table" />
              </div>
              <div class="facebook" style="background: #f70102">
                <font-awesome-icon class="social" icon="fa-solid fa-voicemail" />
              </div>
            </div>
          </div>
          <div class="footer-top-right">
            <h1>Our Services</h1>
            <h2>
              <div class="dash"></div>
              Marketing Strategy
            </h2>
            <h2>
              <div class="dash"></div>
              Interior Design
            </h2>
            <h2>
              <div class="dash"></div>
              Digital Services
            </h2>
            <h2>
              <div class="dash"></div>
              Product Selling
            </h2>
            <h2>
              <div class="dash"></div>
              Social Marketing
            </h2>
          </div>
        </div>
        <div class="Footer-top-b">
          <div class="Footer-topLeft">
            <h1>Popular Posts</h1>
            <div class="flexbase">
              <div class="image-box">
                <img :src="blogA" alt="" />
              </div>
              <div class="image-content">
                <a href="#">Tiktok Illegally <br> collecting data sharing</a>
                <span>December 12, 2023</span>
              </div>
            </div>

            <div class="flexbase-b">
              <div class="image-box">
                <img :src="blogC" alt="" />
              </div>
              <div class="image-content">
                <a href="#">How can use our <br> latest news by</a>
                <span>December 12, 2023</span>
              </div>
            </div>
          </div>
          <div class="Footer-topRight">
            <h1>Company Address</h1>
            <div class="toRight-flex">
              <!-- <div class="Icon-box">
                <font-awesome-icon class="social" icon="fa-solid fa-location" />
              </div> -->
              <div class="Icon-content">
                <h1>Porem awesome dolor sitework <br> amet, consetur acing elit, sed do <br> eiusmod ligal</h1>
                <!-- <p>55 Main Street, New York</p> -->
              </div>
            </div>

            <div class="toRight-flex">
              <!-- <div class="Icon-box">
                <font-awesome-icon class="social" icon="fa-solid fa-envelope" />
              </div> -->
              <div class="Icon-content">
                <h1>Address :54/1 New dhas sorini Asut, Melbord Austria.</h1>
                <!-- <p>55 Main Street, New York</p> -->
              </div>
            </div>

            <div class="toRight-flex">
              <!-- <div class="Icon-box">
                <font-awesome-icon class="social" icon="fa-solid fa-phone" />
              </div> -->
              <div class="Icon-content">
                <h1>Phone :54786547521</h1>
                <p>Email :demo@example.com</p>
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
import background from "../assets/image/call-bg.png";
import logo2 from "../assets/image/logo2.png";
import blog from "../assets/image/recent1.jpg";
import blogB from "../assets/image/recent3.jpg";

export default {
  name: "FooterAboutPage",
  data() {
    return {
      backgroundA: background,
      logo: logo2,
      blogA: blog,
      blogC: blogB,
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.meSage;
  },
  watch: {},
};
</script>
<style lang="scss">
@import "../assets/FooterAboutPage";
</style>
