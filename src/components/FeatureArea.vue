<template>
    <section class="feature-background">
        <div class="container">
            <div class="feature-top">
                <div class="top-content">
                    <div class="box">Featured Services</div>
                    <h1>Engaging Creative <span>Minds</span></h1>
                </div>
            </div>
            <div class="feature-down">
                <div class="card" v-for="item in features" :key="item.id">
                    <div class="card-content">
                        <h1>{{ item.title }}</h1>
                        <p v-html="item.content" />
                        <div class="card-btn">
                            learn more
                        </div>
                    </div>
                    <div class="card-img">
                        <img :src="item.image" alt="">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import item1 from '../assets/image/feature1.png'
import item2 from '../assets/image/feature2.png'

    export default {
        name: 'FeatureArea',
        props: {},
  data() {
    return {
        features: [
            {id: 1, title: 'Team Brainstroming', content:'Globally develop the unique technologies <br> Seamlessly cultivate extensible', 
            image: item1},
            {id: 1, title: 'Business Collaboration', content:'Globally develop the unique technologies <br> Seamlessly cultivate extensible</p>', 
            image: item2},
        ]
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  watch: {},
    }
</script>

<style lang="scss">
@import'../assets/feature';
</style>