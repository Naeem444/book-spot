import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import "./Shop.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import CartModal from '../CartModal/CartModal';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch("books.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    //cart data handling
    const handleAddToCart=(selectedProduct)=>{
       
        const exists = cart.find(cartProduct=> selectedProduct.id === cartProduct.id);
        if(!exists && cart.length < 4){
            const newCart = [...cart, selectedProduct];

            setCart(newCart);
        }
       
        



    }
    // console.log(cart);




    //modal handling
    const [show, setShow] = useState(false);

    const handleModal=(query)=>{
        setShow(query);
    }


    return (
        <div>
            <div className='shop-container'>
                <div className='product-section'>
                    
                    {
                        products.map(product=> <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Products>)

                    }


                </div>
               
                    <div className='cart-section'>
                        <button className='cart-btn' onClick={()=>handleModal(true)}>
                            <span className='cart-btn-text'>Cart</span> 
                            <div className='cart-icon-lg'>
                                <span className='cart-btn-icon'><FontAwesomeIcon icon={faShoppingCart}/>
                                </span>
                                <span className='cart-badge'>{cart.length}</span>
                            </div>
                        </button>

                        <CartModal show={show} onClose={()=>setShow(false)} cartData={cart}></CartModal>

                    </div>
            </div>
        

            
        </div>
    );
};

export default Shop;