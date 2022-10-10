<template>
  <q-card class="my-card q-ma-md grid-container" v-for="i in data.getAccRequest" :key="i">
    <!-- <div>{{data.getAccRequest.indexOf(i)}}</div> -->
    <img src="https://cdn.quasar.dev/img/mountains.jpg">
    <q-card-actions align="center">
      <q-btn flat round color="green"
        class="text-h6"
        @click="opendDialog(data.getAccRequest.indexOf(i))"
        label="Successful"/>
    </q-card-actions>
  </q-card>
    <!--Dialog -->
    <q-dialog v-model="dialog" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="laptop" color="primary" text-color="white" />
            <span class="q-ml-sm">This Laptop is ready to payment</span>
            <span class="q-ml-sm">{{data.acceptedRequest.name}}</span>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="negative" @click=" cancelStatus(data.acceptedRequest.indexOf(dialogAccept))"/>
            <q-btn flat label="payment"
            color="primary"
            @click="this.$router.push('/payment')"
            v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>


</template>

<script>
import { ref } from "vue"
import { useLoginUserStore} from '../stores/database';
export default {
  name: "LaptopComponent",
  setup () {
    return {
      dialog:ref(false),
      payment:ref(false),
    }
  },
  data(){
    return{
      data: useLoginUserStore(),
      dialogAccept:"",
    }
  },
  methods:{
    opendDialog(i){
      this.dialogAccept = this.data.acceptedRequest[i];
      this.dialog = true;
    },
    cancelStatus(index){
      this.data.acceptedRequest.slice(index);
      this.dialog = false;
      console.log(index);
    },
  },
}
</script>

<style>
.my-card{
  width: 250px;
  height: auto;
}
  </style>
