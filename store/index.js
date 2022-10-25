export const state = () => ({
  pageWidth: 0,
})

export const actions = {
  //内容
};

export const mutations = {
  watchWidth(state) {
    state.pageWidth = window.innerWidth
  },
};

export const getters = {
  pageWidth(state) {
    return state.pageWidth
  },
};