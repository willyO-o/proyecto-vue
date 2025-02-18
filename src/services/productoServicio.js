import axiosInstance from "@/helpers/axiosInstance"


const listarProductos = async (parametros = {}) => {

    const resultado = await axiosInstance.get('productos', { params: parametros })

    console.log(resultado.data);
    return resultado.data

}


const listarProductoId = async (id)=>{
    
    const resultado = await axiosInstance.get('productos/'+id)

    return resultado.data


}




export {
    listarProductos,
    listarProductoId,
}