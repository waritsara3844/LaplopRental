<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      <q-toolbar class="bg-pink-6 text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Laptop Rental System
        </q-toolbar-title>

        <q-btn push flat round icon="notifications" @click="this.$router.push('/rental')">
          <q-badge floating color="black" >22</q-badge>
        </q-btn>
        <q-btn flat round dense icon="account_circle" @click="this.$router.push('/')"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-pink-6 text-white"
    >
      <q-list>
        <q-item-label
          header
          class="text-white"
        >
          Navigation
        </q-item-label>

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
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Landing Page',
    icon: 'home',
    link:'/'
  },
  {
    title: 'Laptop',
    caption: 'Rental Laptop',
    icon: 'laptop',
    link:'/rental'
  },
  {
    title: 'Payment',
    caption: 'Payment',
    icon: 'payments',
    link:'/payment'
  },
]

export default defineComponent({
  name: 'UserLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
