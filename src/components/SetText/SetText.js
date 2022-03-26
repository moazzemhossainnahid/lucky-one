import React from 'react';
import './SetText.css';

const SetText = () => {
    return (
        <div>
            <h3 className="py-5 display-4 bg-warning my-5">-Learn About React-</h3>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 py-5 border border-1 rounded my-3 shadow">
                    <h3 className=" fw-bold text-decoration-underline p-2">How React Works</h3>
                    <p className="">React designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 py-5 border border-1 rounded my-3 shadow">
                    <h3 className=" fw-bold text-decoration-underline p-2">How useState Works</h3>
                    <p className="">useState is a Hook in React. useState Allows state variable in Functional Components. the useState hook receive one Argument, which is the primary state. and returns two values is current state and a function that can be used to update the state. useState only use in the functional components.</p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 py-5 border border-1 rounded my-3 shadow">
                    <h3 className=" fw-bold text-decoration-underline p-2">State vs Props</h3>
                    <p className=""> <strong>State</strong> <br /> The state is an updatable structure that is used to contain data or information about the component and can change over time.It is the heart of the react Component.</p>
                    <p className=""> <strong>Props</strong> <br /> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetText;