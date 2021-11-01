import React, {useState} from 'react'
import imgManten from '../img/imgManten' 

function Mantenimiento() {
    const [state, setState] = useState(false);
    const [imagen, setImagen] = useState();
    
    const zoom = () => {
      return (
        <div className="">
          <div className="bg-black h-screen w-screen z-40 absolute m-0 p-4 xl:p-8 xl:fixed">
            <div onClick={() => setState((current) => !current)}>
              <b className=" px-3 pb-1 rounded-full bg-red-500 text-white ">
                x
              </b>
            </div>
            <img src={imagen} alt="" className="mt-32 xl:w-3/6 xl:mt-8 xl:m-auto" />
          </div>
        </div>
      );
    };

    const galeria = () => {
        return (
          <div className="">
            <div className="p-4 text-center ">
              <h1 className="text-2xl my-4">
                <b>Reparación de Cajas y Fibra de Vidrio</b>
              </h1>
              <h1>
                Servicio de mantenimiento y reparación en camper, caja o
                carroceria, somos el mejor taller ya que usamos piezas de gran
                calidad y tenemos el personal capacitado, no dudes en adquirir
                tu reparación de cajas con nosotros, tenemos precios increibles
                todos los días.
              </h1>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2 xl:grid-cols-3">
              <img
                onClick={() => {
                  setImagen(imgManten.img1);
                  setState(true);
                }}
                src={imgManten.img1}
                alt=""
                className="cursor-pointer"
              />
              <img
                onClick={() => {
                  setImagen(imgManten.img2);
                  setState(true);
                }}
                src={imgManten.img2}
                alt=""
                className="cursor-pointer"
              />
              <img
                onClick={() => {
                  setImagen(imgManten.img3);
                  setState(true);
                }}
                src={imgManten.img3}
                alt=""
                className="cursor-pointer"
              />
              <img
                onClick={() => {
                  setImagen(imgManten.img4);
                  setState(true);
                }}
                src={imgManten.img4}
                alt=""
                className="cursor-pointer"
              /> 
            </div>
          </div>
        );
    }

    return (
      <div className="bg-blue-600 h-screen text-white xl:h-auto"> 
        {state ? zoom() : galeria()}
      </div>
    );
}

export default Mantenimiento
