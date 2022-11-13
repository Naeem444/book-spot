import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import "./Shop.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect(()=>{
        fetch("books.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])


    return (
        <div>
            <div className='shop-container'>
                <div className='product-section'>
                    
                    {
                        products.map(product=> <Products
                        key={product.id}
                        product={product}
                        ></Products>)

                    }


                </div>
               
                    <div className='cart-section'>
                        <button>
                            <span className='cart-btn-text'>Cart</span> 
                            <div className='cart-icon-lg'>
                                <span className='cart-btn-icon'><FontAwesomeIcon icon={faShoppingCart}/>
                                </span>
                                <span className='cart-badge'>0</span>
                            </div>
                        </button>

                    </div>
                </div>
        

            
        </div>
    );
};

export default Shop;