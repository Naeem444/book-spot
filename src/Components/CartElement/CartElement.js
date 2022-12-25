import React from 'react';
import "./CartElement.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const CartElement = (props) => {
    console.log(props.random)
    if(!props.showElement){
        return null;
    }

    const { name, img, price} = props.cart;
    
    const productName = name.length < 35 ? name : name.slice(0, 35).concat("...");

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
                <button className='delete-cart-element' 
                onClick={()=>props.deleteCart(props.cart)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                
            </div>
            
        </div>
    );
};

export default CartElement;