export default ({ store, app }) => {
  app.router.beforeEach((to, from, next) => {
    if (to.name === 'index') {
      store.commit('changeHeaderToTrans')
      store.commit('changeFormToNone')
    } else {
      store.commit('changeHeaderToBlue')
      store.commit('changeFormToDis')
    }
    next();
  });
};