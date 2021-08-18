import React from 'react';
import sportstore from '../../images/sportstore.png';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
            {/* <div className='menu'>
                <box-icon name='menu'></box-icon>
            </div> */}
            <Link to='/'>
                <div className='logo'>
                    <img src={sportstore} alt='' width='100'/>
                </div>
            </Link> 
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/products'>PRODUCTS</Link>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name='cart'></box-icon>
                <span className='item-total'>
                    0
                </span> 
            </div>
        </header>
    )
}

export default Header;