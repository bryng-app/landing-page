import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogFilter: 'all',
  },

  mutations: {
    CHANGE_BLOG_FILTER(state, blogFilter) {
      state.blogFilter = blogFilter;
    },
  },

  actions: {
    changeBlogFilter({ commit }, blogFilter) {
      commit('CHANGE_BLOG_FILTER', blogFilter);
    },
  },

  getters: {
    blogFilter(state) {
      return state.blogFilter;
    },
  },
});
