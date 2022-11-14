import React from 'react';
import "./CartElement.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const CartElement = (props) => {
    if(!props.showElement){
        return null;
    }



    const { name, img, price} = props.cart;
    const productName = name.length < 65 ? name : name.slice(0, 65).concat("...");

  

    return (
        <div className='cart-product-card'>
            <div className='cart-element-container'>
                <div className='cart-image-container'>
                    <img src={img} alt="book"></img>
                
                    
                </div>
                <div className='cart-product-details'>
                    <h5>{productName}</h5>
                    <h5>৳ {price}</h5>
                </div>
                <div className='delete-cart-element' >
                {/* onClick={()=>props.deleteCart(props.cart, false)} */}
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
            
            
        </div>
    );
};

export default CartElement;