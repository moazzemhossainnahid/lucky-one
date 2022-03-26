import React from 'react';
import './DisplayData.css';

const DisplayData = (props) => {
    const {id, name, price, image} = props.drink;
    return (
        <div className=''>
            <div className="card mx-auto my-2" style={{width:'18rem'}}>
                    <img className='card-img-top' src={image} alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-around align-items-center">
                    <h5 id='idStyle' className="card-title">{id}</h5>
                    <h5 id='nameStyle' className="card-title">{name}</h5>
                    </div>
                    <h4 className="card-text py-3">Price: ${price}</h4>
                    <a href="#" className="btn btn-outline-danger">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;