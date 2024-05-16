import React, { Children } from "react"



function UseCard ({children, Img}){

    return(<>
      <section className = "h-screen">
      <div
        className="bg-cover bg-center bg-no-repeat absolute inset-0 w-[661px]"
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