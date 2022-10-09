<!-- eslint-disable vue/valid-v-model -->
<template>
  <div class="row  ">
    <div class="col">
      <q-card class="my-card" v-for="pay in pays" :key='pay'>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">
        <q-card-actions align="center">
          <q-btn flat round color="primary"
            class="text-h6"
            @click="dialog = true"
            label="Payment"/>
        </q-card-actions>

        <!--Dialog -->
        <q-dialog v-model="dialog" persistent>
            <q-card class="my-dialog-card">
              <q-card-section class="row">
                <span class="text-h6" >Calculate Total</span>
              </q-card-section>
              <q-separator />

              <q-card-section class="col">
                  <div>Name : {{ pay.username }}</div>
                  <div>Date : {{ pay.date }}</div>
                  <div>Price : {{ pay.price }}</div>
                  <div>Vat 7% : {{vatPrice(pay.price)}}</div>
                  <div>Total Price : {{totalPrice(pay.price)}}</div>
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

    </div>
  </div>
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
      pays:[
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
    width: 250px;
    height: auto;
  }
  </style>
