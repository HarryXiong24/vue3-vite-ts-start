import { createStore } from 'vuex';
export default createStore({
  state: {
    count: 10,
    message: {
      name: '',
      age: '',
    },
  },
  mutations: {
    setCount(state) {
      state.count++;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    setMessage(context, value) {
      context.commit('setMessage', value);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  modules: {},
});
