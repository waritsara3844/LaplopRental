<template>
  <q-layout>
    <q-page-container>


      <AdminAdd ref="passing" @adds="item++" @rems="item--"> </AdminAdd>
      <!-- item : {{ item }} -->
      <div
        class="row q-pa-md justify-center q-mt-md"
        v-for="(key, index) in item"
        :key="index"
      >
        <div class="col-4 q-pa-sm">
          <q-responsive :ratio="1">
            <q-btn
              class="column"
              @click="
                inception = true;
                formdata = this.$refs.passing.form[index];
              "
            >
              <q-img src="https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
              <div>Product number : {{ index + 1 }}</div>
            </q-btn>
          </q-responsive>

          <q-dialog v-model="inception" persistent>
            <q-card
              class="q-pa-md"
              align="center"
              style="width: 3000px; height: 3000px"
            >
              <div class="q-pt-md" align="right">
                <q-btn flat icon="close" v-close-popup />
              </div>
              <q-card-section class="row justify-center" style="height: 120px">
                <div class="text-h6">About detail</div>
              </q-card-section>
              <q-responsive :ratio="1" style="height: 380px; max-width: 400px">
                <q-carousel animated v-model="slide" arrows navigation infinite>
                  <q-carousel-slide
              :name="1"
              img-src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://images.unsplash.com/flagged/photo-1581390476491-1b12adda69d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </q-carousel>
              </q-responsive>

              <q-card-section class="q-pt-none">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Model :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ formdata.name }}
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Prices :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ formdata.price }}
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Vat (7%):</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ parseFloat(formdata.price * (7 / 100)).toFixed(2) }}
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Shipping fee:</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ parseFloat(formdata.shipping).toFixed(2) }}
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Total fee:</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{}}
                    </div>
                  </template>
                </q-field>
              </q-card-section>
            </q-card>
          </q-dialog>
          <AdminDialog />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import DynamicForm from "../components/DynamicForm.vue";
import AdminAdd from "../components/AdminAdd.vue";
import ContentCard from "../components/ContentCard.vue";
import { ref } from "vue";
import { reactive } from "vue";

export default {
  name: "AdminManagePage",
  components: { AdminAdd },

  methods: {
    getUsername(username) {
      alert("success" + username);
    },
    onAdd(value) {
      this.form = value;
      alert("success" + this.form);
    },
    addDialog() {
      this.$emit("onAdd");
      console.log(this.row);
      console.log("Hi");
    },
    test() {
      console.log(this.$refs.passing.form);
    },
    total(formdata) {
      this.finalTotal =
        this.formdata.price +
        this.formdata.price * (7 / 100) +
        this.formdata.shipping;
      return this.finalTotal;
    },
    getInfo(object) {
      this.sum = object;
    },
  },

  data() {
    return {
      cancelEnabled: ref(false),
      slide: ref(1),
      inception: ref(false),
      secondDialog: ref(false),
      secondDialog2: ref(false),
      secondDialog3: ref(false),
      finalTotal: null,
      sum: "",
      model: ref({ from: "2020/07/08", to: "2020/07/17" }),
      formdata: {},
      item: 1,
    };
  },
  setup() {
    const name = "";
    const form = reactive([
      {
        name: "",
        price: 0,
        vat: "",
        shipping: "",
        total: "",
      },
    ]);
    const addRow = () => {
      form.push({ name: "", price: 0, vat: "", shipping: "", total: "" });
    };
    const removeRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
    return {
      username: "JUAY",
      form,
      addRow,
      removeRow,
    };
  },
  // created() {
  //   //this.formdata = this.$refs.passing.form;
  // },
};
</script>

<style></style>
