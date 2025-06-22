import React from 'react';
import Link from 'next/link';

export default function navButton() {
    return (
        <>
            <div className="w-[153px] h-[54px] rounded-[25px] bg-gray-200 cursor-pointer hover:bg-white text-center flex items-center">
                <Link href={'home'} className="my-auto ml-[55px]">Home</Link>
            </div>

            <div className="w-[153px] h-[54px] rounded-[25px] bg-gray-200 cursor-pointer hover:bg-white text-center flex items-center">
                <Link href={'consult'} className="my-auto ml-[45px]">Consultas</Link>
            </div>

            <div className="w-[153px] h-[54px] rounded-[25px] bg-gray-200 cursor-pointer hover:bg-white text-center flex items-center">
                <Link href={'tratment'} className="my-auto ml-[35px]">Tratamentos</Link>
            </div>

            <div className="w-[153px] h-[54px] rounded-[25px] bg-gray-200 cursor-pointer hover:bg-white text-center flex items-center">
                <Link href={'marketplace'} className="my-auto ml-[35px]">Marketplace</Link>
            </div>
        </>
    )
} 