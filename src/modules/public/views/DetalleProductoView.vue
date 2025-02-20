<template>

    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div v-for="(imagen, index) in convertirImagenes(producto.imagen)" :key="index"
                            class="carousel-item active">
                            <img class="d-block w-100" :src="imagen" alt="First slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Siguiente</span>
                    </a>
                </div>

            </div>



            <div class="col-md-6">

                <div class="card shadow-lg px-4">
                    <span class="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">
                        {{ producto.categoria }}
                    </span>
                    <div class="card-header  pt-4 pb-3">
                        <h2>
                            {{ producto.titulo }}
                        </h2>
                        <h3 class="font-weight-bold mt-2">
                            <small class="text-lg mb-auto">Bs.</small>
                            {{ producto.precio }}
                        </h3>
                    </div>

                    <div class="card-body text-lg-start  pt-0">
                        <div class="d-flex justify-content-lg-start  p-2">
                            <span class="ps-3">
                                Disponible: <b>{{ producto.stock }} unidades </b>
                            </span>
                        </div>

                        <div class="d-flex justify-content-lg-start  p-2">
                            <i class="material-symbols-rounded my-auto">done</i>
                            <span class="ps-3">20GB Cloud storage </span>
                        </div>

                        <div class="row">
                            <div class="col-md-7 col-lg-4 col-sm-5">
                                <div class="d-flex justify-content-lg-start  p-1">
                                    <button 
                                    @click="reducirCantidad"
                                    class="btn btn-dark">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <div class="input-group mx-2 input-group-dynamic mb-4">
                                        <input v-model="cantidad" type="text" class="form-control text-center">
                                    </div>
                                    <button 
                                        @click="aumentarCantidad"
                                    class="btn btn-dark">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                        
                        <div class="d-flex justify-content-between p-2">
                            <button 
                            @click="carritoStore.agregarProducto(producto,cantidad)"
                            :disabled="producto.stock <= carritoStore.extraerCantidad(producto)"
                            class="btn btn-icon bg-gradient-info  w-50" >
                                <i class="fas fa-shopping-cart me-2"></i>
                                Agregar al Carrito
                            </button>

                            <RouterLink to="/carrito" class="btn btn-secondary w-50  ms-4">
                                <i class="fas fa-credit-card me-2"></i>
                                Comprar
                            </RouterLink>
                        
                        </div>





                    </div>
                </div>

            </div>



            <div class="col-12 mt-4">
                <div class="card p-4">
                    <h2>Detalles del Producto</h2>
                    <p>
                        {{ producto.descripcion }}
                    </p>
                </div>
            </div>
        </div>
    </div>







</template>


<script setup>

import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

import { listarProductoId } from '@/services/productoServicio.js'

import { convertirImagenes } from '@/helpers/productoHeper.js'

import { useCarritoStore } from '@/modules/public/stores/carritoStore.js'

const route = useRoute()

const carritoStore = useCarritoStore()

const producto = ref({
    id: 0,
    titulo: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    categoria: '',
    imagen: '[]',
    categoria_id: 0,
    creado_el: '',

})


const cantidad = ref(1)


// console.log("id del producto:" ,route.params.id);

const cargarProducto = async () => {

    const resultado = await listarProductoId(route.params.id)

    producto.value = resultado

}

const aumentarCantidad = () => {

    if(cantidad.value<producto.value.stock){
        cantidad.value++
    }
}

const reducirCantidad = ()=>{

    if (cantidad.value>1){
        cantidad.value--
    }
}






onBeforeMount(() => {
    cargarProducto()
})




</script>