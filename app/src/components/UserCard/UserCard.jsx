import React, { Children } from "react"
import './userCard-custom.css'



const UseCard = ({children, Img}) => {

    return(<>
      <section id="cardcontainer" className = "userCard-custom">
      <div
        id="bgimage"
        style={{ backgroundImage: `url(${Img})` }}
      >
        {
            children &&
        <div> {children}</div>
           
        }
       
      </div>
    </section>
    </>)
}

export default UseCard