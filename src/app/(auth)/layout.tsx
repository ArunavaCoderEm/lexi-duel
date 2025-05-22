import { childProps } from '@/types/type'
import Image from 'next/image'
import React from 'react'

export default function Authlayout({children}: childProps) {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>{children}
    <Image src={"/Images/auth.jpeg"} className='md:block hidden object-cover h-full' width={800} height={1000} alt={"Authimg"} />
    </div>
  )
}
