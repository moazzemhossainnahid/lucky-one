import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    return (
        <div>
            {
                cart.map(product => (
                    <div className='cartDiv'>
                        <img src={product.image} alt="" />
                        <h4>{product.name}</h4>
                        <h4><FontAwesomeIcon icon={faClose}/></h4>
                    </div>
                ))

            }

        </div>
    );
};

export default Cart;