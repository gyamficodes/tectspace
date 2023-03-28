<template>
  <section class="Process-Background">
    <div class="container">
      <div class="Process-Top">
        <div class="Process-Top-content">
          <h2>PROCESS</h2>
          <h1>Our Working Process</h1>
          <div class="h-line"></div>
        </div>
      </div>
      <div class="Process-Down">
        <div class="Process-down-content">
          <div class="card" v-for="items in cards" :key="items.id">
            <div class="pic">
              <img :src="items.PRO1" alt="" />
              <div class="round">{{ items.number }}</div>
            </div>
            <h1>{{ items.title }}</h1>
            <p>
              <br />
              {{ items.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imgg1 from "../assets/image/process1.jpg";
import imgg2 from "../assets/image/process2.jpg";
import imgg3 from "../assets/image/process3.jpg";
import imgg4 from "../assets/image/process4.jpg";

export default {
  name: "ProcessPage",
  components: {},
  props: {},
  data() {
    return {
      PRO: imgg1,
      cards: [
        {
          id: 1,
          PRO1: imgg1,
          number: "1",
          title: "Select A Project",
          text: "Select project this is my companysit concept tour adipisicing elit.",
        },
        {
          id: 2,
          PRO1: imgg2,
          number: "2",
          title: "Online Marketing",
          text: "Select project this is my companysit concept tour adipisicing elit.",
        },
        {
          id: 3,
          PRO1: imgg3,
          number: "3",
          title: "Solution Mean",
          text: "Select project this is my companysit concept tour adipisicing elit.",
        },
        {
          id: 4,
          PRO1: imgg4,
          number: "4",
          title: "Creative Project",
          text: "Select project this is my companysit concept tour adipisicing elit.",
        },
      ],
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
@import "../assets/ProcessSection";
</style>
