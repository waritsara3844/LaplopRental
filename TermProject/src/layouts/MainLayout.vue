<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-pink-6">
      <q-toolbar class="q-pt-xl">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title><strong>Rental System</strong></q-toolbar-title>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "Landing Page",
    icon: "home",
    link: "/",
  },
  {
    title: "Register",
    caption: "Register Page",
    icon: "home",
    link: "/",
  },
  {
    title: "Laptop",
    caption: "Rental Laptop",
    icon: "laptop",
    link: "/rental",
  },
  {
    title: "Dashboard",
    caption: "Dashboard",
    icon: "dashboard",
    link: "http://localhost:8080/#/dashboard",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
