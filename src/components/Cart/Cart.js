import React, {useContext} from 'react';
import Img from '../../images/img01.jpg';
import {DataContext} from '../../context/Dataprovider';

function Cart() {

const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [cart, setCart] = value.cart;

const tooglefalse = () =>{
    setMenu(false)
}

//condicional clase carrito show
const show1 = menu ? "carritos show" : "carritos";
const show2 = menu ? "carrito show" :   "carrito";

const removeProduct = (id) =>{
    if(window.confirm('Do you want to remove this product?')){
        cart.forEach((item, index)=>{
            if(item.id === id){
            item.cantidad = 1;
            cart.splice(index, 1)
        }
        })
    }
    setCart([...cart])
}

    return (
        <div className={show1}>
            <div className={show2}>
                <div className='carrito__close' onClick={tooglefalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2>Your Cart</h2>
                <div className='carrito__center'>
                { cart.map((prod)=>(
                    <div className='carrito__item'>
                        <img src={prod.image.default} alt=''/>
                        <div>
                            <h3>{prod.title}</h3>
                            <p className='price'>${prod.price}</p>
                        </div>
                        <div>
                            <box-icon name='up-arrow' type='solid'></box-icon>
                            <p className='cantidad'>{prod.cantidad}</p>
                            <box-icon name='down-arrow' type='solid'></box-icon>
                        </div>
                        <div className='remove__item' onClick={()=>removeProduct(prod.id)}>
                            <box-icon name='trash'></box-icon>
                        </div>
                    </div>
                ))
            }
            </div>
                <div className='carrito__footer'>
                    <h3>Total: $2000</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
          
        </div>
    )
}

export default Cart;