export default ({ store, app }) => {
  app.router.beforeEach((to, from, next) => {
    if (to.name == 'index') {
      store.commit('changeHeaderToTrans')
    } else {
      store.commit('changeHeaderToBlue')
    }
    next();
  });
};