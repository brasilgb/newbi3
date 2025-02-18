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
import { Building2, HomeIcon } from 'lucide-react';

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
                <Link href={'/grupo'} title='Grupo'><Building2 /></Link>
                <Link href={'/solar'} title='Lojas Solar'><HomeIcon /></Link>
                <Link href={'/solar/resumo'} title='Resumo'>Resumo</Link>
                <Link href={'/solar/faturamento'} title='Faturamneto'>Faturamento</Link>
                <Link href={'/solar/análise'} title='Análise de Venda'>Análise de venda</Link>
                <Link href={'/solar/inadimplencia'} title='Inadimplência'>Inadimplencia</Link>
                <Link href={'/solar/compras'} title='Compras'>Compras</Link>
                <Link href={'/solar/fluxo'} title='Fluxo'>Fluxo</Link>
                <Link href={'/solar/emprestimo'} title='Empréstimo'>Empréstimo</Link>
                <Link href={'/solar/dre'} title='DRE'>DRE</Link>
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
