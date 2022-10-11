<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      <q-toolbar class="grey-6 text-white">
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

        <q-btn push flat round icon="notifications" @click="this.$router.push('/dashboard')">
          <q-badge floating color="black" >22</q-badge>
        </q-btn>
        <q-btn flat round dense icon="account_circle" @click="this.$router.push('/login')"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
    >
      <q-list >
        <q-item-label class="text-grey-6 q-ma-sm"
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
    title: 'Dashboard',
    caption: 'Dashboard',
    icon: 'dashboard',
    link:'/dashboard'
  },
  {
    title: 'Manage',
    caption: 'Manage Request',
    icon: 'pending_actions',
    link:'/manage'
  },
  {
    title: "Admin",
    caption: "Admin",
    icon: "perm_identity",
    link: "/admin",
  },
]

export default defineComponent({
  name: 'AdminLayout',

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
