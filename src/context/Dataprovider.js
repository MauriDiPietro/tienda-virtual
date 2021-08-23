import React, {useState, useEffect, createContext} from 'react';
import Data from '../Data.js'
export const DataContext = createContext();


export const DataProvider = (props) =>{
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);

    useEffect(()=>{
      const producto = Data.items
      if(producto){
          setProducts(producto)
        }else{
            setProducts([])
        }

    }, [])

    const value = {
        productos : [products],
        menu: [menu, setMenu]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}