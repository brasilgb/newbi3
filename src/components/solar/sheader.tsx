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
import { Building2, ClockArrowDown, HomeIcon } from 'lucide-react';
import { DatePicker } from '@/components/calendar/datepicker';
import { useAuthContext } from '@/contexts/authcontext';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function SHeader() {
  const { dateUpdate } = useAuthContext();
  return (
    <div>
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
                <NavigationMenuItem className='flex items-center gap-4 uppercase text-sm font-semibold'>
                  <Link href={'/grupo'} title='Grupo'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Building2 />
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar'} title='Lojas Solar'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <HomeIcon />
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/resumo'} title='Resumo'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Resumo
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/faturamento'} title='Faturamneto'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Faturamento
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/meiopagamento'} title='Análise de Venda'>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                      Análise de venda
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/inadimplencia'} title='Inadimplência'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Inadimplencia
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/compras'} title='Compras'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Compras
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/fluxo'} title='Fluxo'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Fluxo
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/emprestimo'} title='Empréstimo'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Empréstimo
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/dre'} title='DRE'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      DRE
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <DropDown color="text-solar-gray-light" />
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-100'>
        <div className='container m-auto flex items-center justify-around h-10'>
          <div><DatePicker /></div>
          <div className='flex items-center justify-center text-sm bg-white border h-8 rounded-md w-[240px] text-gray-500 font-medium gap-2'>
            <ClockArrowDown className='h-4 w-4' />
            <div>{dateUpdate}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
