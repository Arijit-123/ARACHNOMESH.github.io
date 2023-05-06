import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer-menu'>
      <div>
      <ul>
        <li id='first-one'>Help </li>
        <li>Faq</li>
        <li>Review</li>
        <li>My Account</li>
        <li>Corporate</li>
        <li>Cantact Us</li>
      </ul>
      </div>
      <div>
      <ul>
      <li id='first-one'>Shop</li>
      <li>PureV</li>
      <li>Travel</li>
      <li>Acessories</li>
      </ul>
      </div>
      <div>
      <ul>
      <li id='first-one'>About</li>
      <li>Magazine</li>
      <li>Press</li>
      <li>Our Story</li>
      </ul>
      </div>
      <div >
       <p>Sign up for the newsletter</p> 
       <div className='input-place'>
        <input id='input' type='text' placeholder='Enter your email'></input>
        <button>Sign up</button>
        </div>
      </div>
    </div>
    
    
   
   

    <section id='sectioning'>
      <div className='curve'></div>
      
      <div className='curve1'></div>
      <div className='curve2'> </div>
      
    </section>
    <div className='twitter-group'>
  <div className='logo_star'> <img src='/images/Vector1.png'></img> </div>
   <div className='logo_star'> <img src='/images/Vector2.png'></img> </div>
   <div className='logo_star'><img src='/images/Vector3.png'></img> </div>
   <div className='logo_star'><img src='/images/Vector4.png'></img> </div>
    </div>
    </>
  )
}

export default Footer
