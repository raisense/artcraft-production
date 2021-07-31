import { resolveLang } from "~/utils/lang";

export const state = () => ({
  menuVisible: false,
  alternate_langs: [],
  socialLinks: []
});

export const mutations = {
  TRIGGER_MENU(state) {
    state.menuVisible = !state.menuVisible;
  },
  CLOSE_MENU(state) {
    state.menuVisible = false;
  },
  SET_ALTERNATE_LANGS(state, payload) {
    state.alternate_langs = payload;
  },
  SET_SOCIAL_LINKS(state, payload) {
    state.socialLinks = payload;
  }
};

export const actions = {
  async getSocialLinks({ commit }) {
    const locale = $nuxt.$i18n.locale;
    const lang = resolveLang(locale);

    const document = await this.$prismic.api.query(
      this.$prismic.predicates.at("document.type", "social_links"),
      { lang }
    );

    commit("SET_SOCIAL_LINKS", document.results);
  }
};
