import React from 'react'
import Head from 'next/head'
import Image from 'next/image'


import { Hero } from '../Components/hero'
import { CoffeeStory } from '../Components/coffeeStory'
import {CoffeePromise} from '../Components/coffeePromise'
import {Bestsellers} from '../Components/bestsellers'
import {Header} from '../Components/header'
import {Footer} from '../Components/footer'
import { useState } from 'react'

export default function Home() {

  
  return (
    
   <div className='w-full min-h-screen dark:bg-black'>
    <Header/>
    
   
   
   <div className='container mx-auto mt-24  '>
  
   <Hero/>
   <CoffeeStory/>
   <CoffeePromise/>
   <Bestsellers/>

   </div>
   <Footer/>
   </div>
  ) 
}
