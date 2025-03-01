import React from "react";
import "./Login.css"
import Nike from "./nike.png";
import Home from "./Home";
const Login = (props) => {
  var userData = [
    { userName: "ponnar",passcode: 123, cart:[]},
    { userName: "nishok",passcode: 231, cart:[]},
    { userName: "karthi",passcode: 321, cart:[]}, 
  ];
   
  // function signup(){
  //   var userName = document.getElementById("userName").value;
  //   var userName = document.getElementById("passcode").value;
  //   console.log("userName","passcode");
    
  //  }
     
  const Signup=()=>{
var userName=document.getElementById("userName").value; 
var userPasscode=document.getElementById("passcode").value; 
var activeUserDetail=userData.filter((data,i)=>
{
  return userName==data.userName;
});
console.log(activeUserDetail);
if(activeUserDetail.length>0){
  if(activeUserDetail[0].passcode==userPasscode)
  {
    localStorage.setItem("userName", activeUserDetail[0].userName);
    window.location.replace("./Home");
  }else {
    alert("Wrong passcode");
    
  }     
}


  };

   

  return (
    <div className="background">
      <div className="box">
      < img className="image1" src={Nike} alt="" />
        <div>
        <p className="pt">UserName </p>

          <input id="userName" placeholder="Userid..." />
        </div>
        <div>
        <p className="jt">PassCode </p>
          <input id="passcode" placeholder="passcode..." />
         
        </div>
        <button onClick={Signup}  className="bt">Login</button>
      </div>
    </div>
  );
};

export default Login;
