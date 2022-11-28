import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'

export const Discover = () => {

    const ImagePath = `https://image.tmdb.org/t/p/w500`


    const [inp, setInp] = useState("")
    const [data, setData] = useState([])



    const fetchApi = async () => {
        const promise = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=30e931931f92cfbd864962a9432bbb08&language=en-US&query=${inp}&page=1&include_adult=false`)

        const data = await promise.json()

        setData(data.results)

    }

    useEffect(() => {
        fetchApi()
        console.log(data)
    }, [inp])


    return (
        <div>
            <Navbar />
            <div className="container d-flex align-items-center justify-content-center mb-5 mt-5">
                <input placeholder="Search..." name="" id="" className='srh' onChange={(e) => setInp(e.target.value)} />

            </div>

            <div className="container d-flex flex-wrap justify-content-center">
                {data && data.map((item) => {
                    return (
                        <>
                            <div className='st-slide-2 col-md-4 shadow' style={{ 'backgroundImage': `url('${ImagePath + item.poster_path}')` }}>
                                <Link to={`/details/movie/${item.id}`} className="cover position-absolute w-100 bottom-0">
                                    <h1 className='text-white fs-3'>{item.name || item.title || item.original_title}</h1>
                                    <p className='text-white' style={{ "fontSize": "13px" }}>{item.overview}</p>
                                    <Link to={`/details/movie/${item.id}`} className='btn btn-warning' style={{ "fontWeight": "bold" }}>Watch</Link>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
