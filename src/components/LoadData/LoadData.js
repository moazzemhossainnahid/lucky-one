import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayData from '../DisplayData/DisplayData';
import swal from 'sweetalert';
import './LoadData.css';

const LoadData = () => {
    const [drinks, setDrinks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('drinks.json')
            .then(res => res.json())
            .then(data => setDrinks(data))
    }, []);

    const addToCart = (product) => {
        
        // const newCart = [...cart, product];
        // setCart(newCart);
        // console.log(cart);

        if(cart.length < 4){
            const newCart = [...cart, product];
            setCart(newCart);
            console.log(cart);
        }else{
            swal({
                title: "Sorry!",
                text: "Only Select 4 Item!",
                icon: "error",
              });
        }
    };
    return (
        <div>
            <h2 className="display-4 fw-bold py-3">Express Shop</h2>
            <h4 className="">Select upto 4 Items</h4>
            <div id="mainSec" className="">
                <div id='cardDiv' className='container py-5'>
                    {
                        drinks.map(drink => <DisplayData 
                        key = {drink.id}
                        drink = {drink}
                        addToCart = {addToCart}
                        ></DisplayData>)
                    }
                </div>
                <div id="itemDiv" className="py-5">
                    <h3>Length: {cart.length}</h3>
                    <div>
          
                        <Cart cart = {cart} ></Cart>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadData;