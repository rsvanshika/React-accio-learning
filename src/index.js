import React from "react" //import react
import ReactDOM  from "react-dom"
import "./style.css" //to link css







/*
index.js= is default file
-we will not add anything in index.js
-
 v-17
RenderDOM-react convert it into js


RULES TO BE FOLLOWED
1.make sure name of file should match with function name in a component
function name should[start with capital letter]
2.App.js is a special file suppose you have many component app.js will collect
 all the components so later on we just need to call only App.js


 //jsx= javascript +xml

*/


















// import Xyz from "./App.js"(worl same as above just change name while calling also)

// import {Hello,Hello1} from "./App.js"
//  import * as obj from "./App.js"
 // {*means everything}
  //obj={Hello,Hello1} 
  //to call obj.Hello                   

//----------  function in js-----
// function hello(){
//     return "Hello World"
// }

//hello()  [function]


//------functional component in react (Name start with capital letter)-----

// function Hello(){
//   return(
//     <h1>Hello</h1>
//   )
// }

//how we call react function?
//  v-17 syntax
  


//function component(always return a tag)

//this is not html this is jsx(html+extra feature)
// everything inside {} is treated as js //to apply inline css
const Hello=()=>{
    let a=23;
    
    let styleObj={
        textAlign:"center",
        color:"red"
    }
    let batchName="Unstoppable"
    return (
        <div className="section">
        {/* <h1 style={{color:"red",textAlign:"center"}}>Hello World</h1> */}
        <h1 style={styleObj}>Hello react</h1> 
        {/* SAME AS ABOVE */}
        <p>Welcome to the class -{batchName}</p>
        <p> {2*a} </p>
        </div> 
        )
    }




    ReactDOM.render(<Hello /> ,document.getElementById("root")) 
// ---NOte----
    /*
      we basically don't write any component inside index.js
       we make different file for component


    */
     



    //(how to call a component <Hello> </Hello>   or <Hello />)
    //not supported by version 18(to link the js with html)
    //v17 way
    // ReactDom.render(<Hello />,document.getElementById("root"))
    // ReactDom.render(<><obj.Hello /> <obj.Hello1 /></>,document.getElementById("root"))
      
