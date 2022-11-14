import React, { useState } from 'react';
import "./CartModal.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import CartElement from '../CartElement/CartElement';
import RandomProduct from '../RandomProduct/RandomProduct';

const CartModal = (props) => {
    //state to show the cart element div
    const [showElement, setShowElement] = useState(true);
    //here storing the random object
    const [randomProduct, setRandomProduct]= useState([]);

    //state to show/hide random data from ui
    const [randomShow, setRandomShow] = useState(false);

   
    const {cartData} = props;
    if(!props.show){
        return null;
    }

    
 
    // const deleteCart=(cartProduct, state)=>{
    //     const index = cartData.indexOf(cartProduct);
    //     if(index > -1){
    //         cartData.splice(index, 1);
    //         setShowElement(state);
    //     }
        
    // }
    
    //handle random
    const handleRandom=()=>{
        let productElement = cartData[Math.floor(Math.random()*cartData.length)];
        setRandomProduct(productElement);

        setRandomShow(true);
       
        
        
    }
    const resetCart=(state)=>{
        setShowElement(state);
        setRandomShow(state);
        setRandomProduct([]);
        window.location.reload();


    }

    return (
      
            <div className='modal'>
                <div className='modal-content'>

                    <div className='modal-header'>
                        <h3>My Cart</h3>
                        <div>
                        <button className='x-btn' onClick={props.onClose}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>

                    </div>
                    <div className='modal-body'>
                        <div className='cart-products'>
                            
                            {
                                cartData.map(cartProduct=> <CartElement
                                key={cartData.id}
                                cart={cartProduct}
                                // deleteCart={deleteCart}

                                showElement={showElement}
                                
                                >

                                </CartElement>)
                            }


                        </div>
                        <div className='cart-lucky-one-generator'>
                            <div>
                                <RandomProduct 
                                product={randomProduct} 
                                handleRandom={handleRandom}
                                randomShow={randomShow}>
                                    
                                </RandomProduct>
                            </div>

                            <div className='cart-random-reset-btn'>
                                <button className='cart-random-btn' onClick={handleRandom}>Choose Randomly</button>
                                <button onClick={()=>resetCart(false)} className='cart-reset-btn'>Reset</button>

                            </div>

                        </div>

                    </div>
                    <div className='cart-footer'>

                    </div>


                </div>

            </div>
            
      
    );
};

export default CartModal;