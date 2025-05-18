import { childProps } from '@/types/type'
import React from 'react'

export default function CustomContext({children}: childProps) {
  return (
    <div>{children}</div>
  )
}
