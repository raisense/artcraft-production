<template>
  <div>
    <h1 class="text-4xl md:text-6xl text-center font-bold mb-16">
      {{ $t("navbar.projects") }}
    </h1>

    <div class="grid gird-cols-1 md:grid-cols-2 gap-5">
      <nuxt-link
        class="project-card"
        v-for="project in sortedProjects"
        :key="project.id"
        :to="localePath(`/projects/${project.uid}`)"
      >
        <figure class="aspect-w-4 aspect-h-4 md:aspect-h-3">
          <prismic-image
            class="object-cover"
            :field="project.data.cover_image"
          />
        </figure>
        <div class="card-overlay">
          <prismic-rich-text class="title" :field="project.data.title" />
          <prismic-rich-text class="excerpt" :field="project.data.excerpt" />
        </div>
      </nuxt-link>
    </div>
    <div class="flex justify-between items-center my-10">
      <button
        v-if="document.prev_page"
        @click="handlePrev"
        class="border border-2 bg-transparent text-white font-bold focus:text-black hover:text-black transition-all hover:bg-white focus:bg-white focus:text-black py-4 xs:py-6 px-16"
      >
        {{ $t("Prev") }}
      </button>
      <button
        @click="handleNext"
        v-if="document.next_page"
        class="border border-2 bg-transparent text-white font-bold focus:text-black hover:text-black transition-all hover:bg-white focus:bg-white focus:text-black py-4 xs:py-6 px-16"
      >
        {{ $t("Next") }}
      </button>
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

  computed: {
    sortedProjects() {
      const byOrder = (a, b) => {
        if (a.data.order === b.data.order) return 0;
        else if (a.data.order === null) return 1;
        else if (b.data.order === null) return -1;

        return a < b ? -1 : 1;
      };

      return this.document.results.sort(byOrder);
    }
  },

  methods: {
    handlePrev() {
      this.$router.push(`/projects?page=${this.document.page - 1}`);
    },
    handleNext() {
      this.$router.push(`/projects?page=${this.document.page + 1}`);
    }
  },

  async asyncData({ $prismic, i18n, error, query, ...params }) {
    const lang = resolveLang(i18n.locale);

    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "projects"),
      {
        pageSize: 30,
        page: query.page ? query.page : 1,
        lang: lang,
        orderings: "[document.last_publication_date]"
      }
    );

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  watch: {
    "$route.query": {
      handler: function(to, from) {
        if (to.page && to.page !== from.page) {
          this.$nuxt.refresh();

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }
      }
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
