
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/LoginPage.vue') },
      { path: '/register', component: () => import('pages/RegisterPage.vue') },
      // { path: '/dashboard', component: () => import('pages/DashboardPage.vue') },
      // { path: '/payment', component: () => import('pages/PaymentPage.vue') },


    ]
  },

  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/rental', component: () => import('pages/RentalLaptopPage.vue') },
      { path: '/payment', component: () => import('pages/PaymentPage.vue') },
      { path: '/dashboard', component: () => import('pages/DashboardPage.vue') }

    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/register', component: () => import('pages/RegisterPage.vue') },
      { path: '/rental', component: () => import('pages/RentalLaptopPage.vue') },
      { path: '/dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: '/payment', component: () => import('pages/PaymentPage.vue') },
      { path: '/manage', component: () => import('pages/ManagePage.vue') },
      { path: '/admin', component: () => import('pages/AdminManagePage.vue') },
      { path: '/sum', component: () => import('pages/AllSummary.vue') },



    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
