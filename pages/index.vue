<template>
  <div class="home-screen w-screen h-screen bg-no-repeat bg-cover">
    <Navbar />
    <div class="hero-wrapper container h-full mx-auto">
      <div class="flex justify-between items-center h-full">
        <div class="text-center mx-auto">
          <h1 class="block text-6xl mb-16 font-bold">
            <prismic-rich-text :field="document.results[0].data.headline" />
          </h1>
          <nuxt-link
            tag="button"
            to="/projects"
            class="font-bold bg-white text-black py-6 px-16"
          >
            проекты
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "homepage",

  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "homepage")
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
.home-screen {
  background-image: url("/home.jpg");
}

.hero-wrapper {
  height: calc(100% - 88px - 118px);
}
</style>
