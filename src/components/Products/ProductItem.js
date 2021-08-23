import React from 'react';

export const ProductItem = ({id, title, price, image, category, cantidad}) => {
    return (
        <div className='producto'>
            <a href='/'>
            <div className='producto__img'>
                <img src={image.default} alt=''/>
            </div>
            </a>
            <div className='producto__footer'>
                <h1>{title}</h1>
                <p> {category} </p>
                <p className='price'>${price}</p>
            </div>
            <div className='buttom'>
                <button className='btn'>
                    Add to cart
                </button>
                <div>
                <a href='/' className='btn'>View</a>
                </div>
            </div>
        </div>
    )
}

// export default ProductItem;