import React from 'react'
type Props={
    size:number
    isTitled?:boolean
    className?:string
}
const Logo = ({size,className,isTitled=true}:Props) => {
  return (
    <div className="flex items-center">
    <div className={`mr-2 grid grid-cols-2 gap-1 bg-white rounded p-2 ${className}`}>
      <div className={`h-${size} w-${size} rounded-full bg-blue-500`}></div>
      <div className={`h-${size} w-${size} rounded-full bg-gray-900`}></div>
      <div className={`h-${size} w-${size} rounded-full bg-gray-900`}></div>
      <div className={`h-${size} w-${size} rounded-full bg-gray-900`}></div>
    </div>
    {isTitled && <h1 className="text-xl font-bold text-primary">ChronoTask</h1>}
  </div>
  )
}

export default Logo