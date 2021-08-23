import React, {useContext} from 'react';

import {DataContext} from '../../context/Dataprovider';
import {ProductItem} from './ProductItem';

function Products() {

const value = useContext(DataContext);
const [productos] = value.productos;
// console.log('data---->', productos)

    return (
        <div>
        <h1 className='title'>PRODUCTS</h1>
        <div className='productos'>
         {
             productos.map(producto =>(
                 <ProductItem key={producto.id} 
                 id={producto.id}
                 title={producto.title}
                 price={producto.price}
                 image={producto.image}
                 category={producto.category}
                 cantidad={producto.cantidad}
                 />

             ))
         }
       
        </div>
        </div>
    )
}

export default Products;