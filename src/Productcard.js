import React from 'react'
import Shoe from "./shoe1.jpg";
import tees from "./tees.webp";
import cap from "./cap.jpg";

const Productcard = () => {
  return (
  
   <div id='cards'>
      <div className='card'>
      < img className="image3" src={Shoe} alt="" />
          <h1>Shark shoe
          </h1>
          <h2>
            Price : $4999
          </h2>
          <p>COLORS</p>
         <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
      </div>
    </div>
      

      
      <div className='card'>
      < img className="image3" src={ tees} alt="" />
          <h1>Tees Liner</h1>
          <h2>
            Price : $1999
          </h2>
          <p>COLORS</p>
         <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
      </div>
      </div>

      
      <div className='card'>
      < img className="image3" src={cap} alt="" />
          <h1>Black Cap</h1>
          <h2>
            Price : $99
          </h2>
          <p>COLORS</p>
         <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
          </div>
      </div>
      </div>


      
      
      );
};

export default Productcard;