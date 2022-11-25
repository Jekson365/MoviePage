import React from 'react'

export const Pricing = () => {
    const pricing = [
        {
            name: "basic",
            price: "7.99$"
        },
        {
            name: "Standart",
            price: "10.99$"
        },
        {
            name: "Premium",
            price: "13.99$"
        },

    ]
    return (
        <div className='container d-flex flex-wrap w-75 flex-row align-items-center justify-content-center'>
            {pricing.map((each) => {
                return (
                    <>
                        <div className='pricing-box container d-flex align-items-center justify-content-center' style={{"background":"#ffcc00"}}>
                            <h3 className='h3'>{each.name}</h3>
                            <p className='fs-4'>{each.price}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
