import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid w-100 d-flex flex-column 
            bg-dark align-items-center justify-content-center" style={{ "height": "100vh" }}>
                <h1 className='h4 m-3 ncolor'>Registration Form</h1>
                <form action="" className='d-flex flex-column align-items-center'>
                    <div className="form-group">
                        <input placeholder="Nickname" name="" id="" />
                    </div>
                    <div className="form-group">
                        <input placeholder="repeate password" type='password' name="" id="" />
                    </div>
                    <div className="form-group">
                        <input placeholder="password" type='password' name="" id="" />
                    </div>
                    <button type='submit' className='sb'>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
