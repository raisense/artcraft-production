<template>
  <transition name="menu-fade">
    <div
      v-body-scroll-lock="visible"
      v-if="visible"
      class="bg-black absolute z-50 top-0 left-0 w-full h-full"
    >
      <div class="container mx-auto h-full">
        <div class="menu-header"></div>
        <div class="flex pt-8 mt-20 h-full flex-col items-center">
          <div class="link mb-8" v-for="link in links" :key="link.to">
            <nuxt-link
              @click="closeMenu"
              class="text-2xl"
              :to="localePath(link.to)"
              >{{ $t(link.key) }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, useStore, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const links = [
      { to: "/projects", key: "navbar.projects" },
      { to: "/clients", key: "navbar.clients" },
      { to: "/services", key: "navbar.services" },
      { to: "/contact", key: "navbar.contact" }
    ];

    const store = useStore();

    const visible = computed(() => store.state.menuVisible);

    const closeMenu = () => store.commit("CLOSE_MENU");

    return {
      visible,
      links,
      closeMenu
    };
  }
});
</script>

<style></style>
