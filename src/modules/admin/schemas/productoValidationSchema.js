import * as yup from 'yup';

export const productoValidationSchema = yup.object( {
    titulo: yup.string().required('El nombre es requerido').min(3,'El nombre debe tener al menos 3 caracteres'),
    descripcion: yup.string().required('la descripcion es requerida').min(10,'La descripcion debe tener al menos 10 caracteres'),
    precio: yup.number().required('el precio es requerido').positive('El precio debe ser positivo'),
    categoria_id: yup.number().required('por favor seleccione una categoria').min(1,'por favor seleccione una categoria'),
})

