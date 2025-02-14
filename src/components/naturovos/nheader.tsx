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
export default function NHeader() {
  return (
    <div className='bg-solar-orange-primary h-16 min-h-16'>
      <div className='container m-auto h-full flex items-center justify-between'><div>
        <Image
          width={80}
          height={30}
          src={require('@/assets/images/logo_naturovos_black.png')}
          alt={""}
        />
      </div>
        <div className='flex flex-1 items-center justify-start px-6'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className='flex items-center gap-4 text-gray-900 uppercase text-sm font-semibold'>
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
          <DropDown color="text-gray-900" />
        </div>
      </div>
    </div>
  )
}
