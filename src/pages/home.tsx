import Features from '@/sections/features'
import Hero from '@/sections/hero'
import ReviewnCta from '@/sections/revire-cta'
import { classnameprop } from '@/types/type'
import React from 'react'

export default function Home({ classname }: classnameprop):React.ReactNode {
  return (
    <div className={`${classname} `}>
      <Hero classname={'px-4 py-5 min-h-80 w-full mt-5'} />
      <Features classname='px-4 py-5 min-h-80 w-full mt-10 bg-[#1B1B1B] rounded-xl' />
      <ReviewnCta classname={"px-4 py-5 min-h-96 w-full mt-5 bg-[#1B1B1B]"} />
    </div>
  )
}
