import logo from './logo.svg';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Menubar from './Components/Menubar';
// import Midspace from './Components/Midspace';
// import Bottlecomp from './Components/Bottlecomp';
import Ourwork from './Components/Ourwork';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Productdetailpage from './Components/Productdetailpage';
import Ourworklower from './Components/Ourworklower';

function App() {
  const { ref:myRef, inView:myElementIsVisible } = useInView();
  const { ref:capRef, inView:myCapIsVisible } = useInView();
  const { ref:bottleRef, inView:myBottleIsVisible } = useInView();
  return (
    <>

    <Menubar/>
    <div className='ellipse'>
      
      <div ref={capRef} >
        <div>
        <div  >
          <span className={ `${myCapIsVisible ? 'cap': ''}`}>
        <img src='/images/cap.png'></img>
        </span>
      </div>
      
        </div>
        <div className='text'>
          <h1><p>Self Cleaning bottle</p> <p>in 60 s</p></h1>
          <p>Hit refresh with the intelligently clean bottle built for adventure</p>
           <button className={ `${myCapIsVisible ? 'top-button': ''}`} id='button-menu'>KNOW MORE</button>
          </div>
        <div> 
      <img className={ `${myCapIsVisible ? 'main-image': ''}`} src="/images/Ellipse 3.png"></img>
      </div> 
      
      
      <div>
      <img src="/images/bottle.png"></img>
         </div>
      </div>
     
    </div>
    {/* <Midspace/> */}
    {/* <Bottlecomp/> */}
    <div className='bottle-detail'  >
    <div className='bottle-part' ref={bottleRef}>
      <div className='bottle-one '>
        <span className={ `${myBottleIsVisible ? 'bottle-test bottle-detail': 'none'}`} id='bottle1'>
      <img src='/images/bottleone.png'></img>
      </span>
      </div>
      
      <div className='bottle-two ' id='bottle2'>
      <span className={ `${myBottleIsVisible ? 'bottle-subtest': 'none'}`}>
      <img src='/images/bottletwo.png'></img>
      
      </span>
      </div>
      
      <div className='bottle-three bottle-test' >
      <span className={ `${myBottleIsVisible ? 'bottle-test': 'none'}`} id='bottle3'>
      <img src='/images/bottlethree.png'></img>
      </span>
      </div>
      <div className='bottle-four bottle-subtest'>
        <span className={ `${myBottleIsVisible ? 'bottle-subtest': 'none'}`} id='bottle4'>
      <img src='/images/bottlefour.png'></img>
      </span>
      </div>
      <div className='smart-way-text'>A smart way to sip</div>
      </div>

      
    </div>
    <Ourwork/>
    <Ourworklower/>
    <Testimonial/>
   
    <Productdetailpage/>
    <Footer/>
    </>
  );
}

export default App;
