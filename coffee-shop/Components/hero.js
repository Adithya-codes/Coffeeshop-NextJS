import React from 'react'
import { Button } from './button'

export const Hero = () => {
    return (

        <div className='hero-section flex w-full xs:flex-wrap '>
        <div className='hero-content'>
            <h1 className='font-heading text-heading font-extrabold xs:text-5xl mb-3 '> Let's coffee </h1>
            <h2 className='font-heading text-para font-bold xs:text-[1.7rem]'> A lot can happen over a coffee. </h2>
            <Button text='Order Now'/>
            
        </div>

        <div className='hero-image w-full xs:mt-24'>
            <img src="../images/coffeeIcon.png" alt="" className='' />
          
        </div>
        </div>
    )
}
