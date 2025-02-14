'use client';
import Image from 'next/image';
import DropDown from './DropDown';

export default function SHeader() {
  return (
    <div className='bg-solar-blue-secundary h-16 min-h-16'>
      <div className='container m-auto h-full flex items-center justify-between'>
        <div>
          <Image
            width={150}
            height={50}
            src={require('@/assets/images/logo_grupo.png')}
            alt={""}
          />
        </div>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  )
}
