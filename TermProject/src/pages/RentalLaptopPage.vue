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
    <div class="row flex-center">
      <!---How to set the col to 3 column--->
      <LaptopComponent />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import LaptopComponent from "../components/LaptopComponent.vue";
import { useLoginUserStore } from "../stores/database";
export default {
  name: "RentalLaptopPage",
  components: {
    LaptopComponent,
  },
  setup() {
    return {
      dialog: ref(false),
    };
  },
  data() {
    return {
      data: useLoginUserStore(),
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
