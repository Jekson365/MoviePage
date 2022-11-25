import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css';
import "swiper/css/pagination";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Mainslider = () => {

    const [item, setItem] = useState([])


    const API = `https://api.themoviedb.org/3/trending/all/day?api_key=30e931931f92cfbd864962a9432bbb08`
    const ImagePath = `https://image.tmdb.org/t/p/w1280`


    const getTrending = async () => {
        const promise = await fetch(API)
        const data = await promise.json()

        setItem(data.results)

    }



    useEffect(() => {
        getTrending()
    }, [])

    return (
        <>
            <Swiper
                slidesPerView={1}
                className='mySwiper bg-dark' style={{ "height": "100vh" }}
                pagination={true}
                autoplay={{
                    delay: 1500
                }}
                modules={[Pagination, Autoplay]}

            >

                {item.map((each) => {
                    const { original_language } = each
                    return (
                        <>
                            <SwiperSlide key={each.id} className='swiper-item-slide' style={{ "backgroundImage": `url(${ImagePath + each.backdrop_path})` }}>
                                <Link style={{ "textDecoration": "none" }}>
                                    <div className="content d-flex flex-column align-items-start 
                                    justify-content-end w-md-75 w-75 p-5 h-100">
                                        <h1 className='fs-1 text-white'>{each.original_title || each.name}</h1>
                                        <p className='fs-6 text-white'>{each.overview}</p>
                                        <Type lang={original_language} tp={each.media_type} score={each.vote_average} />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </>
                    )
                })}

            </Swiper>
        </>
    )
}

const Type = ({ lang, tp,score}) => {
    return (
        <>
            <div className="d-flex flex-row align-items-center">
                <p className='text-white btn btn-success m-1' style={{"fontWeight":"bold"}}>{lang}</p>
                <p className='text-white btn btn-warning m-1'>{tp}</p>
                <p className='text-white btn btn-danger m-1'>{Math.floor(score)}</p>
            </div>
        </>
    )
}
