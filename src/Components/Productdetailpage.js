import React from 'react'

const Productdetailpage = () => {
  return (
    <>
    <div className='menubar'>
      <div className='logo'>
      <img src='/images/ARACHNOMESH.png'></img>
     <img  id='img' src='/images/mag.png'></img>
      </div>
      <div id='menus'>
        <ul>
      <li>Home</li>
      <li>About</li>
      <li> <img  id='img' src='/images/person.png'></img></li>
      <li>  <img  id='img' src='/images/heart.png'></img></li>
      </ul>
      </div>
     
    </div>
    <div className='img-detail'>
       <div className='bottle-filter'>
        <div className='Bottle-head'>
        <h1>Bottle Filtered_</h1>
        <div className='submenu-options'>
        <ul>
          <li><button>General info</button></li>
          <li>Product details</li>
          <li>Reviews</li>
          
        </ul>
        </div>
        </div>
        <div className='bottle-mis'>
        <div className='uniqueimage'>
          <div className='image-ottle'>
          <div id='cap-image'><span><img src='/images/123.png'></img></span></div>
        <div  id='bottle-image'><img src='/images/bottle-new.png'></img></div>
        </div>
        </div>
        
        

        <div className='second-section'>
          <div>
          <span className='letter'>$995 price</span>&nbsp;<s>$300</s> &nbsp;<button id='button-new'>-50%</button>
        <p></p>
        <span>Color</span>
        <div className='button-insulated'>
           <div>
            <img id="dot-image" src='/images/color.png'></img>
            <img id="dot-image" src='/images/color.png'></img>
            <img  id="dot-image" src='/images/color.png'></img>
            </div>
           <div className='insulated-button' id="ins-button"><button>Insulated</button></div> 
         <div>   <button className='insulated-button'>Non-Insulated</button></div>
         
        </div>
        <span>Size</span>
        <div className="options-menu">
        <select name="options" >
       <option value="options">options</option>
       <option value="options">options</option>
        <option value="options">options</option>
        <option value="options">options</option>
         </select>
        </div>
        <div className='third-line'>
          <div><input type='number'></input></div>
          <div className='transact-button'><button id='add-to-cart'><img  src='/images/cart.png'></img> &nbsp; Add to cart</button></div>
          <div className='transact-button'><button> <img  src='/images/heart.png'></img> &nbsp;  Favourites</button></div>
        </div>
        <h3>Delivery</h3>
        <div>
            <p>Free Standart shipping orders over 35$ before tax</p>
            <table>
            <tr>
         <th>Type</th>
        <th>How Long</th>
          <th>How Much</th>
           </tr>
           <tr>
           <td>Standart Delivery</td>
           <td>1-4 business days</td>
           <td>$4.50</td>
           </tr>
           
           <tr>
             <td>Express Delivery</td>
             <td>1 business day</td>
              <td>$10.00</td>
         
           </tr>
           
           <tr>
             <td>Pickup in store</td>
             <td>1 business day</td>
              <td>$10.00</td>
           </tr>
            </table>
        </div>
        <div>
            <p>Return</p>
            <p>You have 15 days to return the item usinga any of the method</p>
            <p>.Free store return </p>
            <p>Free return via USPS Dropoff service</p>
        </div>
        <hr></hr>
        </div>
        <div className='card-picture'>
        <div className='trans-card'> <img src='/images/visa (1).png'></img></div>
         <div className='trans-card'> <img  src='/images/master-card.png'></img></div>
         <div className='trans-card'> <img  src='/images/pay-pal.png'></img></div>
        
         </div>
        </div>
      </div>
      
      </div>

      
        </div>
      <div className='images-list-one'>
          <div className='image-lower-detail'> <img  id="dot-image" src='/images/lower-image-3.png'></img></div>
          <div className='image-lower-detail'><img  id="dot-image" src='/images/lower-img2.png'></img></div>
          <div className='image-lower-detail'> <img  id="dot-image" src='/images/lower-image-3.png'></img></div>
          <div className='image-lower-detail'> <img  id="dot-image" src='/images/cap-one.png'></img></div>
          <div className='image-lower-detail' id='last-img'> <img  id="dot-image" src='/images/lower-img-5.png'></img></div>
        </div>
      <div id='recommendation'>Recommendation_</div>
      <div className='product-catalogue'>
        <div className='image-card-below'>
          <div className='div-square'>
        <img src='/images/bottl-one.png'></img>
        </div>
        <div className='letter'> Manaco- green</div>
        <div >Pure V</div>
        </div>
       
        <div  className='image-card-below' >
          <div className='div-square'>
        <img src='/images/bottl-2.png'></img>
        </div>
        <div className='letter'>Obsidian Pearl</div>
        <div >Filter V</div>
        </div>
        
        <div  className='image-card-below'>
        <div className='div-square'><img src='/images/pitcher-2.png'></img></div>
        <div className='letter'>Pure Snow</div>
        <div >Jug V</div>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default Productdetailpage
