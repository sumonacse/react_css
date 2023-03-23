
//==============css adding===============


// import { useState,useEffect } from "react";


// function App() {

//     let [number , setNumber] = useState(10);

//     let handleClick = () =>{
//       number++;
//       setNumber(number);
//     };

   

//     useEffect(()=>{
//         console.log("ami use effect");
//     },[number])  
//     return (
//       <>
//           <div style = {box} ></div>
//           <h1> {number} </h1>
//           <button onClick = {handleClick} >Click</button>
//       </>
//     );
// }
// let box = {
//   background: "red",
//   width:"300px",
//   height:"300px",
//   // marginTop:"10px"

// }
// export default App;






/* =================================================
        true hole box show , false hole not show
   =================================================*/

import { useState,useEffect } from "react";


function App() {

    let [show , setShow] = useState(false);

    let handleShow = () =>{
      setShow(!show);  //true thakle false r false thakle true korbe
    };

    return (
        <>

        {
          show && <div style = {box} ></div>  //else na thakle && diye korbo
          // show? <div style = {box} ></div> : ""
          // show? <div style = {box} ></div> : "<div style = {box} >cit es mern 2201</div>"
        }

        <button onClick={handleShow}>Click</button>
        
        </>
    );
}


let box = {
    background: "red",
    width:"300px",
    height:"300px",  
  };


export default App




