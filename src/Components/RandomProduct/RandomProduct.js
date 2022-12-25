import React from 'react';
import "./RandomProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'


const RandomProduct = (props) => {
    //hide the card in the ui
    if(!props.randomShow){
        return null;
    }
    
    const {name, img, price} = props.product;
    console.log(props.product);
    const productName = name.length < 65 ? name : name.slice(0, 65).concat("...");
     

    return (
        <div>
            <div className='cart-random-container'>
                <div className='cart-random-product'>
                    {/* -------code repeatation from cartElement; I will make it efficient later----- */}
                    <div className='cart-element-container'>
                        <div className='cart-image-container'>
                            <img src={img} alt="book"></img>
                        </div>
                        <div className='cart-product-details'>
                            <h5>{productName}</h5>
                            <h5>৳ {price}</h5>
                        </div>
                        {/* <button className='delete-cart-element' >
                onClick={()=>props.deleteCart(props.cart, false)}
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button> */}
                
                    </div>


                    {/* ------------ */}

                </div>
               
            </div>
            
        </div>
    );
};

export default RandomProduct;