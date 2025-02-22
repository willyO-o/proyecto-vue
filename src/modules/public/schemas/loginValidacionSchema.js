import  * as yup from 'yup';

export const loginValidacionSchema =  yup.object({
    email: yup.string().email('por favor ingrese un correo valido').required('por favor ingrese su correo'),
    password : yup.string().required('por favor ingrese su contraseña')
})
