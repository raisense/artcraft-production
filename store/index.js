export const state = () => ({
  menuVisible: false,
  alternate_langs: []
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
  }
};
