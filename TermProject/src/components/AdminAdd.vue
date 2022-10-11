<template>
  <q-page-container>
    <div
      class="row q-pa-md justify-center q-mt-md"
      v-for="item in this.form"
      :key="item"
    >
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md d-flex flex-row"
      >
        <!-- <h3>Item : {{ index }} index : {{ index }}</h3> -->
        <!-- <div class="row">{{ index }}</div> -->
        <div class="row">
          <q-input
            class="q-ml-sm"
            filled
            v-model="item.name"
            label="Your name :"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            class="q-ml-sm"
            type="number"
            v-model="item.price"
            label="Input prices :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />

          <!-- <q-input
            filled
            class="q-ml-sm"
            type="number"
            v-model="item.vat"
            label="VAT(7%) :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          /> -->

          <q-input
            filled
            class="q-ml-sm"
            type="number"
            v-model="item.shipping"
            label="Shipping fee :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />

          <!-- <q-input
            filled
            class="q-ml-sm"
            type="number"
            v-model="item.total"
            label="Total :"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          /> -->
          <div>
            <q-btn
              icon="add"
              class="q-ml-sm"
              @click="addRow"
              style="height: 50px"
              color="teal-3"
            ></q-btn>
            <q-btn
              icon="delete"
              class="q-ml-sm"
              @click="removeRow"
              color="cyan-14"
              style="height: 50px"
            >
            </q-btn>
            <q-btn
              class="q-ml-sm"
              color="cyan-10"
              @click="clickSubmit"
              label="submit"
              style="height: 50px"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page-container>
</template>

<script>
import { reactive } from "vue";
import { useCounterStore } from "../stores/database";
import axios from "axios";
export default {
  name: "AdminAdd",
  methods: {
    clickSubmit(total) {
      // this.total = price + price * (7 / 100) + shipping;
      console.log(this.form);
      // return this.total;
      this.total = this.price + this.price * (7 / 100) + this.shipping;
      return this.total;
    },
    addRow() {
      this.$emit("adds");
      this.form.push({ name: "", price: 0, vat: "", shipping: "", total: "" });
    },
    removeRow(index) {
      if (this.form.length > 1) {
        this.form.splice(index, 1);
      }
      this.$emit("rems");
    },
  },
  data() {
    return {
      row: [],
      form: [
        {
          name: "",
          price: 0,
          vat: "",
          shipping: "",
          total: "",
        },
      ],
    };
  },
  setup() {
    return {
      username: "JUAY",
    };
  },
};
</script>

<style></style>
