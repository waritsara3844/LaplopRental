<template>
   <q-page-container class="q-pa-md">
    <div class="row q-pa-md justify-center">
        <div class="q-gutter-sm q-mr-sm">
          <q-btn
            icon="storefront"
            outline
            rounded
            color="pink-5"
            label="Shop"
          />
        </div>
        <div class="q-gutter-sm q-ml-sm">
          <q-btn
            icon="radio_button_checked"
            outline
            rounded
            color="pink-5"
            label="Check Status"
          />
        </div>
      </div>
      <div class="row"> <!---How to set the col to 3 column--->
          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="yellow" class="text-h6">Inprocess</q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="green" class="text-h6">Successful</q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="red" class="text-h6">Rented</q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="red" class="text-h6">Rented</q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="yellow" class="text-h6">Inprocess</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-4 q-pa-md">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="center">
                <q-btn flat round color="green" class="text-h6">Successful</q-btn>
              </q-card-actions>
            </q-card>
          </div>

      </div>

   </q-page-container>
</template>

<script>
export default {
  name:"RentalLaptopPage",
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
