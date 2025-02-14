import React from 'react'

export default function Footer() {
  
  return (
    <div className='bg-solar-blue-secundary py-0.5'>
      <p className="md:text-xs text-[8px] container mx-auto text-center text-solar-gray-light">
        &copy; {new Date().getFullYear()} Solar Comércio e Agroindústria Ltda.
      </p>
    </div>
  )
}
