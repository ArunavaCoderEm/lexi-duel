import Features from '@/sections/features'
import Hero from '@/sections/hero'
import { classnameprop } from '@/types/type'
import React from 'react'

export default function Home({ classname }: classnameprop):React.ReactNode {
  return (
    <div className={`${classname} `}>
      <Hero classname={'px-4 py-5 min-h-80 w-full mt-5'} />
      <Features classname='px-4 py-5 min-h-80 w-full mt-5' />
    </div>
  )
}
