import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import './LoadData.css';

const LoadData = () => {
    const [drinks, setDrinks] = useState([]);
    useEffect( () => {
        fetch('drinks.json')
            .then(res => res.json())
            .then(data => setDrinks(data))
    }, []);
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
                        ></DisplayData>)
                    }
                </div>
                <div id="itemDiv" className="">
                    <h3>calc</h3>
                </div>
            </div>
        </div>
    );
};

export default LoadData;