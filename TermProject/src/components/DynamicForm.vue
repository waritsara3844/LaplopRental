<template>
  <div class="col-4 q-pa-sm">
    <!-- <q-btn label="send item to admin" @click="getItem(item)"></q-btn> -->
    <q-responsive :ratio="1">
      <q-btn class="column" @click="editdialog = true">
        <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <div>Ratio 1:1</div>
      </q-btn>
    </q-responsive>

    <q-dialog v-model="editdialog" persistent>
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
              img-src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </q-carousel>
        </q-responsive>

        <q-card-section class="q-pa-lg">
          <q-input
            filled
            v-model="item.name"
            label="Your name :"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pa-lg">
          <q-input
            filled
            type="number"
            v-model="item.price"
            label="Input prices :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pa-lg">
          <q-input
            filled
            type="number"
            v-model="item.vat"
            label="VAT(7%) :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pa-lg">
          <q-input
            filled
            type="number"
            v-model="item.shipping"
            label="Shipping fee :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />
        </q-card-section>
        <q-card-section class="q-pa-lg">
          <q-input
            filled
            type="number"
            v-model="item.shipping"
            label="Shipping fee :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />
        </q-card-section>

        <q-card-actions align="center" class="q-pa-lg">
          <q-btn
            flat
            style="background: #ff0080; color: white; width: 300px"
            label="Confirm Edit"
            @click="getItem(item)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DynamicForm",
  props: { getItem: Function },
  setup() {},
  data() {
    return {
      cancelEnabled: ref(false),
      slide: ref(1),
      editdialog: ref(false),
      form: reactive([
        {
          name: "",
          price: 0,
          vat: 0,
          shipping: 0,
        },
      ]),
      item: {
        name: "",
        price: "",
        vat: "",
        shipping: "",
      },
      username: "JUAY",
    };
  },
  method: {},
});
</script>

<style></style>
