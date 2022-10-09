<template>
  <q-page class="flex flex-center" style="background-color: #fec3df"  >
    <div class="row">
      <div class="col">
        <q-card-section>
          <h3>Welcome<h4>to Rental Shop</h4></h3>
        </q-card-section>
        <q-card-section >
          <center><q-btn label="Login" @click="this.$router.push('/login')"/></center>
        </q-card-section>
      </div>
    </div>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage'
})
</script>
 <style>
 h3{
  font-family: 'Peralta', 'cursive';
 }
 </style>
