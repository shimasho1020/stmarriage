import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from "vuex";

// stateの型定義
type State = {};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// store本体
export const store = createStore<State>({});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
}