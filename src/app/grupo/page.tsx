'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderInput } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="sm:w-2/4 w-full sm:mx-auto sm:my-20 my-4">
      <div className="sm:grid grid-cols-2 flex flex-col sm:gap-8 gap-4">
        <Card className="bg-gray-50 border border-white">
          <CardHeader>
            <CardTitle className="text-xl text-gray-500">Lojas Solar</CardTitle>
            <CardDescription>Relatórios administrativos Lojas Solar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-center">
              <div className="h-24 flex items-center">
                <Image
                  width={300}
                  height={100}
                  src={require('@/assets/images/logo_solar.png')}
                  alt={""}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-end w-full h-16"> 
              <Link
              title="Acessar relatórios administrativos Lojas Solar"
              className="bg-solar-blue-primary rounded-full h-12 w-12 flex items-center justify-center shadow-md hover:shadow-lg border-2 border-white"
              href="/solar"
            >
              <FolderInput className="h-6 w-6 text-solar-gray-light" />
            </Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-gray-50 border border-white">
          <CardHeader>
            <CardTitle className="text-xl text-gray-500">Naturovos</CardTitle>
            <CardDescription>Relatorios Administrativos Naturovos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-center">
              <div className="h-24 flex items-center">
                <Image
                  width={120}
                  height={100}
                  src={require('@/assets/images/logo_naturovos.png')}
                  alt={""}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-end w-full h-16"> 
              <Link
              title="Acessar relatórios administrativos Naturovos"
              className="bg-solar-orange-primary rounded-full h-12 w-12 flex items-center justify-center shadow-md hover:shadow-lg border-2 border-white"
              href="/naturovos"
            >
              <FolderInput className="h-6 w-6 text-gray-900" />
            </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}