<template>
  <section class="Service-two">
    <div class="container">
      <div class="serviePagetwo-Top">
        <div class="myBox">
          <div class="box-flex">
            <div class="box" v-for="item in boxes" :key="item.id">
              <h1>{{ item.num }}</h1>
              <span>{{ item.test }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="serviePagetwo-Down">
        <div class="page-two-box">
          <div class="card" v-for="data in Cards" :key="data.id">
            <div class="card-num">
              <h1>{{ data.numbers }}</h1>
              <span id="line"></span>
            </div>
            <div class="card-content">
              <h2>
               {{ data.Title }}
              </h2>
              <p>
               {{ data.myTest }}
              </p>
            </div>
          </div>
        </div>
        <div class="page-two-box">
          <div class="card" v-for="data in Card" :key="data.id">
            <div class="card-num">
              <h1>{{ data.numbers }}</h1>
              <span id="line"></span>
            </div>
            <div class="card-content">
              <h2>
               {{ data.Title }}
              </h2>
              <p>
               {{ data.myTest }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesPagetwo",
  components: {},
  props: {},
  data() {
    return {
      boxes: [
        { id: 1, num: "15K", test: "Happy Clients" },
        { id: 2, num: "1280+", test: "Account Number" },
        { id: 3, num: "10K", test: "Finished Projects" },
        { id: 4, num: "992+", test: "Win Awards" },
      ],
      Cards: [
        {
          id: 1,
          numbers: "01",
          Title: "Marketing Strategy &  Analysis",
          myTest:
            "Marketing bringing new amazing products and services to market discovering products.",
        },

        {
          id: 2,
          numbers: "02",
          Title: "Web Design & Development",
          myTest:
            "Development bringing amazing products and services to market products.",
        },
        {
          id: 3,
          numbers: "03",
          Title: "SEO & Digital Marketing",
          myTest:
            "Whether bringing new amazing products and services to market discovering products.",
        },
      ],
      Card: [
        {
          id: 1,
          numbers: "04",
          Title: "Dedicated 247 Support",
          myTest:
            "100% Support bringing new amazing products and services discovering products.",
        },

        {
          id: 2,
          numbers: "05",
          Title: "Agile and Fast Working Style",
          myTest:
            "Working fast bringing new amazing products and services to discovering products.",
        },
        {
          id: 3,
          numbers: "06",
          Title: "30-Day Money-back Guarantee",
          myTest:
            "Money bringing new amazing products and services to market discovering products.",
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
@import "../assets/ServiceTwo";
</style>
