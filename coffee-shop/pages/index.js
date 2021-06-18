import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../Components/hero'
import { CoffeeStory } from '../Components/coffeeStory'


export default function Home() {
  return (
   <div className='container mx-auto  min-h-screen mt-32 '>
   <Hero/>
   <CoffeeStory/>
   </div>
  )
}
