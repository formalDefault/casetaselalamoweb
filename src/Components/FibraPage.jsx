import React, {useState} from 'react'
import imgFibra from '../img/imgFibra' 

function FibraPage() {
    const [state, setState] = useState(false);
    const [imagen, setImagen] = useState();
    
    const zoom = () => {
      return (
        <div className="">
          <div className="bg-black h-screen w-screen z-40 absolute m-0 p-4 sm:h-auto md:h-screen md:pt-16 lg:h-auto xl:p-8 xl:fixed">
            <div onClick={() => setState((current) => !current)}>
              <b className=" px-3 pb-1 rounded-full bg-red-500 text-white ">
                x
              </b>
            </div>
            <img src={imagen} alt="" className="mt-32 xl:w-3/6 sm:mt-8 md:mt-32 lg:mt-8 xl:mt-8 xl:m-auto" />
          </div>
        </div>
      );
    };

    const galeria = () => {
      var styleImg = 'xl:w-full object-cover xl:h-full cursor-pointer md:h-full shadow-lg'
        return (
          <div className="">
            <div className="p-4 text-center ">
              <h1 className="text-2xl my-4">
                <b>Casetas en fibra de vidrio</b>
              </h1>
              <h1>
                Contamos con casetas o camper para camionetas abiertas estas
                ayudaran a transportar cargas sin necesidad de cuidar las
                pertenencias.
              </h1>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3">
              <img
                onClick={() => {
                  setImagen(imgFibra.img1);
                  setState(true);
                }}
                src={imgFibra.img1}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgFibra.img2);
                  setState(true);
                }}
                src={imgFibra.img2}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgFibra.img3);
                  setState(true);
                }}
                src={imgFibra.img3}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgFibra.img4);
                  setState(true);
                }}
                src={imgFibra.img4}
                alt=""
                className={styleImg}
              />
              <img
                onClick={() => {
                  setImagen(imgFibra.img5);
                  setState(true);
                }}
                src={imgFibra.img5}
                alt=""
                className={styleImg}
              />
            </div>
          </div>
        );
    }

    return (
      <div className="bg-blue-600 h-screen text-white sm:h-auto md:h-screen xl:h-auto"> 
        {state ? zoom() : galeria()}
      </div>
    );
}

export default FibraPage
