import React, {useContext} from 'react';
import sportstore from '../../images/sportstore.png';
import { Link } from 'react-router-dom';
import {DataContext} from '../../context/Dataprovider';

function Header(){

const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [cart] = value.cart

//console.log(menu)

const tooglemenu = () => {
    setMenu(!menu)
}

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
            <div className='cart' onClick={tooglemenu}>
                <box-icon name='cart'></box-icon>
                <span className='item-total'>
                    {cart.length}
                </span> 
            </div>
        </header>
    )
}

export default Header;