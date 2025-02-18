'use client';
import { redirect } from 'next/navigation';
import React, { useEffect, useLayoutEffect } from 'react'

export default function page() {

    useEffect(() => {
        redirect("/grupo")
    }, []);
    
  return (
    <></>
  )
}
