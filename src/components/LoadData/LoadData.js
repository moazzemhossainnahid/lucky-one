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

        if(cart.length < 4){
            const exists = cart.find(products => products.id === product.id);
            if(!exists){
                const newCart = [...cart, product];
                setCart(newCart);
            }
        }else{
            swal({
                title: "Sorry!",
                text: "You Can Select upto 4 Item!",
                icon: "error",
              });
        }
    };

    const chooseOne = (products) => {
        console.log(products);
        const randomPoint = products[Math.floor(Math.random()*products.length)];
        const {name, price} = randomPoint;
        if(randomPoint){
            swal({
                title: `Name: ${name}`,
                text: `Price: ${price}`,
                icon: "success",
              }); 

        }
    }
    const chooseAgain = () => {
        let cart = [];
        setCart(cart);

    }

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
                    <h4>Selected Items: {cart.length}</h4>
                    <div>
          
                        <Cart cart = {cart} chooseOne = {chooseOne} chooseAgain = {chooseAgain}></Cart>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadData;