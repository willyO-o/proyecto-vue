<template>

  <li class="nav-item dropdown dropdown-hover mx-2">
    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center font-weight-semibold" id="dropdownMenuDocs"
      data-bs-toggle="dropdown" aria-expanded="false">

      <i class="fas fa-cart-shopping me-1"></i>

      <img src="/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
    </a>
    <ul
      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
      aria-labelledby="dropdownMenuDocs">
      <div class="d-none d-lg-block">
        <ul class="list-group">
          <li class="nav-item list-group-item border-0 p-0">
            <a class="dropdown-item py-2 ps-3 border-radius-md">

              <div v-for="item in carritoStore.carrito" :key="item.id" class="col-md-12 g-0">

                <div class="d-flex  py-1 position-relative">
                  <span @click="carritoStore.eliminarProducto(item)" class="position-absolute top-0 end-0 mt-2 me-2">
                    <i class="fas fa-trash-alt me-2 text-danger cursor-pointer"></i>
                  </span>
                  <div>
                    <img :src="primeraImagen(item.imagen)" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.titulo }}</h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ item.cantidad }} x {{ item.precio }} Bs. </p>
                  </div>
                </div>

              </div>


              <div v-show="carritoStore.carrito.length == 0" class=" text-center py-2">
                <h4>No hay Productos en el carrito</h4>
              </div>

            </a>
          </li>


        </ul>
      </div>

      <div class="row d-lg-none">


        <div v-for="item in carritoStore.carrito" :key="item.id" class="col-md-12 g-0">

          <div class="d-flex  py-1 position-relative">
            <span @click="carritoStore.eliminarProducto(item)" class="position-absolute top-0 end-0 mt-2 me-2">
              <i class="fas fa-trash-alt me-2 text-danger cursor-pointer"></i>
            </span>
            <div>
              <img :src="primeraImagen(item.imagen)" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">{{ item.titulo }}</h6>
              <p class="text-xs text-secondary mb-0">
                {{ item.cantidad }} x {{ item.precio }} Bs. 
                </p>
            </div>
          </div>

        </div>

        <div v-show="carritoStore.carrito.length == 0" class=" text-center py-2">
          <h4>No hay Productos en el carrito</h4>
        </div>


      </div>

    </ul>
  </li>


</template>


<script setup>

import { useCarritoStore } from '@/modules/public/stores/carritoStore';

import { primeraImagen } from '@/helpers/productoHeper.js'


const carritoStore = useCarritoStore();


</script>