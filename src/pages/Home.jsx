import React from 'react'
import { Mainslider } from '../homepage/Mainslider'
import { Animations } from '../homepage/Animations'

export const Home = () => {
  return (
    <div>
      <Mainslider />
      <div className="container-fluid bg-dark p-5" style={{"height":"fit-content"}}>
        <div className="container ">
          <h1 className='fs-2 text-left m-4 sec-name'>Movie of The Week</h1>
          <Animations />
        </div>
        <div className="container ">
          <h1 className='fs-2 text-left m-4 sec-name'>Highest Score</h1>
          <Animations />  
        </div>
      </div>
    </div>
  )
}
