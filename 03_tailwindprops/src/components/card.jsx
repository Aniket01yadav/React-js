// import React from 'react'   

// function Card(props) {
//   return (
//     <div className="card w-80 ">
//     <img src="https://www.pexels.com/photo/vibrant-yellow-cosmos-flower-in-sunlight-31387106/" className="card-img-top" alt="image" />
//     <div className="card-body">
//         <h5 className="card-title">{props.UserName}</h5>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <button className='mt-4'>{props.btnText}</button>
//         {/* When btn text is not present Then this default value is shown in UI */}
//         {/* <button className='mt-4'>{props.btn || "Click me"}</button> */}
//     </div>      
//   </div>
//   )
// }

// export default Card





// -----------------------------------------------------------------------------------
//                             Another Way to write this code


import React from 'react'

//btnText="Click me", It mean when the btnText is not given/available then this text is shown in UI

function Card({UserName,btnText="Click me"}) {
  return (
    <div className="card w-80 ">
    <img src="https://www.pexels.com/photo/vibrant-yellow-cosmos-flower-in-sunlight-31387106/" className="card-img-top" alt="image" />
    <div className="card-body">
        <h5 className="card-title">{UserName}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className='mt-4'>{btnText}</button>
    </div>      
  </div>
  )
}

export default Card

