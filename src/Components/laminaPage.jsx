import React, {useState} from 'react'
import imgLamina from '../img/imgLamina' 

function LaminaPage() {
    const [state, setState] = useState(false);
    const [imagen, setImagen] = useState();
    
    const Zoom = () => {
      return (
        <div className="">
          <div className="bg-black h-screen w-screen z-40 absolute m-0 p-4 sm:h-auto md:h-screen md:pt-16 xl:p-8 xl:fixed">
            <div onClick={() => setState((current) => !current)}>
              <b className=" px-3 pb-1 rounded-full bg-red-500 text-white ">
                x
              </b>
            </div>
            <img src={imagen} alt="" className="mt-32 xl:w-3/6 sm:mt-8 xl:mt-8 xl:m-auto" />
          </div>
        </div>
      );
    };

    const Galeria = () => {
      var styleImg = ' object-cover h-full xl:w-full xl:h-full xl:cursor-pointer sm:h-full sm:w-full md:h-full md:w-full xl:hover:shadow-xl'
      return (
          <div className="">
            <div className="p-4 text-center ">
              <h1 className="text-2xl my-4">
                <b>Casetas en Lamina para Pick Up</b>
              </h1>
              <h1>
                Fabricación, diseño y venta de casetas en lamina estas son
                ideales para cubrir tu camioneta pick up, nuestras
                construcciones son muy ligeras y hacemos una rápida instalación
              </h1>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3">
              <img
                onClick={() => {
                  setImagen(imgLamina.img1);
                  setState(true);
                }}
                src={imgLamina.img1}
                alt=""
                className={styleImg}
              /> 
              <img
                onClick={() => {
                  setImagen(imgLamina.img2);
                  setState(true);
                }}
                src={imgLamina.img2}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgLamina.img3);
                  setState(true);
                }}
                src={imgLamina.img3}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgLamina.img4);
                  setState(true);
                }}
                src={imgLamina.img4}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgLamina.img5);
                  setState(true);
                }}
                src={imgLamina.img5}
                alt=""
                className={styleImg}
              />
            </div>
          </div>
        );
    }

    return (
      <div className="bg-blue-600 h-screen text-white sm:h-auto md:h-screen xl:h-auto"> 
        {state ? <Zoom/> : <Galeria/>}
      </div>
    );
}

export default LaminaPage
