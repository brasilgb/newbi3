import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { KeyRound, LogOut, User } from 'lucide-react';
import Link from 'next/link';

export default function DropDown({color}: any) {
  return (
    <DropdownMenu>
            <DropdownMenuTrigger className={`${color}`}><User /></DropdownMenuTrigger>
            <DropdownMenuContent className='!w-80 sm:mr-40'>
              <DropdownMenuLabel className='flex gap-2 items-center'><User className='h-4 w-4' /> Anderson Rodrigues</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  className='w-full flex gap-2 items-center'
                  href="#"
                >
                  <KeyRound className='h-4 w-4' /> Alterar minha senha
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className='w-full flex gap-2 items-center'
                  href="#"
                >
                  <LogOut className='h-4 w-4' /> Sair
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
  )
}
