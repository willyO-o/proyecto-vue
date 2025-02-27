<template>

  <!-- Navbar -->
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 p-2 start-0 end-0 mx-4">
          <div class="container-fluid px-0">
            <RouterLink class="navbar-brand font-weight-bolder ms-sm-3 text-sm" to="/" rel="tooltip"
              title="Designed and Coded by Creative Tim" data-placement="bottom">
              Mi Tienda
            </RouterLink>
            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>

            <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
              <ul class="navbar-nav navbar-nav-hover ms-auto">

                <li class="nav-item ms-lg-auto">
                  <RouterLink class="nav-link nav-link-icon me-2" to="/">

                    <p class="d-inline text-sm z-index-1 font-weight-semibold" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Star us on Github">Inicio</p>
                  </RouterLink>
                </li>
                <li class="nav-item ms-lg-auto">
                  <RouterLink class="nav-link nav-link-icon me-2" to="/tienda">

                    <p class="d-inline text-sm z-index-1 font-weight-semibold" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Star us on Github">Tienda</p>
                  </RouterLink>
                </li>
                <li class="nav-item ms-lg-auto">
                  <RouterLink class="nav-link nav-link-icon me-2" to="nosotros">

                    <p class="d-inline text-sm z-index-1 font-weight-semibold" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Star us on Github">Nosotros</p>
                  </RouterLink>
                </li>

                <li class="nav-item ms-lg-auto">
                  <RouterLink class="nav-link nav-link-icon me-2" to="contacto">
                    <p class="d-inline text-sm z-index-1 font-weight-semibold" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Star us on Github">Contacto</p>
                  </RouterLink>
                </li>



                <CarritoCompras />



                <li class="nav-item my-auto ms-3 ms-lg-0">

                  <RouterLink v-if="verificarLogin" to="/login" class="btn  bg-gradient-dark  mb-0 mt-2 mt-md-0">
                    <i class="fas fa-user me-1"></i>

                    Login
                  </RouterLink>
                  <RouterLink v-else to="/admin" class="btn  bg-gradient-dark  mb-0 mt-2 mt-md-0">
                    <i class="fas fa-user me-1"></i>
                    Administración

                  </RouterLink>




                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>


</template>


<script setup>
import { RouterLink } from 'vue-router';

import CarritoCompras from '@/modules/public/components/CarritoCompras.vue';


const verificarLogin = () => {

  const token = localStorage.getItem('token')
  const usuario = localStorage.getItem('usuario')
  const refreshToken = localStorage.getItem('refreshToken')
  if (!token || usuario || refreshToken) {
    return false
  } else {
    return true
  }

}






</script>