import { auth } from '~/plugins/firebase.js'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const state = () => ({
  user: {
    uid: '',
    email: '',
    login: false,
  },
  isLoadingEnabled: true,
  pageLoading: false,
  pageWidth: 0,
  headerScrollTrigger: false,
  formDisplay:false,
  isScrollActive: true,
  imagePosition: 0,
})

export const actions = {
  login({ dispatch }, payload) {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(userCredential => {
        console.log(userCredential.user)
          console.log('ログインしました')
          dispatch('checkLogin')
        }).catch((error) => {
          alert(error)
        })
  },
  checkLogin ({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        commit('getData', { uid: user.uid, email: user.email })
        commit('switchLogin', true)
      }
    })
  },
  logout ({ commit }) {
    signOut(auth).then(()=>{
      console.log("ログアウトしました");
      commit('switchLogin', false)
    })
    .catch( (error)=>{
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    })
  },
  startLoading({commit}) {
    commit('SET_PAGE_LOADING', true)
  },
  finishLoading({commit}) {
    commit('SET_PAGE_LOADING', false)
  },
};

export const mutations = {
  getData (state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  switchLogin (state, flag) {
    state.user.login = flag
  },
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
  scrollActiveOn(state){
    state.isScrollActive = true
  },
  scrollActiveOff(state){
    state.isScrollActive = false
  },
  add (state) {
    state.imagePosition += 5
  },
  subtract (state) {
    state.imagePosition -= 5
  },
  clear (state) {
    state.imagePosition = 0
  },
  insertCount(state, count) {
    state.imagePosition = count
  },
};

export const getters = {
  user: state => {
    return state.user
  },
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
  },
  isScrollActive(state) {
    return state.isScrollActive
  },
  imagePosition(state) {
    return state.imagePosition
  },
};