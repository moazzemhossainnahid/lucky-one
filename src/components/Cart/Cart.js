import {  faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, chooseOne, chooseAgain} = props;
    return (
        <div>

            <div>
            {
                cart.map(product => (
                            <div className='cartDiv'>
                                <img src={product.image} alt="" />
                                <h4>{product.name}</h4>
                                <h4><FontAwesomeIcon icon={faTrash}/></h4>
                            </div>
                ))

            }
            </div>

            <div className='py-5'>
                <button className='btn btn-outline-danger m-2' onClick={() => {chooseOne(cart)}}>Choose One for me <FontAwesomeIcon icon={faArrowRight}/></button>
                <button className='btn btn-outline-success m-2'  onClick={() => {chooseAgain()}}>Choose Again <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>

        </div>
    );
};

export default Cart;