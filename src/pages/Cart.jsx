import React from 'react'
import {Helmet} from "react-helmet";
const Cart = () => {
  return (
    <>
     <Helmet>
                <title>cart</title>
            </Helmet>
            <div className='flex-space-around'>
              <div className='sidebar-container'>
                <productSidebar />
              </div>
              <div className='main-container'>
                <h2> list of all products</h2>
              </div>
            </div>
    </>
    
  )
}

export default Cart
