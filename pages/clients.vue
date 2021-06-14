<template>
  <div>
    <prismic-rich-text
      class="text-4xl md:text-6xl font-bold mb-10 md:mb-20 "
      :field="fields.page_title"
    ></prismic-rich-text>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-0">
      <div v-for="(client, i) in fields.clients" :key="`client-${i}`">
        <figure class="aspect-w-1 aspect-h-1">
          <prismic-image :field="client.client_logo" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { resolveLang } from "~/utils/lang";

export default {
  head() {
    return {
      title: this.$t("navbar.clients")
    };
  },
  async asyncData({ $prismic, i18n, error }) {
    const lang = resolveLang(i18n.locale);

    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "clients"),
      { lang }
    );

    if (document) {
      // store.commit("SET_ALTERNATE_LANGS", document.alternate_languages);
      const fields = document.results[0].data;

      return { document, fields };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style></style>
