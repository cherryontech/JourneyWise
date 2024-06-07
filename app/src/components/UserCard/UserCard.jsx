import React, { Children } from "react"



function UseCard ({children, Img}){

    return(<>
      <section className = "h-screen">
      <div
        className="bg-cover bg-center bg-repeat-y absolute inset-0 w-[661px] h-[1169px] z-[0]"
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