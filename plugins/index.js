import { defineNuxtPlugin } from '@nuxtjs/composition-api'
export default defineNuxtPlugin((ctx, inject) => { 
  const test = () => {
    return 10000
  } 
  inject('test', test);
});

// 次のように使う
// setup() {
//   const { $test } = useContext()
//   console.log($test())
// },