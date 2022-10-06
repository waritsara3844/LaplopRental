<template>
   <q-page class="q-ml-md q-mr-md">
    <div class="row q-pa-md justify-center q-mt-md">
        <div class="q-gutter-sm q-mr-sm">
          <q-btn
            icon="storefront"
            outline
            rounded
            color="pink-5"
            label="Shop"
            @click="this.$router.push('/dashboard')"
          />
        </div>
        <div class="q-gutter-sm q-ml-sm">
          <q-btn
            icon="radio_button_checked"
            outline
            rounded
            color="pink-5"
            label="Check Status"
            @click="this.$router.push('/rental')"
          />
        </div>
        <div class="q-gutter-sm q-ml-sm">
          <q-btn
            icon="payments"
            outline
            rounded
            color="pink-5"
            label="Payment"
            @click="this.$router.push('/payment')"
          />
        </div>
      </div>
      <div class="row"> <!---How to set the col to 3 column--->
          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="yellow"
                class="text-h6"
                @click="dialog = true"
                label="Inprocess"/>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="green"
                class="text-h6"
                label="Successful"/>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="red"
                class="text-h6"
                label="Rented"/>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="red" class="text-h6" label="Rented"/>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="yellow" class="text-h6" label="Inprocess"/>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="green" class="text-h6" label="Successful"/>
              </q-card-actions>
            </q-card>
          </div>

      </div>
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

   </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name:"RentalLaptopPage",
  setup () {
    return {
      dialog:ref(false),
      payment:ref(false),
    }
  },
  methods:{

    }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
