import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '', redirect: '/settings' },
  { path: '/settings', component: () => import('./pages/SettingsPage.vue') },
  { path: '/base64', component: () => import('./pages/Base64Page.vue') }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
