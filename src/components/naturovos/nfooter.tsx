import React from 'react'

export default function NFooter() {
  
  return (
    <div className='bg-solar-orange-primary py-0.5'>
      <p className="md:text-xs text-[8px] container mx-auto text-center text-gray-900">
        &copy; {new Date().getFullYear()} Solar Comércio e Agroindústria Ltda.
      </p>
    </div>
  )
}
