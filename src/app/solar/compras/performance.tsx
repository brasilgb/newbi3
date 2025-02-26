'use client'
import { BarPerformance } from '@/components/chart/BarPerformance'
import React from 'react'

interface PerformanceProps {
  graficoData: any;
}

export default function Performance({ graficoData }: PerformanceProps) {
  return (
    <BarPerformance perfdata={graficoData} />
  )
}
