<template>

    <div class="container py-3">

        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Producto</th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Precio</th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Cantidad</th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Sub-total
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in carritoStore.carrito" :key="item.id">
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img :src="primeraImagen(item.imagen)"
                                                    class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">
                                                    {{ item.titulo }}
                                                </h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-normal mb-0">Bs.
                                            {{ item.precio }}
                                        </p>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-lg-start  p-0">
                                            <button @click="reducirCantidad(item)"
                                                class="btn btn-sm bm-0 px-3 btn-dark">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                            <div class="input-group mx-2 input-group-dynamic ">
                                                <input :value="item.cantidad" type="text"
                                                    class="form-control text-center">
                                            </div>
                                            <button @click="aumentarCantidad(item)" class="btn btn-sm px-3 btn-dark">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td class="align-middle text-center">
                                        <div class="d-flex align-items-center">
                                            <span class="me-2 text-xs">
                                                Bs. {{ item.precio * item.cantidad }}
                                            </span>
                                        </div>
                                    </td>

                                    <td class="align-middle">
                                        <i @click="carritoStore.eliminarProducto(item)"
                                            class=" fas fa-trash text-danger cursor-pointer"></i>
                                    </td>
                                </tr>


                                <tr v-if="carritoStore.carrito.length === 0">
                                    <td colspan="100%" class="py-4">
                                        <h5 class="text-center">
                                            No tienes productos en el Carrito de Compras
                                        </h5>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div class="col-md-4 my-md-0 my-4">
                <div class="card shadow-lg">
                    <span class="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">
                        Resumen de Compra
                    </span>
                    <div class="card-header text-center pt-4 pb-3">
                        <h2 class="font-weight-bold mt-2">
                            <small class="text-lg mb-auto">Bs</small>
                            {{ carritoStore.calcularTotal() }}
                        </h2>
                    </div>
                    <div class="card-body text-lg-start text-center pt-0">




                        <a href="javascript:;" class="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                            <i class="fas fa-credit-card me-2"></i>

                            Pagar
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>




</template>

<script setup>

import { useCarritoStore } from '@/modules/public/stores/carritoStore';

import { primeraImagen } from '@/helpers/productoHeper';

const carritoStore = useCarritoStore();


const reducirCantidad = (producto) => {

    if (producto.cantidad > 1) {

        carritoStore.agregarProducto(producto, -1);
    }
}

const aumentarCantidad = (producto) => {

    if (producto.cantidad < producto.stock) {
        carritoStore.agregarProducto(producto);
    }
}


</script>