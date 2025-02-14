'use client';
import { redirect } from 'next/navigation';
import React, { useLayoutEffect } from 'react'

export default function page() {

    useLayoutEffect(() => {
        redirect("/grupo")
    }, []);
    
  return (
    <></>
  )
}
