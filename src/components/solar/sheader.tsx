'use client';
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import DropDown from '../DropDown';
import Image from 'next/image';
import { Building2, ClockArrowDown, HomeIcon } from 'lucide-react';
import { DatePicker } from '@/components/calendar/datepicker';
import { useAuthContext } from '@/contexts/authcontext';
import { usePathname } from 'next/navigation';

export default function SHeader() {
  const { dateUpdate } = useAuthContext();
  const pathname = usePathname();
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
                <NavigationMenuItem className='flex items-center gap-2 uppercase text-sm font-semibold'>
                  <Link href={'/grupo'} title='Grupo' className={`py-2 px-4 rounded-md ${pathname == '/grupo' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      <Building2 />
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar'} title='Lojas Solar' className={`py-2 px-4 rounded-md ${pathname == '/solar' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      <HomeIcon />
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/resumo'} title='Resumo' className={`py-2 px-4 rounded-md ${pathname == '/solar/resumo' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Resumo
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/faturamento'} title='Faturamneto' className={`py-2 px-4 rounded-md ${pathname == '/solar/faturamento' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Faturamento
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/meiopagamento'} title='Análise de Venda' className={`py-2 px-4 rounded-md ${pathname == '/solar/meiopagamento' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Análise de venda
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/inadimplencia'} title='Inadimplência' className={`py-2 px-4 rounded-md ${pathname == '/solar/inadimplencia' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Inadimplência
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/compras'} title='Compras' className={`py-2 px-4 rounded-md ${pathname == '/solar/compras' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Compras
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/fluxo'} title='Fluxo' className={`py-2 px-4 rounded-md ${pathname == '/solar/fluxo' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Fluxo
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/emprestimo'} title='Empréstimo' className={`py-2 px-4 rounded-md ${pathname == '/solar/emprestimo' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
                      Empréstimo
                    </NavigationMenuLink>
                  </Link>
                  <Link href={'/solar/dre'} title='DRE' className={`py-2 px-4 rounded-md ${pathname == '/solar/dre' ? 'bg-background text-solar-blue-primary': 'text-background'}`}>
                    <NavigationMenuLink>
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
