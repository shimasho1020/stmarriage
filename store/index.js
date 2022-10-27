export const state = () => ({
  pageWidth: 0,
})

export const actions = {
  ActionExample(context, payload) {
    console.log(payload.config)
    context.commit('setData', payload.config)
  },
  exposeLog(text){
    console.log(text)
  },
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