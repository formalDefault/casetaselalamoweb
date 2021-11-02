import React, {useState} from 'react'   
import { Formik, Form, Field, ErrorMessage } from 'formik' //npm i formik --save  
import emailjs from 'emailjs-com'   
 
export default function ContactPage() {   
    
    const [showMessage, setShowMessage] = useState(false); 

    const Formulario = () => {
        return (
          <Formik
            //valores de los campos del formulario
            initialValues={{
              correoCliente: "",
              nombreCliente: "",
              telefonoCliente: "",
              mensajeCliente: "",
            }}
            //validacion de los input
            validate={(valores) => {
              let errores = {};

              //validacion para nombre
              if (!valores.nombreCliente) {
                errores.nombreCliente = "ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreCliente)) {
                errores.nombreCliente =
                  "El nombre solo puede tener letras y espacios";
              }

              //validacion para telefono
              if (!valores.telefonoCliente) {
                errores.telefonoCliente =
                  "ingresa un numero de telefono para poder contactarte";
              } else if (
                !/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(
                  valores.telefonoCliente
                )
              ) {
                errores.telefonoCliente =
                  "Favor de ingresar solo numeros del 0 al 9";
              }

              //validacion para correo
              if (!valores.correoCliente) {
                errores.correoCliente = "ingresa un correo";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correoCliente
                )
              ) {
                errores.correoCliente = "ingresa un correo valido";
              }

              return errores;
            }}
            //funcion del boton de enviar
            onSubmit={(valores) => {
              emailjs
                .send(
                  "default_service",
                  "template_66kpzfw",
                  valores,
                  "user_ucId8avWN9exPvasqK726"
                )
                .then(
                  () => {
                    setShowMessage(true);
                  },
                  (err) => {
                    console.log("FAILED...", err);
                  }
                );
            }}
          >
            {({ errors }) => (
              <div  className="relative z-40 ">
                <div className="bg-black bg-opacity-50 pt-12 xl:pt-40 pb-8 w-screen ">
                  <div className="w-full rounded-2xl text-white m-auto p-4  xl:w-4/12 xl:bg-black xl:py-12 sm:w-9/12 "> 
                    <div className="text-center text-2xl">
                        <h1><b>Envianos un mensaje</b></h1> 
                        <hr className="w-8/12 m-auto" />
                    </div>
                    <Form>
                      <Field
                        name="correoCliente"
                        id="correoCliente"
                        type="text"
                        placeholder="Correo electronico"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />
                      <ErrorMessage
                        name="correoCliente"
                        component={() => (
                          <div className="text-red-500">
                            {errors.correoCliente}
                          </div>
                        )}
                      />
                      <Field
                        name="nombreCliente"
                        id="nombreCliente"
                        type="text"
                        placeholder="Nombre completo"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />
                      <ErrorMessage
                        name="nombreCliente"
                        component={() => (
                          <div className="text-red-500">
                            {errors.nombreCliente}
                          </div>
                        )}
                      />
                      <Field
                        name="telefonoCliente"
                        id="telefonoCliente"
                        type="text"
                        placeholder="Numero de telefono"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full h-12 my-5 px-4"
                      />
                      <ErrorMessage
                        name="telefonoCliente"
                        component={() => (
                          <div className="text-red-500">
                            {errors.telefonoCliente}
                          </div>
                        )}
                      />
                      <Field
                        name="mensajeCliente"
                        id="mensajeCliente"
                        as="textarea"
                        placeholder="Mensaje"
                        className="outline-none text-black border-b-2 border-yellow-600 rounded-lg w-full my-5 py-2 px-4"
                      />
                      <center>
                        <button
                          type="submit"
                          className="py-1 w-full rounded-xl px-8 bg-gradient-to-r from-pink-700 to-yellow-500"
                        >
                          Enviar mensaje
                        </button>
                      </center>
                    </Form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        );
    }

    const mensaje = () => {
        return (
            <div className="absolute z-50 ">   
                    <div className="bg-blue-600 pt-8 xl:bg-transparent xl:pt-40 pb-8 w-screen"> 
                        <div  className="text-center w-5/6 rounded-2xl text-white bg-blue-600 border-2 border-blue-600 m-auto p-4 shadow-2xl xl:w-4/12 xl:py-6 "> 
                            <b>Mensaje enviado</b> 
                        </div>
                    </div>  
            </div>
        )
    }
    
    return (
        <div> 
            {showMessage ? mensaje() : Formulario()}   
        </div>
    )
    
}

