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
    //delete from cart
    const deleteCart = (cartProduct)=>{
        const restProducts = cart.filter(product=> product.id !== cartProduct.id);
        setCart(restProducts);
    }
 
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

                    <p>Props vs State: props are variables passed to it by its parent component. State is still variables, but directly initialized and managed by the component.
                    We send props via attribute of a component. We use state to keep track of certain changes in any event. props are read only and state change can be asynchronous. Props cannot be modified. States can be modified using this.setState.    
                    </p>
                    <p>How useState Works: usestate hook helps us to have state variables in function components. The function components are not stateless anymore. Due to this reason, React suggests calling them “function components”. useState is a function that accepts the initial state as an argument and returns a state value and a function to update value. </p>


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

                        <CartModal 
                        show={show} 
                        onClose={()=>setShow(false)} 
                        cartData={cart}
                        deleteCart={deleteCart}
                        ></CartModal>

                    </div>
            </div>
        

            
        </div>
    );
};

export default Shop;