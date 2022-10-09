<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg">
    <q-card-actions align="center">
      <q-btn flat round color="green"
        class="text-h6"
        @click="dialog = true"
        label="Successful"/>
    </q-card-actions>

    <!--Dialog -->
    <q-dialog v-model="dialog" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="laptop" color="primary" text-color="white" />
            <span class="q-ml-sm">This laptop has  in process</span>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="negative" v-close-popup />
            <q-btn flat label="payment"
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
  name: "LaptopComponent",
  setup () {
    return {
      dialog:ref(false),
      payment:ref(false),
    }
  }
}
</script>

<style>
  </style>
