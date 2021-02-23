import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    get_users_mutation(state,payload){
      state.users = payload
    }
  },
  actions: {
    async get_users_action({ commit }){
      const {data,status} = await axios.get('http://localhost:3000/users');
      console.log(status);
      commit('get_users_mutation',data);
    }
  },
  modules: {
  }
})
