import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) { 
    const [titulo, setTitulo] = useState('');
    const [description, setDescription] = useState('');
    const [imagenTarjeta, setImg] = useState();
    return (
      <ContextStates.Provider
        value={{
          titulo,
          setTitulo,
          description,
          setDescription,
          imagenTarjeta,
          setImg,
        }}
      >
        {props.children}
      </ContextStates.Provider>
    );
}

export default Estados;
