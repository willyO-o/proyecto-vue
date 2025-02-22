<template>
    <div class="container my-auto py-5">
        <div class="row">
            <div class="col-lg-4 col-md-8 col-12 mx-auto">
                <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                            <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar Sesión</h4>
                            <div class="row mt-3">
                                <div class="col-2 text-center ms-auto">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fa fa-facebook text-white text-lg"></i>
                                    </a>
                                </div>
                                <div class="col-2 text-center px-1">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fa fa-github text-white text-lg"></i>
                                    </a>
                                </div>
                                <div class="col-2 text-center me-auto">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fa fa-google text-white text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">

                        <div v-show="errorLogin" class="alert alert-danger text-white" role="alert">
                            <strong>Error!</strong>
                            Correo o contraseña incorrectos
                        </div>
                        <Form :validation-schema="loginValidacionSchema" role="form" class="text-start"
                            @submit="iniciarSesion">


                            <div class="input-group input-group-outline ">
                                <Field v-model="datosLogin.email" type="email" class="form-control" placeholder="correo"
                                    name="email" />
                            </div>
                            <ErrorMessage name="email" class="text-danger my-3" />

                            <div class="input-group input-group-outline ">

                                <Field v-model="datosLogin.password" type="password" class="form-control"
                                    placeholder="contraseña" name="password" />
                            </div>

                            <ErrorMessage name="password" class="text-danger mb-3" />

                            <div class="form-check form-switch d-flex align-items-center mb-3">
                                <input v-model="datosLogin.rememberMe" class="form-check-input" type="checkbox"
                                    id="rememberMe" checked>
                                <label class="form-check-label mb-0 ms-3" for="rememberMe">
                                    Recordar Sesión
                                </label>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn bg-gradient-dark w-100 my-4 mb-2">Ingresar</button>
                            </div>
                            <p class="mt-4 text-sm text-center">
                                Olvidaste tu contraña clic aqui?
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { reactive, ref } from 'vue';

import { Form, Field, ErrorMessage } from 'vee-validate';

import { loginValidacionSchema } from '@/modules/public/schemas/loginValidacionSchema';

import { login, datosUsuarioActual } from '@/services/authServicio';

import { useRouter } from 'vue-router';

import Swal from 'sweetalert2';


const errorLogin = ref(false)

const router = useRouter();

const datosLogin = reactive({
    email: '',
    password: '',
    rememberMe: true

})


const iniciarSesion = async () => {




    try {

        const resultado = await login(datosLogin);

        // console.log("resultado: ", resultado);
        

        const token = resultado.access_token.token;


        localStorage.setItem('token',token)

        const refreshToken = resultado.refresh_token.token;

        localStorage.setItem('refreshToken',refreshToken)


        errorLogin.value = false;


        Swal.fire({
            title: "Inicio de Sesion Exitoso !",
            text: "Se le redireccionara  en unos segundos!",
            icon: "success"
        });

        const resultadoUsuario = await datosUsuarioActual()

        localStorage.setItem('usuario', JSON.stringify(resultadoUsuario))

        setTimeout(() =>{
            router.push('/admin')
        }, 3000);
        // 1000 = 1 segundo

    } catch (error) {

        errorLogin.value = true;
        console.log("error: ", error);
    }




}


</script>