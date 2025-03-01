import React, { useEffect,useState} from 'react'
import Nike from "./nike.png";
import Productcard from './Productcard';
import axios from 'axios'
 
const Home = () => {
  const[productData,setproductData]=useState([]);
  async function getData()
  {
    await axios.get('https://dummyjson.com/products').then((res)=>{
    setproductData(res.data.products);
    

    });
  }
  useEffect(() =>{
    getData();
  },
[]);
console.log(productData);

  return (
    <div>
    <nav className="navbar">
     
      < img className="image" src={Nike} alt="" />
      <input type="text" placeholder="Search products..." className="searcha_bar" />
      
      <div className="links">
        <p><a href="/home" className='l'> Home30</a></p>
        <p><a href="#" className='m'>Contact</a></p>
        <p><a href="#" className='p'>items</a></p>
      </div>
     
    </nav>
    
    <Productcard/>






 

    </div>
  )
}

export default Home;