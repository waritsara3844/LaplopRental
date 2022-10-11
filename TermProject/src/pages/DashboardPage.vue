<template>
  <q-layout>
    <q-page-container>
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
      <div class="row">
        <ContentCard></ContentCard>
        <!-- <DynamicForm> HI </DynamicForm> -->
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import ContentCard from "../components/ContentCard.vue";


// import DynamicForm from "../components/DynamicForm.vue";
export default {
  name: "DashboardPage",
  components: { ContentCard },
  setup() {
    return {

      cancelEnabled: ref(false),
      slide: ref(1),
      inception: ref(false),
      secondDialog: ref(false),
      secondDialog2: ref(false),
      secondDialog3: ref(false),
      model: ref({ from: "2020/07/08", to: "2020/07/17" }),
    };
  },
  data() {
    return {
      name: "",
      num1: "",
      num2: "",
    };
  },
  methods: {
    // test() {
    //   console.log(this.$refs.passing.form);
    // },
  },
};
</script>

<style></style>
