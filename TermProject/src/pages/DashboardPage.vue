<template>
  <q-layout>
    <q-page-container>
      <div class="row q-pa-xl justify-center">
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
      <div class="row">
        <div class="col-4 q-pa-sm">
          <q-responsive :ratio="1">
            <q-btn class="column" @click="inception = true">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <div>Ratio 1:1</div>
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

              <q-card-section class="q-pt-none">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Detail :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Prices :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Vat (7%):</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Shipping fee:</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
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
            </q-card>
          </q-dialog>

          <q-dialog
            v-model="secondDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="bg-teal text-white" style="width: 300px">
              <q-card-section>
                <div class="text-h6">Persistent</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    filled
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    filled
                    type="number"
                    v-model="age"
                    label="Your age *"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || 'Please type your age',
                      (val) =>
                        (val > 0 && val < 100) || 'Please type a real age',
                    ]"
                  />

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />

                  <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
              </q-card-section>

              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="OK" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

        <!-- new card -->
        <div class="col-4 q-pa-sm">
          <q-responsive :ratio="1">
            <q-btn class="column" @click="inception = true">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <div>Ratio 1:1</div>
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

              <q-card-section class="q-pt-none">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Detail :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Prices :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Vat (7%):</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Shipping fee:</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
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
            </q-card>
          </q-dialog>

          <q-dialog
            v-model="secondDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="bg-teal text-white" style="width: 300px">
              <q-card-section>
                <div class="text-h6">Persistent</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    filled
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    filled
                    type="number"
                    v-model="age"
                    label="Your age *"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || 'Please type your age',
                      (val) =>
                        (val > 0 && val < 100) || 'Please type a real age',
                    ]"
                  />

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />

                  <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
              </q-card-section>

              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="OK" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <!-- new card -->
        <!-- new card -->
        <div class="col-4 q-pa-sm">
          <q-responsive :ratio="1">
            <q-btn class="column" @click="inception = true">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <div>Ratio 1:1</div>
            </q-btn>
          </q-responsive>

          <q-dialog v-model="inception" persistent>
            <q-card
              class="q-pa-md"
              align="center"
              style="width: 300px; height: 300px"
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

              <q-card-section class="q-pt-none">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Detail :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Prices :</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Vat (7%):</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section class="row items-center">
                <q-field borderless label="" stack-label>
                  <template v-slot:control>
                    <div><strong>Shipping fee:</strong></div>
                    <div class="self-center full-width no-outline" tabindex="0">
                      Field content
                    </div>
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
            </q-card>
          </q-dialog>

          <q-dialog
            v-model="secondDialog"
            persistent
            transition-show="scale"
            transition-hide="scale"
          >
            <q-card class="bg-teal text-white" style="width: 300px">
              <q-card-section>
                <div class="text-h6">Persistent</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    filled
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    filled
                    type="number"
                    v-model="age"
                    label="Your age *"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || 'Please type your age',
                      (val) =>
                        (val > 0 && val < 100) || 'Please type a real age',
                    ]"
                  />

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />

                  <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
              </q-card-section>

              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="OK" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <!-- new card -->
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DashboardPage",

  setup() {
    return {
      dialog: ref(false),
      cancelEnabled: ref(false),
      slide: ref(1),
      inception: ref(false),
      secondDialog: ref(false),
    };
  },
};
</script>

<style></style>
