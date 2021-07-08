<template>
  <div class="home-screen w-screen h-screen bg-no-repeat bg-cover">
    <div class="bg-video">
      <video
        src="/background-video.m4v"
        playsinline
        autoplay
        muted
        loop
      ></video>
    </div>
    <Navbar />
    <div class="hero-wrapper relative z-10 container h-full mx-auto">
      <div class="flex justify-between items-center h-full">
        <div class="mb-16 xs:mb-0 text-center mx-auto">
          <prismic-rich-text
            class="block px-5 md:px-0 text-4xl md:text-6xl mb-5 sm:mb-10 font-bold"
            :field="document.results[0].data.headline"
          />

          <nuxt-link :to="localePath('/projects')" class="">
            <button
              class="border border-2 bg-transparent text-white font-bold focus:text-black hover:text-black transition-all hover:bg-white focus:bg-white focus:text-black py-4 xs:py-6 px-16"
            >
              {{ $t("navbar.projects") }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resolveLang } from "~/utils/lang";

export default {
  layout: "homepage",
  head() {
    return {
      title: this.$t("Homepage")
    };
  },
  async asyncData({ $prismic, i18n, error }) {
    const lang = resolveLang(i18n.locale);

    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "homepage"),
      { lang }
    );

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .home-screen {
  background-image: url("/home.jpg");
} */

.bg-video {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bg-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-video:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-wrapper {
  height: calc(100% - 88px - 118px);
}
</style>
