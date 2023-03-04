<template>
    <section class="testi-background" :style="`background: url(${testi})`">
        <div class="container">

        </div>
    </section>
</template>

<script>
import backg from '../assets/image/testiBG.png';

export default {
    name: 'TestimonialPage',
    data() {
        return {
            testi: backg,
        }
    },
    methods: {},
    computed: {},
    mounted() { },
    watch: {},
}
</script>

<style lang="scss">
@import'../assets/TestimonialSection';
</style>