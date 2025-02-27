<template>

    <div class="col-12">
        <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-dark shadow-dark 
                border-radius-lg pt-4 pb-3
                    d-flex justfy-content-between">
                    <h6 class="text-white text-capitalize ps-3">
                        Listado de Productos
                    </h6>

                    <div>
                        <RouterLink class="btn btn-primary" to="/producto/crear">
                            Registrar Producto
                        </RouterLink>

                    </div>

                </div>
            </div>
            <div class="card-body px-0 pb-2">
                <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Nombre del Producto
                                </th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                    Precio
                                </th>
                                <th
                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Stock
                                </th>

                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    F. Creación
                                </th>
                                <th class="text-secondary opacity-7"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="producto in listadoProductos" :key="producto.id">
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div>
                                            <img :src="primeraImagen(producto.imagen)"
                                                class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                                        </div>
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{ producto.titulo }}</h6>
                                            <p class="text-xs text-secondary mb-0">{{ producto.categoria }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">
                                        {{ producto.precio }} Bs.
                                    </p>
                                </td>
                                <td class="align-middle text-center text-sm">
                                    <span class="badge badge-sm "
                                        :class="producto.stock > 3 ? 'bg-gradient-success' : 'bg-gradient-danger'">
                                        {{ producto.stock }}
                                    </span>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-xs font-weight-bold">
                                        {{ producto.creado_el }}
                                    </span>
                                </td>
                                <td class="align-middle">
                                    <a @click="detallesProducto(producto.id)" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" href="javascript:;"
                                        class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                        data-original-title="Edit user">
                                        <i class="fas fa-eye"></i>
                                    </a>

                                    <RouterLink :to="`/producto/editar/${producto.id}`"
                                        class=" mx-2 text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                        data-original-title="Edit user">
                                        <i class="fas fa-edit"></i>
                                    </RouterLink>

                                    <a @click="eliminarProducto(producto.id)" href="javascript:;"
                                        class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                        data-original-title="Edit user">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                    <div>
                        <div>
                            <p class="ms-2">
                                Mostrando {{ parametros.limit * (parametros.page - 1) + 1 }} a {{ parametros.limit *
                                    parametros.page }} registros de un total de {{ totalProductos }} productos
                            </p>
                        </div>

                        <Paginador :totalItems="totalProductos" :cantidadItems="parametros.limit"
                            :paginaActiva="parametros.page" @cambiar-pagina="cargarPoductos" />

                    </div>

                </div>
            </div>
        </div>
    </div>


    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn bg-gradient-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <div class="card shadow">

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div v-for="(imagen, index) in convertirImagenes(datosProducto.imagen)" :key="index"
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

                        <span class="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">
                            {{ datosProducto.categoria }}
                        </span>
                        <div class="card-header text-center pt-4 pb-3">
                            <h1 class="font-weight-bold mt-2">
                                <small class="text-lg mb-auto">
                                    {{ datosProducto.titulo }}
                                </small>

                            </h1>
                        </div>
                        <div class="card-body text-lg-start pt-0">
                            <div class="d-flex justify-content-lg-start  p-2">
                                <i class="material-symbols-rounded my-auto">done</i>
                                <span class="ps-3">Precio: {{ datosProducto.precio }} Bs.</span>
                            </div>

                            <div class="d-flex justify-content-lg-start  p-2">
                                <i class="material-symbols-rounded my-auto">done</i>
                                <span class="ps-3">Stock Diponible: {{ datosProducto.stock }} </span>
                            </div>

                            <div class="p-2">
                                <h5 for="">Detalles:</h5>
                                <span class="ps-3">{{ datosProducto.descripcion }} </span>
                            </div>

                            <div class="d-flex justify-content-lg-start  p-2">
                                <i class="fas fa-calendar mt-1"> </i>
                                <span class="ps-3">Fecha Registro: {{ datosProducto.creado_el }} </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>

import { ref, onBeforeMount } from 'vue'

import { listarProductos, eliminarProductoId, listarProductoId } from '@/services/productoServicio'

import { primeraImagen } from '@/helpers/productoHeper'
import { convertirImagenes } from '@/helpers/productoHeper.js'
import Paginador from '@/components/Paginador.vue';

import Swal from 'sweetalert2';


const datosProducto = ref({
    titulo: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    stock: 0,
    categoria_id: 0,
    categoria: '',
    creado_el: '',
    id: 0
})

const listadoProductos = ref([]);

const parametros = ref({
    limit: 10,
    page: 1,
})

const totalProductos = ref(0);


const cargarPoductos = async (paginaActual) => {

    parametros.value.page = paginaActual || 1;

    const respuesta = await listarProductos(parametros.value);

    listadoProductos.value = respuesta.data;
    totalProductos.value = respuesta.total;
}


const detallesProducto = async (idProducto) => {

    const resultado = await listarProductoId(idProducto);

    datosProducto.value = resultado;
}



const eliminarProducto = (idProducto) => {


    Swal.fire({
        title: "Esta usted Reguro?",
        text: "Desea Eliminar El producto ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {


            eliminarProductoId(idProducto)
                .then(() => {

                    Swal.fire({
                        title: "Producto Eliminado!",
                        text: "El producto fue eliminado correctamente.",
                        icon: "success"
                    });

                    cargarPoductos();
                })
                .catch(() => {
                    Swal.fire({
                        title: "Error!",
                        text: "Ocurrio un error, verifique e intente nuevamente.",
                        icon: "error"
                    });
                })

        }
    });

}


onBeforeMount(() => {
    cargarPoductos();


})











</script>