import React from 'react';
import "./bat.css";


const Bat = (props) => {

  return (
    <div>
   <img src={props.img}alt=""/>
   <h1>{props.productName}</h1>
   </div>
  );
};

export default Bat