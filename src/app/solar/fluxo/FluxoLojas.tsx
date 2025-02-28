'use client'
import { Table, TableCell, TableRow } from '@/components/ui/table';
import { useAuthContext } from '@/contexts/authcontext';
import { formatMoney } from '@/utils';
import { ChevronDown, Minus } from 'lucide-react';
import moment from 'moment';
import React, { useState } from 'react'

interface FluxoLojasProps {
    fluxo: any;
}

export default function FluxoLojas({ fluxo }: FluxoLojasProps) {
    const { rangeDate } = useAuthContext();
    const [levelOpen, setLevelOpen] = useState<boolean>(false);
    const [levelOpen2, setLevelOpen2] = useState<boolean>(false);
    const [levelNum, setLevelNum] = useState<number>(0);
    const [levelNum2, setLevelNum2] = useState<number>(0);

    const handleLevelOpen = (num: number) => {
        if (levelNum === num && levelOpen) {
            setLevelNum(num);
            setLevelOpen(false);
        } else {
            setLevelNum(num);
            setLevelOpen(true);
        }
    };

    const handleLevelOpen2 = (num: number) => {
        if (levelNum2 === num && levelOpen2) {
            setLevelNum2(num);
            setLevelOpen2(false);
        } else {
            setLevelNum2(num);
            setLevelOpen2(true);
        }
    };

    const caretLevel = (nivel: number, codigo: number) => {
        return [].filter(
            (lv: any) => lv.nivel === nivel && codigo === lv.agrupador
        ).length;
    };

    return (
        <div className="w-full bg-solar-blue-primary text-white rounded-t-md shadow-sm overflow-auto animate__animated animate__fadeIn">
            <div className="font-medium text-left px-2 py-0.5 whitespace-nowrap">
                Fluxo de caixa lojas
            </div>
            <Table>
                <TableRow className="flex justify-between text-base bg-solar-green-prymary text-gray-100">
                    <TableCell className="flex items-start">
                        <div className="w-[206px] ml-1 pl-4 uppercase">Descrição</div>
                    </TableCell>
                    <TableCell className="flex items-end">
                        <div className="">{moment(rangeDate?.from).format('DD/MM/YYYY')} - {moment(rangeDate?.to).format('DD/MM/YYYY')}</div>
                    </TableCell>
                </TableRow>
                {fluxo?.filter((n1: any) => n1.nivel === 1)
                    .sort((a: any, b: any) => (a.ordem > b.ordem ? 1 : -1))
                    .map((fluxo1: any, idx: number) => (
                        <>
                            <TableRow
                                onClick={() => handleLevelOpen(fluxo1.codigo)}
                                key={idx}
                                className={`flex justify-between text-sm !border-b-gray-100 text-gray-500 bg-gray-200 hover:bg-red-50 ${caretLevel(2, fluxo1.codigo) ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <TableCell className="flex items-center">
                                    {caretLevel(2, fluxo1.codigo) ? (
                                        <span
                                            className={`text-gray-500 duration-300 ${levelOpen && levelNum === fluxo1.codigo ? '-rotate-180' : 'rotate-0'}`}
                                        >
                                            <ChevronDown size={18} />
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">
                                            <Minus size={18} />
                                        </span>
                                    )}
                                    <span className="text-sm text-gray-500">
                                        {fluxo1.descricao}
                                    </span>
                                </TableCell>
                                <TableCell
                                    className={`font-bold ${fluxo1.valor > 0 ? 'text-blue-600' : 'text-red-500'}`}
                                >
                                    {formatMoney(fluxo1.valor)}
                                </TableCell>
                            </TableRow>
                            {levelOpen && levelNum === fluxo1.codigo && (
                                <TableRow>
                                    <TableCell colSpan={2} className="!p-0">
                                        {fluxo?.filter(
                                                (n2: any) =>
                                                    n2.nivel === 2 &&
                                                    fluxo1.codigo === n2.agrupador &&
                                                    n2.valor !== 0
                                            )
                                            .map((fluxo2: any, idx: number) => (
                                                <>
                                                    <TableRow
                                                        onClick={() => handleLevelOpen2(fluxo2.codigo)}
                                                        key={idx}
                                                        className={`flex justify-between !border-b-gray-50 bg-gray-100 text-gray-500 hover:bg-red-50 ${caretLevel(2, fluxo1.codigo) ? 'cursor-pointer' : 'cursor-default'}`}
                                                    >
                                                        <TableCell className="flex items-center">
                                                            {caretLevel(3, fluxo2.codigo) ? (
                                                                <span
                                                                    className={`ml-2 text-gray-500 duration-300 ${levelOpen2 && levelNum2 === fluxo2.codigo ? '-rotate-180' : 'rotate-0'}`}
                                                                >
                                                                    <ChevronDown size={18} />
                                                                </span>
                                                            ) : (
                                                                <span className="ml-2 text-gray-400">
                                                                    <Minus size={14} />
                                                                </span>
                                                            )}
                                                            <span className="text-gray-500">
                                                                {fluxo2.descricao}
                                                            </span>
                                                        </TableCell>
                                                        <TableCell
                                                            className={`font-bold text-sm ${fluxo2.valor > 0 ? 'text-blue-500' : 'text-red-500'}`}
                                                        >
                                                            {formatMoney(fluxo2.valor)}
                                                        </TableCell>
                                                    </TableRow>
                                                    {levelOpen2 && levelNum2 === fluxo2.codigo && (
                                                        <TableRow className="!p-0 flex flex-col">
                                                            <TableCell colSpan={2} className="!p-0">
                                                                {fluxo?.filter(
                                                                        (n3: any) =>
                                                                            n3.nivel === 3 &&
                                                                            fluxo2.codigo === n3.agrupador
                                                                    )
                                                                    .map((fluxo3: any, idx: number) => (
                                                                        <TableRow
                                                                            key={idx}
                                                                            className={`flex justify-between bg-gray-50 text-gray-500 hover:bg-red-50`}
                                                                        >
                                                                            <TableCell className="flex items-center">
                                                                                <span className="ml-4 text-gray-400">
                                                                                    <Minus size={14} />
                                                                                </span>
                                                                                <span className="pl-1">
                                                                                    {fluxo3.descricao}
                                                                                </span>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                className={`font-bold text-sm ${fluxo3.valor > 0 ? 'text-sky-600' : 'text-red-500'}`}
                                                                            >
                                                                                {formatMoney(fluxo3.valor)}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                            </TableCell>
                                                        </TableRow>
                                                    )}
                                                </>
                                            ))}
                                    </TableCell>
                                </TableRow>
                            )}
                        </>
                    ))}
            </Table>
        </div>
    )
}
