import { createStore } from 'vuex';
export default createStore({
  state: {
    count: 10,
    message: {
      name: 'harry',
      sex: 'male',
    },
  },
  mutations: {
    setCount(state) {
      state.count = state.count++;
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
  getters: {},
  modules: {},
});
