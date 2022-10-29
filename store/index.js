export const state = () => ({
  pageWidth: 0,
  headerScrollTrigger: false,
})

export const actions = {
  
};

export const mutations = {
  getWidth(state, width) {
    state.pageWidth = width
  },
  changeHeaderToTrans(state){
    state.headerScrollTrigger = false
  },
  changeHeaderToBlue(state){
    state.headerScrollTrigger = true
  },
};

export const getters = {
  pageWidth(state) {
    return state.pageWidth
  },
  headerScrollTriggerActive(state) {
    return state.headerScrollTrigger
  },
};