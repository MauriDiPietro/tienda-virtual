import React from 'react';
import Portada from '../../images/inicio.jpg';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <div className='inicio'>
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <Link to='/products'>
                <h1>Products</h1>
            </Link>
            <img src={Portada} alt='Home'/>
        </div>
    )
}

export default Home;