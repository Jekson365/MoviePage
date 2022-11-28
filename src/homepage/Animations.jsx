import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

export const Animations = () => {
  const [data, setData] = useState([])
  const ImagePath = `https://image.tmdb.org/t/p/w500`


  var alldata = []

  const getDataFromApi = async (page) => {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=30e931931f92cfbd864962a9432bbb08&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
    const promise = await fetch(API)

    const data = await promise.json()

    alldata.push(data.results)

    setData(alldata)

    // const slicedData = data.results.slice(0, 10)

    // setData(slicedData)

  }



  useEffect(() => {
    for (var i = 1; i < 2; i++) {
      getDataFromApi(i)
    }
  }, [])


  return (
    <>
      <Swiper
        spaceBetween={50}
        navigation
        autoplay={{
          delay:2000
        }}

        
        className='mySwiper'
        style={{ 'height': "100%" }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((each) => {
          return (
            <>
              {each.map((item) => {
                return (
                  <>
                    <SwiperSlide className='st-slide shadow' style={{ 'backgroundImage': `url('${ImagePath + item.poster_path}')` }}>
                      <Link to={`/details/movie/${item.id}`} className="cover position-absolute w-100 bottom-0">
                        <h1 className='text-white fs-3'>{item.name || item.title || item.original_title}</h1>
                        <p className='text-white' style={{ "fontSize": "13px" }}>{item.overview}</p>
                        <Link className='btn btn-warning' 
                        to={`/details/movie/${item.id}`}
                        style={{ "fontWeight": "bold" }}>Watch</Link>
                      </Link>
                    </SwiperSlide>
                  </>
                )
              })}
            </>
          )
        })}
      </Swiper>

    </>
  )
}
