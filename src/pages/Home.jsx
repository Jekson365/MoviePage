import React from 'react'
import { Mainslider } from '../homepage/Mainslider'
import { Animations } from '../homepage/Animations'
import { Highestscore } from '../homepage/Highestscore'
import { Pricing } from '../homepage/Pricing'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Mainslider />
      <div className="container-fluid bg-dark p-5" style={{ "height": "fit-content" }}>
        <div className="container ">
          <h1 className='fs-2 text-left m-4 sec-name'>Movie of The Week <hr /></h1>
          <Animations />
        </div>
        <div className="container ">
          <h1 className='fs-2 text-left m-4 sec-name'>TV-show of the week <hr /></h1>
          <Highestscore />
        </div>
      </div>
      <div className="container-fluid bg-dark flex-column d-flex align-items-center justify-content-center" style={{'height':"100vh"}}>
        <h1 className='fs-2 text-left text-center sec-name'>Pricing <hr /></h1>
        <Pricing />
      </div>
      <Footer/>
    </div>
  )
}
