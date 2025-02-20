import axiosInstance from "@/helpers/axiosInstance"


export const listarCategorias = async (parametros = {}) => {

    const resultado = await axiosInstance.get('categorias',
        {params: parametros}
    )

    // console.log("resultado: ",resultado);

    return resultado.data
}   