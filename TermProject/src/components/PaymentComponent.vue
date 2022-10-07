<!-- eslint-disable vue/valid-v-model -->
<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg">
    <q-card-actions align="center">
      <q-btn flat round color="yellow"
        class="text-h6"
        @click="dialog = true"
        label="Inprocess"/>
    </q-card-actions>

    <!--Dialog -->
    <q-dialog v-model="dialog" persistent>
        <q-card class="my-dialog-card">
          <q-card-section class="row items-center">
            <span class="text-h6" >Calculate Total</span>
          </q-card-section>
          <q-separator />

          <q-card-section class="col">
              <div>Name : {{ pay[0].username }}</div>
              <div>Price : {{ pay[0].price }}</div>
              <div>vat 7% : {{vatPrice(pay[0].price)}}</div>
              <div>Total Price : {{totalPrice(pay[0].price)}}</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="negative" v-close-popup />
            <q-btn flat label="Comfirm"
            color="primary"
            @click="this.$router.push('/payment')"
            v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

  </q-card>
</template>

<script>
import { ref } from "vue"
export default {
  name: "PaymentComponent",
  setup () {
    return {
      dialog:ref(false),
      payment:ref(false),
    }
  },
  data(){
    return{
      total:"",
      finalTotal:null,
      vat:null,
      pay:[
        {
          id:1,
          username:"Warits",
          price: 6000,
          date:"09/30/2022 to 10/30/2022",
        },
        {
          id:2,
          username:"Puntira",
          price:2500 ,
          date:"09/28/2022 to 10/15/2022",
        },
        {
          id:3,
          username:"Motana",
          price:7300,
          date:"10/7/2022 to 11/30/2022",
        }
      ]
    }
  },
  methods:{
    totalPrice(price){
      this.finalTotal = price + (price*(7/100))
      console.log(this.finalTotal);
      return this.finalTotal
    },
    vatPrice(price){
      this.vat = price*(7/100)
      return parseFloat(this.vat).toFixed(2);
    }
  }
}
</script>

<style>
  .my-dialog-card{
    width: 220px;
    height: auto;
  }
  </style>
