import React from 'react'

const Footer = () => {
  return (
    <footer className='footer flex-space-around'> 
       <form action="">
       <div className='flex-space-around'>
<label htmlFor="Subscribe"> Subscribe to newsletter: </label>
<input type="email" name="subscribe" id="subscribe" placeholder='your emil address'
className='fotter_input'/>
<button type='submit' className='btn-subsribe'>subscribe</button>
        </div>
       </form>
       
        <div>
<p>&copy; Copyright 2024 Express. all rights reseved.</p>
        </div>
    </footer>
     
    
  )
}

export default Footer
