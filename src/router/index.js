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
        },
        {
          path: 'carrito',
          name: 'Carrito',
          component: () => import('@/modules/public/views/CarritoView.vue')
        },
        {
          path: '/tienda',
          name: 'Tienda',
          component: () => import('@/modules/public/views/TiendaView.vue')
        },
        {
          path: '/nosotros',
          name: 'Nosotros',
          component: () => import('@/modules/public/views/NosotrosView.vue')
        },
        {
          path: '/contacto',
          name: 'Contacto',
          component: () => import('@/modules/public/views/ContactoView.vue')
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/modules/public/views/LoginView.vue')
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
        },
        {
          path: 'producto',
          name: 'Producto',
          component: () => import('@/modules/admin/views/ProductoView.vue')
        },
        {
          path: '/producto/crear',
          name: 'CrearProducto',
          component: () => import('@/modules/admin/views/FormularioProductoView.vue')
        }
      ]

    }

  ]


})

export default router;





