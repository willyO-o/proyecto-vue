<template>
    <h2 class="text-center">Nuestros Productos</h2>
    <section class="py-7">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-md-3">
                    <div class="input-group input-group-static mb-4">
                        <label for="exampleFormControlSelect1" class="ms-0">Seleccione Categoria</label>
                        
                        <select 
                        @change="cargarProductos"
                        v-model="categoriaSeleccionada" class="form-control" id="exampleFormControlSelect1">
                            <option selected value="0">Todos</option>
                            <option v-for="categoria in listaCategorias" :key="categoria.id" :value="categoria.id">
                                {{ categoria.categoria }}
                            </option>


                        </select>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">

                <TarjetaProducto v-for="producto in listaProductos" :key="producto.id" :producto="producto" />

            </div>
        </div>
    </section>
</template>


<script setup>

import { ref, onBeforeMount } from 'vue'

import { listarProductos } from '@/services/productoServicio.js'
import { listarCategorias } from '@/services/categoriaServicio.js'

import TarjetaProducto from '@/modules/public/components/TarjetaProducto.vue'

const listaProductos = ref([])

const listaCategorias = ref([])


const categoriaSeleccionada = ref(0)



const cargarProductos = async () => {

    const resultado = await listarProductos({ limit: 9, categoria_id: categoriaSeleccionada.value })


    listaProductos.value = resultado.data

}

const cargarCategorias = async () => {
    const resultado = await listarCategorias()
    listaCategorias.value = resultado.data

    console.log(listaCategorias.value);
}


onBeforeMount(() => {

    cargarProductos()
    cargarCategorias()


})

</script>