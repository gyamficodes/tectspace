<template>
  <section class="Contact-section">
    <div class="container">
      <div class="main">
        <div class="contact-main-box">
          <h1>contact us</h1>
          <div class="input-box">
            <div class="ipA">
              <input type="text" placeholder="Name">
            </div>
            <div class="ipB">
              <input type="text" placeholder="Email">
            </div>
          </div>
          <div class="input-box">
            <div class="ipA">
              <input type="text" placeholder="Phone Number">
            </div>
            <div class="ipB">
              <input type="text" placeholder="Website">
            </div>
          </div>
              <div class="text-area">
                <textarea name="text" id="" cols="30" rows="10" placeholder="Write Message"></textarea>
              </div>
              <div class="btn">
                <span>send Message</span>
              </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {
    this.meSage;
  },
  watch: {},
};
</script>

<style lang="sass"></style>
