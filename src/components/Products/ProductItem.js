import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../../context/Dataprovider';


export const ProductItem = ({id, title, price, image, category, cantidad}) => {

const value = useContext(DataContext);
const addCart = value.addCart;

    return (
        <div className='producto'>
            <Link to={`product/${id}`}>
            <div className='producto__img'>
                <img src={image.default} alt=''/>
            </div>
            </Link>
            <div className='producto__footer'>
                <h1>{title}</h1>
                <p> {category} </p>
                <p className='price'>${price}</p>
            </div>
            <div className='buttom'>
                <button onClick={()=>addCart(id)}className='btn'>
                    Add to cart
                </button>
                <div>
                <Link to={`/product/${id}`} className='btn'>
                    View
                </Link>
                </div>
            </div>
        </div>
    )
}

// export default ProductItem;