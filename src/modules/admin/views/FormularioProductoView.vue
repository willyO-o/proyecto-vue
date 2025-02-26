<template>

    <div class="card">

        <div class="card-body">

            <h1>Registrar Nuevo Producto</h1>
            <Form :validation-schema="productoValidationSchema" @submit="enviarDatos">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group input-group-outline my-3">
                            <Field v-model="datosProducto.nombre" type="text" class="form-control" name="titulo"
                                placeholder="Nombre del Producto" />
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div class="input-group input-group-outline my-3">
                            <Field v-model="datosProducto.categoria_id" name="categoria_id" class="form-control"
                                as="select">
                                <option value="0">Seleccione una Categoria</option>
                                <option v-for="categoria in listadoCategorias" :key="categoria.id"
                                    :value="categoria.id">
                                    {{ categoria.categoria }}

                                </option>
                            </Field>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label class="form-label">Precio</label>

                        <div class="input-group input-group-outline">

                            <Field v-model="datosProducto.precio" name="precio" type="number" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Stock</label>

                        <div class="input-group input-group-outline">
                            <Field v-model="datosProducto.stock" name="stock" type="number" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label class="form-label">Descripcion@</label>
                        <div class="input-group input-group-outline">

                            <Field v-model="datosProducto.descripcion" name="descripcion" class="form-control"
                                as="textarea" placeholder="Descripcion del Producto" rows="4"></Field>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label class="form-label">Agregar Imagenene</label>
                        <div class="input-group input-group-outline">
                            <input type="text" class="form-control " placeholder="https://www.imagen.com/imagen.jpg"
                                v-model="urlImagen" />
                            <button @click="agregarImagen" :disabled="urlImagen == '' ? true : false"
                                class="btn btn-primary mb-0">
                                Agregar
                            </button>
                        </div>


                        <div class="card-group row">


                            <div 
                            v-for="(imagen, index) in imagenesSeleccionadas" :key="index"
                            class="col-xl-3 col-md-4 mb-xl-0 mb-4">
                                <div class="card card-blog card-plain">
                                    <div class="card-header p-0 m-2 position-relative">
                                        <span 
                                        @click="quitarImagen(index)"
                                        class="text-danger cursor-pointer position-absolute end-0 top-0 mt-2 me-2">
                                            <i class="fas fa-trash"></i>
                                        </span>
                                        <a class="d-block shadow-xl border-radius-xl">
                                            <img :src="imagen" alt="img-blur-shadow"
                                                class="img-fluid shadow border-radius-lg">
                                        </a>
                                    </div>

                                </div>
                            </div>


                            <div 
                                v-if="imagenesSeleccionadas.length == 0"
                            class="col-12 py-4">
                                <h4 class="text-center">No tienes Imagenes Seleccionadas</h4>
                            </div>

                        </div>




                    </div>


                </div>
            </Form>
        </div>

    </div>


</template>


<script setup>

import { ref, reactive, onBeforeMount } from 'vue';

import { Form, Field, ErrorMessage } from 'vee-validate';

import { listarCategorias } from '@/services/categoriaServicio'

import { productoValidationSchema } from '@/modules/admin/schemas/productoValidationSchema'

const datosProducto = reactive({
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    stock: 0,
    categoria_id: 0
})

const urlImagen = ref('')

const imagenesSeleccionadas = ref([])

const listadoCategorias = ref([])

const cargarCategorias = async () => {

    const resultado = await listarCategorias();

    listadoCategorias.value = resultado.data;

    console.log(listadoCategorias.value);
}



const enviarDatos = () => {

    alert('Enviando datos')
    console.log(datosProducto)
}

const agregarImagen = () => {

    if (!urlImagen.value) {
        return false
    }

    imagenesSeleccionadas.value.push(urlImagen.value)
    urlImagen.value = ''

}

const quitarImagen = (index) => {

    imagenesSeleccionadas.value.splice(index, 1)

}


onBeforeMount(() => {
    cargarCategorias();
})


</script>