import React from "react";
import ReactDOM from "react-dom";
import "./style.css"




// functional component in react
// JSx - javascript + xml

// 

const Hello = ()=>{
    let obj = {color:"red", textAlign:"center"}
    let a = 100

    return(
        <div>
            
            <h1 className="heading">hello world</h1>


            <h2 style={obj}> Abhishek </h2>
            

            <h3> {a} </h3>
            <h4> {5+6+7} </h4>

            <h5> {a+10+20} </h5>

            <p>Hey I am doing well</p>
        </div>
    )
       
} 


// v-17
ReactDOM.render(<Hello /> ,  document.getElementById("root") )









// function in js
// function app(){
//      return "hello"
// }
// app()