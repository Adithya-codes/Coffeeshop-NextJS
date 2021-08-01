import React from 'react'
import { Button } from './button'

export const CoffeeStory = () => {
    return (
        <div className='w-full flex  sm:flex-row sm:justify-center xl:items-center  mt-32'>
            <div className='the-story xl:w-3/6 xl:ml-24 '>
                <h1 className='text-heading font-extrabold mb-10 xs:text-4xl  '>The Coffee Story </h1>
                <p className='text-para font-normal xs:text-[1.4rem] text-justify  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat voluptates possimus id quibusdam delectus modi in laudantium? Quam eos iusto, illum, odio eum dolorum nulla ratione labore voluptas dolore magnam.</p>
               
               <Button text = 'Learn More' />
            </div>
            <div className='bean-img xs:mt-10 sm:w-6/12 xl:ml-14'>
                <img src="../images/coffee-beans.png" alt="" />
            </div>
            
        </div>
    )
}
