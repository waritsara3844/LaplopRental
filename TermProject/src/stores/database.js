import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";


export const useLoginUserStore = defineStore("loginuser", {
  state: () => ({

    userid: useStorage("userid", ""),
    username: useStorage("username", ""),
    loginId:[
      {
        username: 'Admin',
        password: '12345**'
      },
      {
        username: 'User',
        password: '123456'
      },
    ],
    acceptedRequest: useStorage('acceptedRequest' , []),


  }),
  getters: {
    getUserId: (state) => {
      return state.userid;
    },
    getUsername: (state) => {
      return state.username;
    },
    getAccRequest: (state) =>{
      return state.acceptedRequest;
    }
  },
  actions: {
    clearStorage() {
      this.userid = "";
      this.username = "";
    },
    addAccRequest(row){
      this.acceptedRequest.push(row)
    }


  },

});


