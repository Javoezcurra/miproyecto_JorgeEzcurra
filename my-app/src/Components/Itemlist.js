import React, { useEffect, useState, useCallback } from "react";



const promiselist = () => {

  return new Promise ((resolve) =>{

  setTimeout(() => {
   resolve ([
   { id: 1,destacado: true, name: "Teclado Dell", price: "$100" },
   { id: 2,destacado: false, name: "Mouse Dell", price: "$50" },
   { id: 3,destacado: true, name: "Monitor Samsumg", price: "$100" },
   { id: 4,destacado: false, name: "Teclado Dell", price: "$400" },
   { id: 5,destacado: true, name: "MacBook Pro", price: "$1000" },
   { id: 6,destacado: false, name: "MacBook Pro ultra", price: "$3500" },
    ])},
   1500);

   });
};




export const Itemlist = () => {

  const [products, setProductos] = useState([]);

  const consultPromise = useCallback(
    
    async() => {
      const productoFiltrado = await promiselist().then((data) => data.filter((product) =>product.destacado))
        setProductos(productoFiltrado); 
      
        
         
    },

    [promiselist],
  )
  
    
  
  useEffect(() => {
    consultPromise();

  },[consultPromise])  
  
  return (
    <>
      {products.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <h1>{products.length}</h1>
        </>
      )}


    </>
  );


};


