<template>
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a class="nav-link ps-2 d-flex cursor-pointer align-items-center font-weight-semibold"
                    id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">

                    <i class="fas fa-cart-shopping me-1"></i>

                    <img src="/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                    aria-labelledby="dropdownMenuDocs">
                    <div class="d-none d-lg-block">
                      <ul class="list-group">
                        <li class="nav-item list-group-item border-0 p-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md">
             
                            <div class="d-flex  py-1">
                                <div>
                                    <img src="/assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">John Michael</h6>
                                    <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                </div>
                            </div>


                          </a>
                        </li>

                     
                      </ul>
                    </div>

                    <div class="row d-lg-none">
                      <div class="col-md-12 g-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Getting Started</h6>
                          <span class="text-sm">All about overview, quick start, license and contents</span>
                        </a>

                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Foundation</h6>
                          <span class="text-sm">See our colors, icons and typography</span>
                        </a>

                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Components</h6>
                          <span class="text-sm">Explore our collection of fully designed components</span>
                        </a>

                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Plugins</h6>
                          <span class="text-sm">Check how you can integrate our plugins</span>
                        </a>

                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Utility Classes</h6>
                          <span class="text-sm">For those who want flexibility, use our utility classes</span>
                        </a>
                      </div>
                    </div>

                  </ul>
                </li>


</template>


<script setup>

import {useCarritoStore} from '@/modules/public/stores/carritoStore';


const carritoStore = useCarritoStore();

console.log(carritoStore.carrito)

</script>