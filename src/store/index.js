
import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  state: {
    tweets: []
  },
  mutations: {
    initApp(state, pTweets){
      state.tweets = pTweets
    }
  },
  actions: {
    initApp({commit}){
      Axios.get("http://localhost:3000/tweets").then(response => {
        commit("initApp", response.data || [])
      })
    }
  },
  getters:{
    tweets: state => state.tweets
  },
  modules: {
  }
})
