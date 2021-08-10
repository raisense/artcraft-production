<template>
  <div
    ref="main"
    class="bg-black"
    :class="{
      'full-screen': isAppSmallThanWindow
    }"
  >
    <SvgSprite />
    <slot />
    <MenuList />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAppSmallThanWindow: false
    };
  },
  created() {
    this.$store.dispatch("getSocialLinks");
  },
  methods: {
    checkAppHeight() {
      this.isAppSmallThanWindow =
        this.$refs.main.clientHeight < window.innerHeight;
    }
  },
  mounted() {
    this.checkAppHeight();

    window.addEventListener("resize", this.checkAppHeight);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkAppHeight);
  }
};
</script>

<style>
.full-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.full-screen #footer-wrapper {
  margin-top: auto !important;
}
</style>
