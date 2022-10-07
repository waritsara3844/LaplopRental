<template>
  <q-page class="flex flex-center">
    <h3>Welcome<h4>to Rental Shop</h4></h3>
    <q-btn label="Login" @click="this.router.push('/login')"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage'
})
</script>
 <style>
    body{
    background-color: #fec3df;

  }
  h3{
    font-family: 'Peralta', cursive;
    font-size: 70px;
    font-weight: bold;
    text-align: center;
  }
  h4{
    font-size: 50px;
    font-weight: bold;
  }

 </style>
