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
        <h1>davsvdsv</h1>
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
      //   images: pic,
      boxes:[
      {id:1, num: '15K', test:'Happy Clients'},
      {id:2, num: '1280+', test:'Account Number'},
      {id:3, num: '10K', test:'Finished Projects'},
        {id:4, num: '992+', test:'Win Awards'},
      ],

    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="sass" scoped></style>
