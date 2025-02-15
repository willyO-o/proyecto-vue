<template>

<Navegacion />

<Cabecera />
  <!-- -------- END HEADER 7 w/ text and video ------- -->
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <RouterView />
  </div>


<PiePagina />
  
</template>

<script setup>

import Navegacion from '@/modules/public/components/includes/Navegacion.vue'
import Cabecera from '@/modules/public/components/includes/Cabecera.vue'
import PiePagina from '@/modules/public/components/includes/PiePagina.vue'

</script>