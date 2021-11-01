import React from 'react'
import img from '../img/imagenes' 
import {NavLink} from 'react-router-dom'

function CarroceriasPage() {
    return (
        <div className="p-4"> 
            <div className=" p-4 text-center text-2xl xl:py-8">
                <h1><b>Carrocerias</b></h1>
                <div className="text-lg mt-4">
                    <h1>Conoce nuestra amplia gama en todo tipo de cajas o carrocerias, manejamos la mejor calidad y lo mejor es que entregamos en tiempo record.</h1>
                </div> 
            </div>
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:w-11/12 xl:m-auto xl:mt-20">
                <NavLink exact to="/carrocerias/fibra" className="text-left bg-blue-600 rounded-xl xl:w-8/12 m-auto">
                    <img src={img.nosotros} alt="" className="rounded-t-xl object-cover w-full h-32 xl:h-48"/>
                    <h1 className="m-2 text-white"><b>Casetas de fibra de vidrio</b></h1> 
                    <i className="fas fa-images px-2 py-1 m-2 rounded-full bg-white text-blue-600 w-auto"> Ver fotos</i>
                </NavLink>
                <NavLink exact to="/carrocerias/lamina" className="text-left bg-blue-600 rounded-xl xl:w-8/12 m-auto">
                    <img src={img.servicioLamina} alt="" className="rounded-t-xl object-cover w-full h-32 xl:h-48"/>
                    <h1 className="m-2 text-white"><b>Casetas de lamina</b></h1> 
                    <i className="fas fa-images px-2 py-1 m-2 mt-8 rounded-full bg-white text-blue-600 w-auto"> Ver fotos</i>
                </NavLink>
                <NavLink exact to="/carrocerias/mantenimiento" className="text-left bg-blue-600 rounded-xl xl:w-8/12 m-auto">
                    <img src={img.mantenimiento} alt="" className="rounded-t-xl object-cover w-full h-32 xl:h-48"/>
                    <h1 className="m-2 text-white"><b>Reparacion de cajas</b></h1> 
                    <i className="fas fa-images px-2 py-1 m-2 rounded-full bg-white text-blue-600 w-auto"> Ver fotos</i>
                </NavLink>
            </div>
        </div>
    )
}

export default CarroceriasPage
