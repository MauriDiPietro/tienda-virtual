import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from '../../context/Dataprovider';
import {useParams} from 'react-router-dom';
import { ProductItem } from "./ProductItem";

function ProductDetail(){

const value = useContext(DataContext)
const [products] = value.productos;
const [detalle, setDetalle] = useState([]);
const params = useParams();
// const [url, setUrl]= useState(0)
// const [images, setImages] = useState('');
const addCarrito = value.addCarrito;
let item=0

useEffect(()=>{
    products.forEach(prod=>{
        //console.log(prod.id, parseInt(params.id))
        // console.log('IMAGEN-------',prod.image.default)
        item=0
        if(prod.id === parseInt(params.id)){
            setDetalle(prod)
            // setUrl(0)
        }
    })
}, [params.id, products])

// useEffect(() =>{
//     const values = `${detalle.img1}${url}${detalle.img2}`;
//     setImages(values) 
//   },[url, params.id])

//   const handleInput = (e) =>{
//   const number = e.target.value.toString().padStart(2,'01')
//    setUrl(number)
//   }

  if(detalle.length < 1) return null;


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Detalle del producto</h1>
            
            { 
                <div className='detalles'>
                    <h2>{detalle.title}</h2>
                    <p className='price'>${detalle.price}</p>
                    <div className='grid'>
                    <p className="nuevo">Nuevo</p>
          <div className="tamano">
            <select placeholder="Tamaño" >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
            </select>
            <p>Tamaño</p>
          </div>
                    </div>
                    <button onClick={() => addCarrito(detalle.id)}>Add to Cart</button>
                    {
            detalle ? <img src={detalle.image.default} alt={detalle.title}/> : <img src='https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img' alt=''/>
                    }
                    {/* <img src={detalle.image} alt={detalle.title}/> */}
                    {/* <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} /> */}
                    <div className='description'>
                        <p><b>Description: </b>
                        Para corredores que valoran cada minuto y la velocidad es primordial, las nuevas Zapatillas Nike Air Max Excee son perfectas porque combinan una estética minimalista clásica, el estilo urbano de la marca junto con su tecnología Air max que te brinda mejores y amortiguadas pisadas que te darán estabilidad y confianza a la hora de correr en cualquier lugar donde vayas.
                        </p>
                    </div>
                </div>
            }
                <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        products.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
        </div>
        
    )
}

export default ProductDetail;