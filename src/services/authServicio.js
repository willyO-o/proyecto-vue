import axiosInstance from "@/helpers/axiosInstance";


export const login = async (credenciales) =>{

    const resultado = await axiosInstance.post('auth/login',credenciales)

    return resultado.data

}

export const datosUsuarioActual = async () =>{

    const resultado = await axiosInstance.get('auth/me')

    return resultado.data
}