import { defineStore } from 'pinia'

import { ref } from 'vue'




export const useCarritoStore = defineStore('carrito',() => {

    const carrito = ref(extraerCarrito());

    function extraerCarrito () {

        let carritoStorage = localStorage.getItem('carrito');

        return JSON.parse(carritoStorage || '[]');
    }

    // const extraerCarrito = () => {

    //     let carritoStorage = localStorage.getItem('carrito');

    //     return JSON.parse(carritoStorage || '[]');
    // }

    const guardarCarrito = () => {

        localStorage.setItem('carrito', JSON.stringify(carrito.value));
    }

    const agregarProducto = (producto, cantidad = 1) => {

        let productoExistente = carrito.value.find(p => p.id == producto.id);

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carrito.value.push({
                id: producto.id,
                titulo: producto.titulo,
                imagen: producto.imagen,
                precio: producto.precio,
                stock: producto.stock,
                cantidad: cantidad,
            })
        }

        guardarCarrito();

    }

    const eliminarProducto = (producto) => {

        carrito.value = carrito.value.filters(p => p.id != producto.id);

        guardarCarrito();
    }

    const vaciarCarrito = () => {
        carrito.value = [];
        guardarCarrito();
    }

    const calcularTotal = () => {

        let total = 0;

        carrito.value.foreach(p => {
            total += Number(p.precio) * Number(p.cantidad);
        })

        return total;
    }


    const extraerCantidad = (producto) => {
        let productoExistente = carrito.value.find(p => p.id == producto.id);

        if (!productoExistente) {
            return 0;
        }

        return productoExistente.cantidad
    }




    return {
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        calcularTotal,
        extraerCantidad,
    }


})




