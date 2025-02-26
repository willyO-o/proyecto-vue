<template>

    <div class="col-12">
        <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-dark shadow-dark 
                border-radius-lg pt-4 pb-3
                    d-flex justfy-content-between
                ">
                    <h6 class="text-white text-capitalize ps-3">
                        Listado de Productos
                    </h6>

                    <RouterLink class="btn btn-primary" to="/producto/crear">
                        Registrar Producto
                    </RouterLink>
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
                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs"
                                        data-toggle="tooltip" data-original-title="Edit user">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a href="javascript:;" class=" mx-2 text-secondary font-weight-bold text-xs"
                                        data-toggle="tooltip" data-original-title="Edit user">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs"
                                        data-toggle="tooltip" data-original-title="Edit user">
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


</template>

<script setup>

import { ref, onBeforeMount } from 'vue'

import { listarProductos } from '@/services/productoServicio'

import { primeraImagen } from '@/helpers/productoHeper'

import Paginador from '@/components/Paginador.vue';


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


onBeforeMount(() => {
    cargarPoductos();
})











</script>