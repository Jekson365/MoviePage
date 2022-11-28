import { cssNumber, each } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Footer} from '../components/Footer'
import { Navbar } from '../components/Navbar.jsx'
import { useLocation } from 'react-router-dom'

export const Details = () => {

  const [data, setData] = useState([])

  const [background, setBackground] = useState(null)

  const backdropPath = `https://image.tmdb.org/t/p/w1280`
  const ImagePath = `https://image.tmdb.org/t/p/w500`

  const id = useParams()
  const location = useLocation()




  const getItem = async (type) => {
    const API = `https://api.themoviedb.org/3/${type}/${id.id}?api_key=30e931931f92cfbd864962a9432bbb08`

    const promise = await (fetch(API))

    const data = await promise.json()

    setData(data)
    console.log(data)

  }
  useEffect(() => {
    if (location.pathname.includes("tv")) {
      getItem("tv")
      console.log("tv")
    }
    else {
      getItem("movie")
      console.log("movie")
    }

    setBackground(data.backdrop_path)
  }, [])

  return (
    <>
      <Navbar />
      <div className='container-fluid d-cover d-flex align-items-center justify-content-center' style={{
        "height": "100vh",
        "backgroundImage": `url('${background != null ? ImagePath + data.poster_path : backdropPath + data.backdrop_path}')`
      }}>
        <div className="container blr d-flex flex-row p-4 flex-wrap shadow">
          <div className="col-md-4 bg-danger h-100" style={{ "overflow": "hidden" }}>
            <img src={ImagePath + data.poster_path} className='w-100 h-100' style={{ "objectFit": "cover" }} />
          </div>
          <div className="col-md-8 p-3">
            <h2 className='h2'>{data.original_name || data.title || data.original_title || data.name}</h2>
            <p className='p text-white'>{data.first_air_date}</p>
            <p className='p text-white'>In Production: {data.in_production ? <span className='p-1 rounded bg-success'>Yes</span> : <span className='p-1 rounded bg-danger'>No</span>}</p>
            <h3 className='h3 text-white'>Overview</h3>
            <p className="p text-white fs-6">{data.overview}</p>
            <div className="review d-flex align-items-center">
              <p className='p text-white p-1'>Popularity: </p>{data.popularity < 2000 ? <p className='p bg-danger text-white p-1 rounded'>{data.popularity}</p> : <p className='p bg-success text-white p-1 rounded'>{data.popularity}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
