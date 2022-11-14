import React, { useState } from 'react';
import "./CartModal.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import CartElement from '../CartElement/CartElement';

const CartModal = (props) => {
    const [showElement, setShowElement] = useState(true);
   
    const {cartData} = props;
    

    if(!props.show){
        return null;
    }

    //state to show the cart element div
    

    const deleteCart=(cartProduct, state)=>{
        const index = cartData.indexOf(cartProduct);
        if(index > -1){
            cartData.splice(index, 1);
            setShowElement(state);
        }
        
    }

    return (
      
            <div className='modal'>
                <div className='modal-content'>

                    <div className='modal-header'>
                        <h3>My Cart</h3>
                        <div>
                        <button onClick={props.onClose}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>

                    </div>
                    <div className='modal-body'>
                        <div className='cart-products'>
                            
                            {
                                cartData.map(cartProduct=> <CartElement
                                key={cartData.id}
                                cart={cartProduct}
                                deleteCart={deleteCart}

                                showElement={showElement}
                                
                                >

                                </CartElement>)
                            }


                        </div>
                        <div className='cart-calculation'>
                            Here calculation will be shown

                        </div>

                    </div>
                    <div className='cart-footer'>

                    </div>


                </div>

            </div>
            
      
    );
};

export default CartModal;