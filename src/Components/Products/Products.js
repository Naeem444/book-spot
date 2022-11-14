import React from 'react';
import "./Products.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus , faStar} from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {name, price, author, img, genre, ratings} = props.product;
    return (
        <div className='individual-cart-container'>
            <div className='product-card'>
                <div className='img-container'>
                    <img src={img} alt="Book"></img>
                </div>
                <div  className='card-details'>
                    <div className='product-name'>
                        <h4>{name}</h4>

                    </div>
                    <div className='author-genre'>
                         <small><strong>Author:</strong> <span className='author-genre-style'>{author}</span ></small><br></br>
                         <small><strong>Genre:</strong> <span className='author-genre-style'>{genre}</span></small><br></br>
                         <small><span className='ratings'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span> {ratings} </small>
                         
                    </div>
                    
                    {/* <small>Author: <span>{author}</span></small> */}

                    <div className='add-to-cart-btn'>
                    <h2><span>৳ </span>{price}</h2>
                        <button onClick={()=>props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> </button>
                    </div>

                </div>

            </div>

            
        </div>
    );
};

export default Products;