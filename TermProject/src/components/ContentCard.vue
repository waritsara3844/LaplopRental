<template>
  <div class="col-4 q-pa-lg">
    <div class="row">
      <q-card class="my-card" @click="inception = true" style="width: 300px;">
      <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">

      <q-card-section class="">
        <div class="text-h6 row  justify-center q-mt-md">MACBOOK</div>
        <div class="text-subtitle2 row  justify-center ">Retal : 2000 baht</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

    </div>


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

        <div class="row q-pa-md justify-center q-mt-md">
        <q-card-section class="col-12 q-pt-md">
          <q-field borderless label="" stack-label>
            <template v-slot:control>
              <div><strong>Detail :</strong>  Macbook M2</div>

            </template>
          </q-field>
        </q-card-section>

        <q-card-section class="col-12 ">
          <q-field borderless label="" stack-label>
            <template v-slot:control>
              <div><strong>Prices for retal :</strong> 2000 baht</div>

            </template>
          </q-field>
        </q-card-section>

        <q-card-section class="col-12 ">
          <q-field borderless label="" stack-label>
            <template v-slot:control>
              <div><strong>Vat (7%):</strong> 140 baht</div>
            </template>
          </q-field>
        </q-card-section>

        <q-card-section class="col-12 ">
          <q-field borderless label="" stack-label>
            <template v-slot:control>
              <div><strong>Shipping fee:</strong> 100 baht</div>

            </template>
          </q-field>
        </q-card-section>

        <q-card-section class="col-12 ">
          <q-field borderless label="" stack-label>
            <template v-slot:control>
              <div><strong>Total:</strong> 2240 baht</div>

            </template>
          </q-field>
        </q-card-section>

        <q-card-actions align="center" class="q-pa-lg">
          <q-btn
            flat
            style="background: #ff0080; color: white; width: 300px"
            label="Confirm retail"
            @click="secondDialog = true"
          />
        </q-card-actions>
      </div>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card
        class="text-white row q-pa-md justify-center q-mt-md"
        style="width: 3000px"
      >
        <q-card-section>

          <div class="text-h6 col-8" style="color: #000000">
            Please fill out the information completely
          </div>
        </q-card-section>

        <q-card-section class="row q-pa-md justify-center">
          <q-form
            class="q-gutter-md col-10"
          >
            <q-input
              filled
              v-model="name"
              label="Your name :"
              hint="Name and surname"
            />

            <q-input
              filled
              type="number"
              v-model="phone"
              label="Your phone number :"
              hint="Enter your phone number"
            />
            <div class="row q-pa-md justify-center">
              <div class="q-pb-sm">Model: {{ model }}</div>

              <q-date v-model="model" range style="color: #000000" />
            </div>

            <div class="row q-pa-md justify-center">
              <q-btn
                label="Submit"
                type="submit"
                color="pink-6"
                @click="addValue()"
              />

              <q-btn
                class="q-ml-sm"
                outline
                style="color: #ff0080"
                label="Close"
                v-close-popup
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContentCard",
  data() {
    return {
      cancelEnabled: ref(false),
      slide: ref(1),
      inception: ref(false),
      secondDialog: ref(false),
      model: ref({ from: "2020/07/08", to: "2020/07/17" }),
      name: null,
      phone:  null,

    };
  },
  methods: {
    // onClick() {
    //   this.$emit("inception");
    // },
    addValue(){
      const data={
        name: this.name,
        phone: this.phone,
        // model: this.model,
      }
      console.log("kjdfkljdklfjrwioujftrioejgkrfjgiorgj ",data)
    },
  },
});
</script>

<style></style>
