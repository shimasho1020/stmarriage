export const state = () => ({
  isLoadingEnabled: true,
  pageLoading: false,
  pageWidth: 0,
  headerScrollTrigger: false,
  formDisplay:false,
})

export const actions = {
  startLoading({commit}) {
    commit('SET_PAGE_LOADING', true)
  },
  finishLoading({commit}) {
    commit('SET_PAGE_LOADING', false)
  },
};

export const mutations = {
  setLoadingEnable (state, flag) {
    state.isLoadingEnabled = flag;
  },
  SET_PAGE_LOADING(state, status) {
    state.pageLoading = status
  },
  getWidth(state, width) {
    state.pageWidth = width
  },
  changeHeaderToTrans(state){
    state.headerScrollTrigger = false
  },
  changeHeaderToBlue(state){
    state.headerScrollTrigger = true
  },
  changeFormToDis(state){
    state.formDisplay = true
  },
  changeFormToNone(state){
    state.formDisplay = false
  },
};

export const getters = {
  isLoadingEnabled (state) {
    return state.isLoadingEnabled
  },
  isPageLoading(state) {
    return state.pageLoading
  },
  pageWidth(state) {
    return state.pageWidth
  },
  headerScrollTriggerActive(state) {
    return state.headerScrollTrigger
  },
  formDisplayActive(state){
    return state.formDisplay
  }
};