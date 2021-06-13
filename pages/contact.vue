<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div>
      <h2 class="text-3xl mb-8 font-semibold">{{ $t("navbar.contact") }}</h2>
      <a class="block" :href="fields.email.url">
        {{ fields.email.url.slice(7) }}
      </a>

      <a
        v-for="phone in fields.phone_numbers"
        :key="phone.text"
        class="block font-bold"
        :href="`tel:${phone.text}`"
      >
        {{ phone.text }}
      </a>
      <div class="w-full lg:w-3/5 mt-10">
        <a target="_blank" :href="generateMapLink(fields.address_location)">
          {{ fields.address_text[0].text }}
        </a>
      </div>
    </div>
    <div class="mt-10 md:mt-0">
      <h2 class="text-3xl mb-8 font-semibold">
        {{ $t("Social links") }}
      </h2>
      <div class="grid grid-cols-2">
        <a
          v-for="(social, i) in fields.social_links"
          :key="`social-${i}`"
          :href="social.social_link.url"
        >
          {{ social.social_name[0].text }}
        </a>
      </div>
    </div>
    <div class="mt-10 md:mt-0">
      <h2 class="text-3xl mb-8 font-semibold">
        {{ $t("Contact us") }}
      </h2>
      <form action="">
        <input
          class="form-field w-full"
          name="first_name"
          type="text"
          :placeholder="$t('First name')"
        />
        <input
          class="form-field w-full"
          name="email"
          type="text"
          :placeholder="$t('E-mail')"
        />
        <input
          class="form-field w-full"
          type="text"
          name="phone_number"
          :placeholder="$t('Phone number')"
        />
        <textarea
          class="form-field w-full"
          name="message"
          rows="5"
          :placeholder="$t('Your message')"
        />
        <button class="btn-submit" type="submit">
          {{ $t("Send") }}
        </button>
      </form>
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
      $prismic.api.query($prismic.predicates.at("document.type", "contact"))
    );

    const fields = computed(() => document.value.results[0].data);

    const generateMapLink = ({ longitude, latitude }) =>
      `http://www.google.com/maps/place/${latitude},${longitude}`;

    useMeta(() => ({ title: "Контакты" }));

    return { document, fields, generateMapLink };
  }
});
</script>

<style>
.form-field {
  @apply bg-white text-lg bg-opacity-10 block px-5 py-4 mb-4;
}

.btn-submit {
  @apply text-white bg-white bg-opacity-10 px-10 py-4 text-lg;
}
</style>
