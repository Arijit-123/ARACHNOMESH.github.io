import React from 'react'

const Menubar = () => {
  return (
    <div className='menubar'>
      <div className='logo'>
        <img src='/images/ARACHNOMESH.png'></img>
      </div>
        <div id='menus'>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Bottles</li>
      <li>About</li>
      <li>Contacts</li>
     <li> <button id='button-menu'>Login</button></li>
    </ul>
      </div>

      
    </div>
  )
}

export default Menubar
