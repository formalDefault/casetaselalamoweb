import React, { useState, useContext } from 'react'
import img from '../img/imagenes' 
import 'aos/dist/aos.css'

import {ContextStates} from "../context/Estados";      

function whatsapp(numero) {
    window.open(`https://api.whatsapp.com/send?phone=52${numero}&text=Hola,%20requiero%20un%20servicio`);
  }
  

function Accesorios() {
    const {titulo, setTitulo} = useContext(ContextStates);
    const {description, setDescription} = useContext(ContextStates);
    const {imagenTarjeta, setImg} = useContext(ContextStates);
    const [mostrar, setMostrar] = useState(false)

    const tarjetas = (imagen, Titulo, Descripcion) => {
        const handleChange = () => {
            setImg(imagen)
            setMostrar(true)
            setDescription(Descripcion)
            setTitulo(Titulo)
        }
        return(
            <div>
                <div  data-aos="zoom-in" onClick={() => handleChange()} className="z-10 bg-blue-600 border rounded-lg shadow-lg sm:w-full sm:h-full md:w-full md:h-full xl:w-8/12 xl:m-auto xl:cursor-pointer xl:shadow-sm xl:hover:shadow-xl">
                    <img src={imagen} alt="imagen" className="rounded-t-lg object-cover h-24 w-full bg-white md:h-48 xl:h-48 "/>
                    <h1 className="m-2 text-white"><b>{Titulo}</b></h1> 
                    <i className="fab fa-whatsapp px-2 py-1 m-2 rounded-full bg-white text-blue-600 w-auto"> Contactar</i> 
                </div>
            </div>
        )
    }

    const verTarjeta = () => {
        return (
          <div>
            <div className="relative bg-blue-600 text-white w-9/12 m-auto p-2 rounded-xl xl:w-4/12">
              <div className="w-auto">
                <div onClick={() => setMostrar(current => !current)}><b className="cursor-pointer px-3 pb-1 rounded-full bg-red-500 ">x</b></div>
              </div>
              <img src={imagenTarjeta} alt="ventana" className="bg-white my-4" />
              <h1>
                <b>{titulo}</b>
              </h1>
              <h1>
                {description}
              </h1> 
                <button
                  onClick={() => whatsapp(3317222567)}
                  className="bg-red-500 py-2 px-4 rounded-xl mt-4 w-full"
                >
                  <i id="icons_contacto" className="fab fa-whatsapp" />{" "}
                  Contactar
                </button> 
            </div>
          </div>
        );
    }

    const elementos = () => {
        return (
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 xl:p-8 xl:pt-28">
                {tarjetas(img.ventana, 'Ventanas', 'Somos fabricantes de ventanas para campers, creamos todo el diseño a la medida con alto estandar de calidad')}
                {tarjetas(img.cerradura, 'Cerraduras', 'Equipa el camper de tu camioneta con nuestras cerraduras traseras, consigue los mejores accesorios solo con nosotros.')}
                {tarjetas(img.amortiguador, 'Amortiguadores', 'Amortiguadores para campers, equipalo con los mejores accesorios le darán un toque unico a tu camioneta.')}
            </div>
        )
    }
    return (
        <div>
            <div className=" text-center text-2xl py-8 xl:pt-16">
                <h1><b>Accesorios para camper</b></h1>
            </div> 
            {mostrar ? verTarjeta() : elementos()}
        </div>
    )
}

export default Accesorios
