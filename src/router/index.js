import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // nivel 1 Publico
    {
      path: '/',
      name: 'PublicLayout',
      component: () => import('@/modules/public/views/PublicLayout.vue'),
      children: [
        // nivel 2 Publico
        {
          path: '',
          name: 'Inicio',
          component: () => import('@/modules/public/views/InicioView.vue')
        },
        {
          path: 'detalle-producto/:id',
          name: 'DetalleProducto',
          component: () => import('@/modules/public/views/DetalleProductoView.vue')
        }
      ]
    },

    // nivel 1 Privado Admin
    {
      path:'/admin',
      name: 'AdminLayout',
      component: () => import('@/modules/admin/views/AdminLayout.vue'),
      children:[
        // nivel 2 Privado Admin
        {
          path: '',
          name: 'PanelPrincipal',
          component: () => import('@/modules/admin/views/PanelPrincipal.vue'),
        }
      ]

    }

  ]


})

export default router;





