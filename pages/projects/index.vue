<template>
  <div>
    <h1 class="text-4xl md:text-6xl text-center font-bold mb-16">
      {{ $t("navbar.projects") }}
    </h1>

    <div class="grid gird-cols-1 md:grid-cols-2 gap-5">
      <nuxt-link
        class="project-card"
        v-for="project in document.results"
        :key="project.id"
        :to="localePath(`/projects/${project.uid}`)"
      >
        <figure class="aspect-w-4 aspect-h-4 md:aspect-h-3">
          <prismic-image
            class="object-cover"
            :field="project.data.featured_image"
          />
        </figure>
        <div class="card-overlay">
          <prismic-rich-text class="title" :field="project.data.title" />
          <prismic-rich-text class="excerpt" :field="project.data.excerpt" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { resolveLang } from "~/utils/lang";

export default {
  head() {
    return {
      title: this.$t("navbar.projects")
    };
  },

  async asyncData({ $prismic, i18n, params, error }) {
    const lang = resolveLang(i18n.locale);

    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "projects"),
      {
        lang: lang
      }
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
.project-card {
  @apply relative;
}

.project-card:hover .card-overlay {
  @apply opacity-100;
}

.card-overlay {
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );

  @apply p-6 opacity-100 md:opacity-0 flex flex-col justify-end;
}

.project-card .title {
  @apply text-2xl font-semibold mb-4;
}

.project-card .excerpt p {
  @apply line-clamp-2;
}
</style>
