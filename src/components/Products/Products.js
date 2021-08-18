import React from 'react';
import img01 from '../../images/img01.jpg';

function Products() {
    return (
        <div>
        <h1 className='title'>PRODUCTS</h1>
        <div className='productos'>
            <div className='producto'>
            <a href='#'>
            <div className='producto__img'>
                <img src={img01} alt=''/>
            </div>
            </a>
            <div className='producto__footer'>
                <h1>Title</h1>
                <p> Category </p>
                <p className='price'>$400</p>
            </div>
            <div className='buttom'>
                <button className='btn'>
                    Add to cart
                </button>
                <div>
                <a href='#' className='btn'>View</a>
                </div>
            </div>
        </div>
        <div className='producto'>
            <a href='#'>
            <div className='producto__img'>
                <img src={img01} alt=''/>
            </div>
            </a>
            <div className='producto__footer'>
                <h1>Title</h1>
                <p> Category </p>
                <p className='price'>$400</p>
            </div>
            <div className='buttom'>
                <button className='btn'>
                    Add to cart
                </button>
                <div>
                <a href='#' className='btn'>View</a>
                </div>
            </div>
        </div>
        <div className='producto'>
            <a href='#'>
            <div className='producto__img'>
                <img src={img01} alt=''/>
            </div>
            </a>
            <div className='producto__footer'>
                <h1>Title</h1>
                <p> Category </p>
                <p className='price'>$400</p>
            </div>
            <div className='buttom'>
                <button className='btn'>
                    Add to cart
                </button>
                <div>
                <a href='#' className='btn'>View</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Products;