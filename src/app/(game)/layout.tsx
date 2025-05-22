import { childProps } from '@/types/type'
import React from 'react'

export default function gameLayout({children}: childProps): React.ReactNode {
  return (
    <div className='p-2 min-h-[100vh] '>{children}</div>
  )
}
