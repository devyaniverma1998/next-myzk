// *********************
// Role of the component: Simple H2 heading component
// Name of the component: Heading.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Heading title={title} />
// Input parameters: { title: string }
// Output: h2 heading title with some styles 
// *********************

import React from 'react'

const Heading = ({ title } : { title: string }) => {
  return (
    <h1
    className="
      text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  
      font-extrabold text-center mt-20 
      bg-gradient-to-r from-black via-[#2563eb] to-[#2563eb] 
      bg-clip-text text-transparent
    "
  >
   { title }</h1>
  )
}

export default Heading