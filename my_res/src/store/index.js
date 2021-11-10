import { createStore } from "vuex";
import newmenu from "../firebase/getMenu";

const store = createStore({
  modules: {},

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

  state: {
    itemCount: 0,

    isLoggedIn: false,

    cart: [],
    menu: newmenu,
  },
});

export default store;
