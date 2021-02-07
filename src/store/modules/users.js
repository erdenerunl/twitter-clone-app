import Axios from "axios";
import router from "@/router";

export default {
  namespaced: true,

  state: {
    user: null
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser;
      localStorage.user = JSON.stringify(newUser);
    },
  },
  actions: {
    register({ commit }, newUser) {
      Axios.post("http://localhost:3000/users", newUser)
        .then(response => {
          commit("setUser", response?.data || []);
          router.push("/");
        })
        .catch(e => console.warn(e));
    },

    login({ commit }, pUser) {
      Axios.get(`http://localhost:3000/users?username=${pUser.username}&password=${pUser.password}`)
      .then(loginResponse => {
        if(loginResponse?.status === 200 && loginResponse?.data?.length > 0 ){
            commit('setUser', loginResponse?.data[0])
            router.push("/")
        }
      })
    }
  },
  getters: {
    isAuthenticated: state => state.user !== null
  }
};
