<template>
    <div class="pagination-container justify-content-center">
        <ul class="pagination pagination-secondary">

            <li 
            :class="paginaActiva == 1 ? 'disabled' : ''"
            class="page-item">
                <a class="page-link" 
                href="javascript:;" 
                aria-label="Previous"
                @click="paginar(paginaActiva -1)"
                >
                    <span aria-hidden="true"><span class="material-symbols-rounded">
                            keyboard_arrow_left
                        </span></span>
                </a>
            </li>

            <li v-for="pagina in nroPaginas" :key="pagina" class="page-item" 
            
            :class="pagina == paginaActiva ? 'active disabled' : ''">
                <a :class="pagina == paginaActiva ? 'text-white' : ''" 
                @click="paginar(pagina)"
                class="page-link" href="javascript:;">
                    {{ pagina }}
                </a>
            </li>


            <li 
            :class="paginaActiva == nroPaginas ? 'disabled' : ''"
            class="page-item">
                <a 
                @click="paginar(paginaActiva+1)"
                class="page-link" href="javascript:;" aria-label="Next">
                    <span aria-hidden="true"><span class="material-symbols-rounded">
                            keyboard_arrow_right
                        </span></span>
                </a>
            </li>
        </ul>
    </div>

</template>

<script setup>

import { defineProps, computed, defineEmits } from 'vue';

const props = defineProps({
    totalItems: Number,
    cantidadItems: Number,
    paginaActiva: Number

})

const emit = defineEmits(['cambiar-pagina'])


const nroPaginas = computed(() => {
    return Math.ceil(props.totalItems / props.cantidadItems)
})


const paginar = (pagina) => {

    if (pagina < 1 || pagina > nroPaginas.value) {
        return false
    }


    emit('cambiar-pagina', pagina)

}


</script>
