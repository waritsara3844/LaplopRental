<template>
   <q-page padding>
    <div class="flex flex-center q-mt-md" >
      <div class="q-gutter-lg">
        <q-btn icon="shopping_cart" color="pink-6" label="Shop"  size=30px />
        <q-btn icon="dashboard" color="pink-6" label="Status" size=30px />
      </div>
   </div>
   <div class="row q-pa-md q-gutter-md">
      <div class="columns q-gutter-md">
        <q-card class="my-card">
          <q-card-section class="bg-grey-6 text-white">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat>Action 1</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="columns q-gutter-md">
        <q-card class="my-card">
          <q-card-section class="bg-grey-6 text-white">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat>Action 1</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class=" columns q-gutter-md">
        <q-card class="my-card">
          <q-card-section class="bg-grey-6 text-white">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat>Action 1</q-btn>
          </q-card-actions>
        </q-card>
      </div>
  </div>
  
   </q-page>
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
