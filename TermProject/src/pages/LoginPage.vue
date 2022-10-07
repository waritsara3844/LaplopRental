<template>
  <q-page class="flex flex-center">
    <q-card class="my-card bg-pink-6 q-px-md q-py-md" style="width:350px">
      <div class="flex flex-center">
        <q-icon name="account_circle" color="white" size="4rem"/>
      </div>
      <q-card-section>
        <q-from>
          <div>
            <q-input
              v-model="username"
              type="text"
              label="Your Username"
              color="white"
              lazy-rules
              :rule="[(val)=>(val && val.length > 0)|| 'Must be at least 1 character!']"
            />
          </div>
          <div>
            <q-input
              v-model="password"
              :type="isPwd ? 'password': 'text'"
              label="Your Password"
              color="white"
              lazy-rules
              :rule="[(val)=>(val && val.length >= 6)|| 'Must be at least 6 characters!']"
            />
          </div><br>
          <div>
            <q-btn label="Submit" type="submit" color="pink-7" style="width:100%" @click="this.router.push('/')"/>
          </div><br>
          <div>
             <center><a href="/register" class="text-white" >Not reigistered? Created an Account</a></center>
          </div>
        </q-from>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { database } from "../stores/database"
import { Notify } from "quasar"
export default {
  name:"LoginPage",
  data(){
    return{
      username: null,
      password: null,
      isPwd: true,
    }
  },
  methods:{
    onReset(){
      this.username = null
      this.password = null
      this.isPwd = true
    },
    onSubmit(){
      const data={
        username: this.username,
        password: this.password
      }
    }
  }
};
</script>

<style>

</style>
