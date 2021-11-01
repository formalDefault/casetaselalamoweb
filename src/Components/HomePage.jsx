import React from 'react'
import img from '../img/imagenes'
import Formulario from './Formulario'
import { Link } from "react-scroll";
import {NavLink } from "react-router-dom"

function whatsapp(numero) {
  window.open(`https://api.whatsapp.com/send?phone=52${numero}&text=Hola,%20requiero%20un%20servicio`);
}

const llamadas = (numero) => { 
  window.open(`tel:+52${numero}`, '_blank');
}

const portada = () => {
    return (
      <div className="">
        <div className="bg-black bg-opacity-50 relative text-white text-2xl h-screen pt-48 xl:py-56 xl:h-auto ">
          <div className="text-center">
            <img src={img.Logotipo1} alt="" className="w-80 m-auto mb-8"/>
            <h1>
              <b>Diseño y Fabricación de Carrocerias</b>
            </h1>
            <h1>, Desde Motocarros Hasta Camión de Mudanzas</h1>
            <Link
              to="formulario"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              className="xl:hidden"
            >
              <button className="px-4 bg-blue-900 text-lg py-2 rounded-lg mt-12">
                <i className="fas fa-comment-alt float-left mt-2 mr-4"></i>
                Contactanos
              </button>
            </Link>
          </div>
          <div className=" w-screen absolute bottom-0 text-center">
            <Link
              to="segundaSeccion"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              <div className=" mb-4 w-2/12 m-auto rounded-full">
                <i className="fas fa-arrow-down animate-bounce"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
}

const segundaSeccion = () => { 
  const tarjetasServicios = (imagen, servicio, description) => {
    return (
      <div>
        <div id="carroceria" className={serviceStyle}>
          <img src={imagen} alt="imagen_servicio" className="rounded-t-lg bg-blue-500 object-cover h-48 xl:h-60 w-full" />
          <div className="p-2">
            <h1>
              <b>{servicio}</b>
            </h1>
            <h1>
              {description}
            </h1>
          </div>
        </div>
      </div>
    );
  } 
  var serviceStyle = "text-white border border-blue-600 shadow-lg rounded-xl xl:shadow-lg xl:hover:shadow-2xl xl:duration-300 cursor-pointer";
    return (
      <div className="relative">
        <div className=" bg-blue-600 p-4">
          <div className=" p-2 rounded-xl shadow-lg text-white border border-blue-700 xl:w-10/12 xl:m-auto xl:grid xl:grid-cols-2 xl:p-0">
            <div className="xl:px-6 pt-8">
              <img
                src={img.nosotros}
                alt="nosotros"
                className="mb-4 xl:mb-0 xl:w-8/12"
              />
            </div>
            <div className="xl:py-16">
              <b>Nosotros</b>
              <h1>
                Nos especializamos en todo tipo de carrocerías seca,
                refrigeradas, plataformas, fibra de vidrio, lamina y
                acondicionamiento de unidades van. Contamos con más de 30 años
                de experiencia, somos el principal comercializador e impulsamos
                a nuestros clientes a mejorar la eficiciencia en su trabajo,
                adquiere con nosotros tu servicio tenemos trabajos garantizados.
              </h1>
            </div>
          </div>
          <div id="servicios" className="mt-12">
            <h1 className="text-white text-center text-2xl mb-4">
              <b>Servicios</b>
              <hr className="w-5/12 m-auto " />
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:w-11/12 xl:m-auto">
              <NavLink exact to="/carrocerias/">
                {tarjetasServicios(
                  img.servicioCarroceria,
                  "Carrocerias",
                  "Somos especialistas en fabricación, instalación y diseño de carrocerias, de forma urgente las 24 horas para no detener sus operaciones."
                )}
              </NavLink>
              <NavLink exact to="/carrocerias/fibra">
{tarjetasServicios(
                img.servicioFibra,
                "Casetas de fibra de vidrio",
                "Servicio de casetas en fibra de vidrio, las más resistentes fabricada con los mejores materiales brindando un buen funcionamiento."
              )}
              </NavLink>
              <NavLink exact to="/carrocerias/lamina">
                {tarjetasServicios(
                img.servicioLamina,
                "Casetas de lamina",
                "Camper o caseta de lamina para tus camionetas pick up protege de la mejor forma tu unidad y sus pertenencias, contamos con diferentes medidas"
              )}
              </NavLink>
              <NavLink exact to="/accesorios/">
                {tarjetasServicios(
                img.servicioAccesorios,
                "Accesorios",
                "Venta accesorios para campers como son: Ventanas Cerraduras Amortiguadores"
              )}
              </NavLink>
              
              <NavLink exact to="/carrocerias/mantenimiento" id="carroceria" className={serviceStyle}>
                <div className="rounded-t-lg bg-white object-cover h-48 w-full">
                  <div className="text-center pt-16">
                    <i className="fas fa-tools text-black text-6xl"></i>
                  </div>
                </div>
                <div className="p-2">
                  <h1>
                    <b>Mantenimiento</b>
                  </h1>
                  <h1>
                    Servicio de mantenimiento y reparación de camper, caja o
                    carroceria.
                  </h1>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}

const terceraSeccion = () => {
  return (
    <div>
      <div className="relative w-full h-auto bg-blue-600 p-4">
        <div className="text-center text-2xl  text-white">
          <h1>
            <b>Redes sociales</b>
          </h1>
          <hr className="w-5/12 m-auto" />
        </div>
        <div className="flex justify-between text-white px-16 text-3xl mt-6 xl:text-4xl cursor-pointer xl:w-4/12 xl:m-auto xl:mt-12">
          <i onClick={() => window.open('https://m.youtube.com/channel/UCJuuQan9kM_8qIzm_wDMxvw?sub_confirmation=1', '_blank')} className="fab fa-youtube p-2 cursor-pointer"></i>
          <i onClick={() => window.open('https://www.facebook.com/carroceriasalamo', '_blank')} className="fab fa-facebook-square p-2 cursor-pointer"></i>
          <i onClick={() => window.open('https://www.instagram.com/carroceriasalamo/', '_blank')} className="fab fa-instagram p-2 cursor-pointer"></i>
        </div>
        <div id="oficinas" className="">
          <div className="text-center text-2xl text-white mt-12">
            <h1>
              <b>Nuestras oficinas</b>
            </h1>
            <hr className="w-5/12 m-auto" />
          </div>
          <div className="text-left text-lg text-white mt-4 xl:mt-12">
            <h1>
              <b>Oficina en tlaquepaque:</b>
            </h1>
            <div className="grid grid-cols-1  xl:grid-cols-2 gap-8">
              <div className="text-sm xl:h-60 grid grid-cols-1 gap-4 xl:gap-1">
                <div>
                  <i
                    id="icons_contacto"
                    className="fas fa-map-marker-alt" 
                  />
                  <a className="ml-4">
                    Calz. Jesús González Gallo 3097, El Alamo, 45560 San Pedro
                    Tlaquepaque, Jal.
                  </a>
                </div>
                <div onClick={() => llamadas(3313685791)}>
                  <i
                    id="icons_contacto" 
                    className="fas fa-phone-alt"
                  />
                  <a className="ml-4">Teléfono: 3313685791</a>
                </div>
                <div onClick={() => llamadas(3313685790)}>
                  <i
                    id="icons_contacto" 
                    className="fas fa-phone-alt"
                  />
                  <a className="ml-4">Teléfono: 3313685790</a>
                </div>
                <div onClick={() => whatsapp(3317222567)}>
                  <i
                    id="icons_contacto" 
                    className="fab fa-whatsapp"
                  />
                  <a className="ml-4">WhatsApp: 3317222567</a>
                </div>
                <div onClick={() => whatsapp(3319733043)}>
                  <i
                    id="icons_contacto" 
                    className="fab fa-whatsapp"
                  />
                  <a className="ml-4">WhatsApp: 3319733043</a>
                </div>
                <div>
                  <i id="icons_contacto" class="fas fa-envelope" />
                  <a className="ml-4">Correo: casetasalamo@gmail.com</a>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.0100343507647!2d-103.32381178518493!3d20.628447806699494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3a194729db9%3A0x5c52b22a13826601!2sCasetas%20el%20Alamo!5e0!3m2!1ses!2smx!4v1635658411928!5m2!1ses!2smx"
                  allowfullscreen=""
                  loading="lazy"
                  className="w-full h-48 rounded-xl xl:w-11/12"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="text-left text-lg text-white mt-4 xl:mt-24">
            <h1>
              <b>Oficina en el salto:</b>
            </h1>
            <div className="grid grid-cols-1  xl:grid-cols-2 gap-8">
              <div className="text-sm grid grid-cols-1 gap-4">
                <div>
                  <i
                    id="icons_contacto"
                    className="fas fa-map-marker-alt" 
                  />
                  <a className="ml-4">
                    Guadalajara - El Salto 840, Minerales, El Verde, 45693 Guadalajara, Jal.
                  </a>
                </div>
                <div onClick={() => llamadas(3336587525)}>
                  <i
                    id="icons_contacto" 
                    className="fas fa-phone-alt"
                  />
                  <a className="ml-4">Teléfono: 3336587525</a>
                </div> 
                <div onClick={() => whatsapp(3317222567)}>
                  <i
                    id="icons_contacto" 
                    className="fab fa-whatsapp"
                  />
                  <a className="ml-4">WhatsApp: 3317222567</a>
                </div>
                <div onClick={() => whatsapp(3319733043)}>
                  <i
                    id="icons_contacto" 
                    className="fab fa-whatsapp"
                  />
                  <a className="ml-4">WhatsApp: 3319733043</a>
                </div>
                <div>
                  <i id="icons_contacto" class="fas fa-envelope" />
                  <a className="ml-4">Correo: casetasalamo@gmail.com</a>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.9304178463585!2d-103.30317366852613!3d20.56882349823568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4d4a3b62444b%3A0x373188579941dee7!2sCarrocer%C3%ADas%20el%20%C3%81lamo!5e0!3m2!1ses!2smx!4v1635658738574!5m2!1ses!2smx"
                  allowfullscreen=""
                  loading="lazy"
                  className="w-full h-48 rounded-xl xl:w-11/12"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
    return (
      <div>
			<img
          src={img.portada}
          alt="portada"
          className="h-screen object-cover fixed xl:w-screen "
        />
        {portada()} 
        <div id="segundaSeccion">{segundaSeccion()}</div>
        {terceraSeccion()}
        <div id="formulario"><Formulario /></div>
      </div>
    );
}

export default HomePage
