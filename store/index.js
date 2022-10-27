export const state = () => ({
  pageWidth: 0,
})

export const actions = {
  
};

export const mutations = {
  getWidth(state, width) {
    state.pageWidth = width
  },
};

export const getters = {
  pageWidth(state) {
    return state.pageWidth
  },
};