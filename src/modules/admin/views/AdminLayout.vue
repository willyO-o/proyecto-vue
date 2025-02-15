<template>
  

<NavegacionLateral />


  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    
    
    <!-- Navbar -->

    <Cabecera/>

    <!-- End Navbar -->
    <div class="container-fluid py-2">
      <div class="row">

        <RouterView />
   
      </div>


    <PiePaginaAdmin/>
   
    </div>
  </main>
  

</template>

<script setup>

import NavegacionLateral from  '@/modules/admin/components/includes/NavegacionLateral.vue'
import Cabecera from  '@/modules/admin/components/includes/Cabecera.vue'
import PiePaginaAdmin from  '@/modules/admin/components/includes/PiePaginaAdmin.vue'
 </script>