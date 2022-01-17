
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'form', component: () => import('src/pages/Cachipun.vue') },

      { path: 'cachipun', component: () => import('pages/Cachipun.vue') },
      { path: 'gato', component: () => import('pages/Gato.vue') },
      { path: 'puzzle', component: () => import('pages/Puzzle.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
