<template>
  <div>
    <prismic-rich-text class="text-5xl font-bold mb-20" :field="title" />

    <div>
      <div
        class="mb-20 pb-16"
        v-for="(service, i) in document.results[0].data.body"
        :key="`service-${i}`"
      >
        <prismic-rich-text
          class="service-title"
          :field="service.primary.service_title"
        />
        <prismic-rich-text
          class="lg:w-1/2 mx-auto text-lg"
          :field="service.primary.description"
        />

        <div class="my-20">
          <h3 class="text-2xl mb-4 font-semibold">Примеры работ</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <figure
              class="aspect-w-4 aspect-h-3"
              v-for="(imageItem, i) in service.items"
              :key="`image-item-${i}`"
            >
              <prismic-image
                class="object-cover"
                :field="imageItem.gallery_image"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useStatic,
  useMeta,
  useContext,
  computed
} from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    const { $prismic } = useContext();

    const document = useStatic(() =>
      $prismic.api.query(
        $prismic.predicates.at("document.type", "our-services")
      )
    );

    const title = computed(() => document.value.results[0].data.page_title);

    useMeta(() => ({ title: $prismic.asText(title.value) }));

    return { document, title };
  }
});
</script>

<style>
.service-title:after {
  content: "";
  height: 2px;

  @apply bg-white top-5 left-0 absolute w-full;
}

.service-title {
  @apply mb-20 relative text-center text-4xl font-medium;
}

.service-title h2 {
  width: fit-content;

  @apply px-16 relative z-20 bg-black mx-auto;
}
</style>
