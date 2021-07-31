<template>
  <div class="bg-black">
    <SvgSprite />
    <slot />
    <MenuList />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getSocialLinks");
  }
};
</script>

<style></style>
