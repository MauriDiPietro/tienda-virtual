import React, {useContext} from 'react';
import Img from '../../images/img01.jpg';
import {DataContext} from '../../context/Dataprovider';

function Cart() {

const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [cart, setCart] = value.cart;
const [total] = value.total;

const tooglefalse = () =>{
    setMenu(false)
}

//condicional clase carrito show
const show1 = menu ? "carritos show" : "carritos";
const show2 = menu ? "carrito show" :   "carrito";

const suma = (id) =>{
    cart.forEach((prod)=>{
        if(prod.id===id){
            prod.cantidad += 1;
        }
        setCart([...cart])
    })
}

const resta = (id)=>{
    cart.forEach((prod)=>{
        if(prod.id === id){
            prod.cantidad === 1 ? prod.cantidad = 1 : prod.cantidad -=1;
        }
        setCart([...cart])
    })
}

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
                            <box-icon name='up-arrow' type='solid' onClick={()=>suma(prod.id)}></box-icon>
                            <p className='cantidad'>{prod.cantidad}</p>
                            <box-icon name='down-arrow' type='solid' onClick={()=>resta(prod.id)}></box-icon>
                        </div>
                        <div className='remove__item' onClick={()=>removeProduct(prod.id)}>
                            <box-icon name='trash'></box-icon>
                        </div>
                    </div>
                ))
            }
            </div>
                <div className='carrito__footer'>
                    <h3>Total: ${total}</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
          
        </div>
    )
}

export default Cart;