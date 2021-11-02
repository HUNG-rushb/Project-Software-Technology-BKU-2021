import { createStore } from "vuex";

export default createStore({
  modules: {},
  state: {
    itemCount: 0,

    isLoggedIn: false,
  },
  mutations: {
    insertItem(state) {
      state.itemCount++;
    },
    deleteItem(state) {
      state.itemCount--;
    },
  },
  getters: {
    finalItemCount(state) {
      return state.itemCount;
    },
  },
  actions: {},
  modules: {},
});
