import { Link } from 'react-router-dom'
import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 d-flex col-md-12 mb-4 mb-md-0 flex-column">
                            <h5 className="text-uppercase">Pages</h5>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/register'}>Register</Link>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/discover'}>discover</Link>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">MovieDB API</h5>

                            <p>
                                Our API is available for everyone to use. A TMDB user account is required to request an API key. Professional users are approved on a per application basis.
                                As always, you must attribute TMDB as the source of your data.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3"  >
                    © 2022 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">Jekson365</a>
                </div>
            </footer>
        </div>
    )
}
