'use client';
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import DropDown from '../DropDown';
import Image from 'next/image';
import { HomeIcon } from 'lucide-react';

export default function SHeader() {
  return (
    <div className='bg-solar-blue-primary h-16 min-h-16'>
      <div className='container m-auto h-full flex items-center justify-between'><div>
        <Image
          width={100}
          height={50}
          src={require('@/assets/images/logo_solar_br.png')}
          alt={""}
        />
      </div>
        <div className='flex flex-1 items-center justify-start px-6'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className='flex items-center gap-4 text-solar-gray-light uppercase text-sm font-semibold'>
                <Link href={'/grupo'}><HomeIcon /></Link>
                <Link href={'/menu2'}>Resumo</Link>
                <Link href={''}>Faturamento</Link>
                <Link href={''}>Análise de venda</Link>
                <Link href={''}>Inadimplencia</Link>
                <Link href={''}>Compras</Link>
                <Link href={''}>Fluxo</Link>
                <Link href={''}>Empréstimo</Link>
                <Link href={''}>DRE</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <DropDown color="text-solar-gray-light" />
        </div>
      </div>
    </div>
  )
}
