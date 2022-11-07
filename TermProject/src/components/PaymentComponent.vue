<!-- eslint-disable vue/valid-v-model -->
<template>
  <div>
    <div class="row">
      <q-card class="my-card q-mr-md " v-for="pay in pays" :key="pay" style="width: 300px;">
        <img src="https://plus.unsplash.com/premium_photo-1663931932637-e30332303b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  />
        <q-card-actions align="center" class="q-mb-md">
          <q-btn
            flat
            round
            color="primary"
            class="text-h6"
            @click="getInfo(pay)"
            label="Payment"
          />
        </q-card-actions>
      </q-card>
      <!--Dialog -->
      <q-dialog v-model="dialog" persistent>
        <q-card class="my-dialog-card">
          <q-card-section class="row">
            <span class="text-h6">Calculate Total</span>
          </q-card-section>
          <q-separator />

          <q-card-section class="col">
            <div>Name : {{ infoPay.username }}</div>
            <div>Date : {{ infoPay.date }}</div>
            <div>Price : {{ infoPay.price }}</div>
            <div>Vat 7% : {{ vatPrice(infoPay.price) }}</div>
            <div>Total Price : {{ totalPrice(infoPay.price) }}</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="negative" @click="removeInfo(infoPay.id)" v-close-popup />
            <q-btn
              flat
              label="Comfirm"
              color="primary"
              @click="removeInfo(infoPay.id)"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PaymentComponent",
  setup() {
    return {
      dialog: ref(false),
      payment: ref(false),
    };
  },
  data() {
    return {
      total: "",
      finalTotal: null,
      vat: null,
      infoPay: "",
      pays: [
        {
          id: 1,
          username: "Warits",
          price: 6000,
          date: "09/30/2022 to 10/30/2022",
        },
        {
          id: 2,
          username: "Puntira",
          price: 2500,
          date: "09/28/2022 to 10/15/2022",
        },
        {
          id: 3,
          username: "Motana",
          price: 7300,
          date: "10/7/2022 to 11/30/2022",
        },
      ],
    };
  },
  methods: {
    totalPrice(price) {
      this.finalTotal = price + price * (7 / 100);
      // console.log(this.finalTotal);
      return this.finalTotal;
    },
    vatPrice(price) {
      this.vat = price * (7 / 100);
      return parseFloat(this.vat).toFixed(2);
    },
    getInfo(object) {
      this.dialog = true;
      this.infoPay = object;
    },
    removeInfo(id){
      this.pays = this.pays.filter((i) => i.id != id)
    }
  },
};
</script>

<style>
.my-dialog-card {
  width: 250px;
  height:auto;
}
</style>
