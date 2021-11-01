import React, { useState, useEffect } from  'react'
import img from './img/imagenes'
import Aos from 'aos'
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import ContextStates from "./context/Estados";      
import HomePage from './Components/HomePage';
import Accesorios from './Components/AccesoriosPage';
import CarroceriasPage from './Components/CarroceriasPage';
import FibraPage from './Components/FibraPage';
import LaminaPage from './Components/laminaPage';
import Mantenimiento from './Components/Mantenimiento';
 
const Navbar = () => {
  const [stateMenu, setStateMenu ] =  useState(false);
  const handleChange = () => setStateMenu(current => !current)

  const menuOpciones = () => {
    return(
      <div data-aos="fade-right"  className="z-50  shadow-lg xl:hidden text-white float-right py-4 w-6/12 bg-blue-600 grid grid-rows gap-y-2">
        <NavLink exact to="/" onClick={handleChange} className="px-4 py-2 flex justify-between">
          <i className="fas fa-home text-lg"></i>
          <h1>Inicio</h1>
        </NavLink> 
        <NavLink exact to="/accesorios" onClick={handleChange} className="px-4 py-2 flex justify-between">
          <img src={img.AccesoriosIcon} alt="accesorios" className="w-6"/>
          <h1>Accesorios</h1>
        </NavLink> 
        <NavLink exact to="/carrocerias" onClick={handleChange} className="px-4 py-2 flex justify-between">
          <img src={img.CarroceriaIcon} alt="accesorios" className="w-8"/>
          <h1>Carrocerias</h1>
        </NavLink> 
      </div>
    )
  }

  return (
    <div data-aos="fade-down" className="z-50 fixed w-screen">
      <div className="bg-blue-600	 px-4 py-1 text-white flex justify-between">
        <img
          onClick={() => window.location.assign("/")}
          src={img.Logotipo}
          alt="logo"
          className="w-16 cursor-pointer xl:w-24"
        />
        <i
          onClick={handleChange}
          className="fas fa-bars text-2xl xl:hidden"
        ></i>
        <div className="hidden xl:flex pr-8">
          <NavLink exact to="/"
            className="px-8 py-2 flex justify-between" 
          >
            <h1>Inicio</h1>
          </NavLink>
          <NavLink exact to="/accesorios"
            className="px-8 py-2 flex justify-between"  
          >
            <h1>Accesorios</h1>
          </NavLink>
          <NavLink exact to="/carrocerias"
            className="px-8 py-2 flex justify-between" 
          >
            <h1>Carrocerias</h1>
          </NavLink>
        </div>
      </div>
      {stateMenu ? menuOpciones()  : null} 
    </div>
  );
}

const page404 = () => {
  return (
    <div className="bg-gray-900 h-screen pt-32 text-white">
      <div className="m-auto text-center w-10/12 ">
        <h1 className="text-3xl my-8">Error 404</h1>
        <img src={img.Logotipo} alt="logo" className="w-24 m-auto" />
        <h1 className="text-2xl my-4">Lo sentimos no encontramos esta pagina</h1>
      </div>
    </div>
  )
}

function App() {

  useEffect(() => {
    Aos.init({ duration: 650 });  
  }, []);  
  
  return (
    <div className="overflow-y-hidden">
      <ContextStates>
        <Router>
          {Navbar()}
          <Switch> 
            <Route exact path="/carrocerias">
              <div className="pt-9"><CarroceriasPage/> </div> 
            </Route> 
            <Route exact path="/carrocerias/fibra">
              <div className="pt-9"><FibraPage/> </div> 
            </Route> 
            <Route exact path="/carrocerias/lamina">
              <div className="pt-9 "><LaminaPage/> </div> 
            </Route> 
            <Route exact path="/carrocerias/mantenimiento">
              <div className="pt-9"><Mantenimiento/> </div> 
            </Route> 
            <Route exact path="/accesorios">
              <div className="pt-9"><Accesorios/> </div> 
            </Route> 
            <Route exact path="/">
              <div className=" xl:pt-12"><HomePage/> </div> 
            </Route>
            <Route path="*" component={page404} />
          </Switch>
        </Router>
      </ContextStates>
    </div>
  )
}

export default App

