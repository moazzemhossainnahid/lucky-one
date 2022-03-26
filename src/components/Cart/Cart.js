import { faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const {cart, chooseOne} = props;
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

                                
                <div className="py-5">
                    <a href="#" className='btn btn-outline-danger m-2' onClick={() => chooseOne()}>Choose 1 For Me <FontAwesomeIcon icon={faArrowRight}/></a>
                    {/* <a href="#" className='btn btn-outline-success m-2' onClick={() => ChooseAnother}>Choose Again <FontAwesomeIcon icon={faArrowRight}/></a> */}
                </div>

        </div>
    );
};

export default Cart;