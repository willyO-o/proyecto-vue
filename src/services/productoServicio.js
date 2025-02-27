import axiosInstance from "@/helpers/axiosInstance"


const listarProductos = async (parametros = {}) => {

    const resultado = await axiosInstance.get('productos', { params: parametros })

    // console.log(resultado.data);
    return resultado.data

}


const listarProductoId = async (id)=>{
    
    const resultado = await axiosInstance.get('productos/'+id)

    return resultado.data


}


const crearProducto = async (producto) =>{

    const resultado = await axiosInstance.post('productos', producto)

    return resultado.data

}


const actualizarProducto = async (idProducto, producto) =>{

    const resultado = await axiosInstance.put('productos/'+idProducto, producto)

    return resultado.data

}


const eliminarProductoId = async (idProducto) =>{

    const resultado = await axiosInstance.delete('productos/'+idProducto)

    return resultado.data

}



export {
    listarProductos,
    listarProductoId,
    crearProducto,
    eliminarProductoId,
    actualizarProducto
}