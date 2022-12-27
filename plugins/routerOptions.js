export default ({ store, app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log('FROM: ' + from.name + ', TO: ' + to.name) 
    if (to.name === 'index') {
      store.commit('changeHeaderToTrans')
      store.commit('changeFormToNone')
    } else {
      store.commit('changeHeaderToBlue')
      store.commit('changeFormToDis')
    }
    if (from.name !== null && to.name == 'index') {
      store.commit('setLoadingEnable', false)
    }
    if (from.name == null && to.name == '*') {
      console.log('TEST')
      app.router.push('/')
      store.commit('setLoadingEnable', false)
    }
    next();
  });
};