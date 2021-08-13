import React from 'react';
import sportstore from '../../images/sportstore.png';

function Header(){
    return (
        <header>
            {/* <div className='menu'>
                <box-icon name='menu'></box-icon>
            </div> */}
            <a href='#'>
                <div className='logo'>
                    <img src={sportstore} alt='' width='100'/>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>HOME</a>
                </li>
                <li>
                    <a href='#'>PRODUCTS</a>
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