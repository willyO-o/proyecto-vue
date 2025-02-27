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
          component: () => import('@/modules/public/views/LoginView.vue'),
          beforeEnter: (to,from,next) =>{
            const token = localStorage.getItem('token')
            const usuario = localStorage.getItem('usuario')
            const refreshToken = localStorage.getItem('refreshToken')
            if (token && usuario && refreshToken) {
              next('/admin')
            } else {
              next()
            }
          }
        }
      ]
    },

    // nivel 1 Privado Admin
    {
      path: '/admin',
      name: 'AdminLayout',
      component: () => import('@/modules/admin/views/AdminLayout.vue'),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        const usuario = localStorage.getItem('usuario')
        const refreshToken = localStorage.getItem('refreshToken')
        if (!token || !usuario || !refreshToken) {
          next('/login')
        } else {
          next()
        }
      },
      children: [
        // nivel 2 Privado Admin
        {
          path: '',
          name: 'PanelPrincipal',
          component: () => import('@/modules/admin/views/PanelPrincipal.vue'),
          meta: {
            requiresAuth: true,
            roles: ['admin', 'superdadmin']
          }
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
        },
        {
          path: '/producto/editar/:id',
          name: 'EditarProducto',
          component: () => import('@/modules/admin/views/FormularioProductoView.vue')
        },
        {
          path: 'categoria',
          name: 'Categoria',
          component: () => import('@/modules/admin/views/CategoriaView.vue')
        },
        {
          path: 'usuario',
          name: 'Usuario',
          component: () => import('@/modules/admin/views/UsuarioView.vue')
        },
        {
          path: 'perfil',
          name: 'PerfilUsuario',
          component: () => import('@/modules/admin/views/PerfilUsuarioView.vue')
        }


      ]

    }

  ]


})


// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
//   const usuario = localStorage.getItem('usuario')
//   const refreshToken = localStorage.getItem('refreshToken')
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!token || !usuario || !refreshToken) {
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })


export default router;





