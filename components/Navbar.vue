<template>
  <div class="navbar">
    <nuxt-link :to="localePath('/')">
      <img src="~/assets/icons/logo.svg" />
    </nuxt-link>
    <div>
      <Menu />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {}
});
</script>

<style scoped>
.navbar {
  z-index: 120;
  @apply px-5 md:px-0 relative container justify-between items-center flex mx-auto py-8;
}

.menu-btn {
  width: 48px;
  height: 48px;

  @apply p-1;
}
</style>
