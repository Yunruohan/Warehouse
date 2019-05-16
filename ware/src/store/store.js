import Vue from 'vue'
import Vuex from 'vuex'
// import { Message } from 'qfpay-element-ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userPhone: '',
    userName: '',
    userpswd: '',
    drugstoreName: ''
  },
  getters: {
    getState(state) {
        return state.validate
    }
  },
  mutations: {
    setState(state, name) {
        state.validate = name
    }
  },
  actions: {
     setValidate({commit, state}, name) {
         commit("setState",name )
     } 
  }
})

export default store
