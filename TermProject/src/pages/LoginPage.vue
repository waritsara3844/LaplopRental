<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-pink-2">
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-img
                    src="icons/Laptops.png"
                    spinner-color="white"
                  ></q-img>
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="q-pa-md">
                    <div
                      class="text-h6 q-pb-md text-pink-5 text-center text-weight-bolder"   >
                      Login
                    </div>
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="name"
                        label="Username"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type Username',
                        ]"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val !== null && val !== '') ||
                            'Please type your password',]"
                      />

                      <div>
                        <q-btn label="Login" type="submit" color="pink" @click="onSubmit()" />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="pink"
                          flat
                          class="q-ml-sm"
                          @click="onReset()"
                        />
                      </div>
                    </q-form>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      loginId:[
        {
          name: 'Admin',
          password: '12345**'
        },
        {
          name: 'User',
          password: '123456'
        },
      ]
    };
  },

  methods: {

    onSubmit() {
      for(var index = 0; index < this.loginId.length ; index++) {
        this.name == this.loginId[index].name && this.password == this.loginId[index].password ? this.$router.push('/rental') : null
      }

  },
    onReset() {
      this.name = null;
      this.password = null;
    },
  },
};
</script>
