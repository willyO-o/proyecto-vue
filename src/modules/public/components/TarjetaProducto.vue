<template>
    <div class="col-lg-4  mt-lg-0 mt-4">
        <div class="card">

            <div class="card-header p-0  mt-2 mx-2 z-index-2 position-relative">

                <span class="badge bg-gradient-dark position-absolute top-0 end-0 mt-2 me-2">
                    {{ producto.categoria }}
                </span>


                <a class="d-block blur-shadow-image">
                    <img :src="primeraImagen(producto.imagen)" alt="img-colored-shadow"
                        class="img-fluid border-radius-lg">
                </a>
            </div>
            <div class="card-body text-center">
                <h5 class="font-weight-normal">
                    <RouterLink :to="{ name: 'DetalleProducto', params: { id: producto.id } }">
                        {{ producto.titulo }}
                    </RouterLink>
                </h5>
                <h5>
                    Bs. {{ producto.precio }}

                </h5>
                <p class="mb-0">
                    {{ recortarTexto(producto.descripcion, 80) }}
                </p>
                <button type="button" class="btn bg-gradient-info btn-sm mb-0 mt-3"
                    @click="carritoStore.agregarProducto(producto)"
                    v-if="Number(producto.stock) > carritoStore.extraerCantidad(producto)">
                    <i class="fa fa-shopping-cart me-2"></i>
                    Agregar al Carrito
                </button>

                <button v-else type="button" class="btn bg-gradient-info mt-3" disabled>

                    Sin Existencias
                </button>



            </div>
        </div>
    </div>

</template>


<script setup>

import { defineProps } from 'vue';
import { recortarTexto, primeraImagen } from '@/helpers/productoHeper.js'

import { useCarritoStore } from '@/modules/public/stores/carritoStore.js'


const carritoStore = useCarritoStore()

const props = defineProps({
    producto: Object
})

// console.log(props.producto);



</script>