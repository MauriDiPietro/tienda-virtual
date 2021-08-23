import React, {useState, useEffect, createContext} from 'react';
import Data from '../Data.js'
export const DataContext = createContext();


export const DataProvider = (props) =>{
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]); 

    useEffect(()=>{
      const producto = Data.items
      if(producto){
          setProducts(producto)
        }else{
            setProducts([])
        }

    }, [])

    const addCart = (id) => {
        const check = cart.every(item=>{
            return item.id !== id;
        })
        if(check){
            const data = products.filter(prod=>{
                return prod.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert('This product exist in your cart')
        }
    }

    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
         if(dataCart){
             setCart(dataCart)
         }
    }, [])

    useEffect(()=>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])

    const value = {
        productos : [products],
        menu: [menu, setMenu],
        addCart: addCart,
        cart: [cart, setCart]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}