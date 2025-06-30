'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import something from "../../../../public/Group 1000007863.png";
import something2 from "../../../../public/Group 1000007862.png";

export default function Details() {

    const router = useRouter();
    
    const handleClick = () => {
        router.push('/details/firstTest');
    }

    return (
        <div className="w-full h-screen overflow-x-hidden bg-white" >
            <Image src={something} alt={''}/>

            <div className="w-[899px] h-[357px] mx-auto">

                <p className="text-[32px] text-[#1BC768]">Orientações para o 1º Teste</p>
                <p className="text-[24px] text-[#1BC768] mt-[30px]">1. <span className="text-black">Fique a 1 (um) metro de distância da tela.</span> </p>
                <p className="text-[24px] text-[#1BC768]">2. <span className="text-black">Caso você tenha óculos para distância ou com lentes progressivas, mantenha-os.</span> </p>
                <p className="text-[24px] text-[#1BC768]">3. <span className="text-black">Você fará esse teste em duas etapas.</span> </p>
                <p className="text-[24px] text-[#1BC768]">4. <span className="text-black">A primeira cobrindo o olho esquerdo e a segunda o direito.</span></p>

                <button type='button' className="w-[288px] h-[74px] rounded-[50px] bg-[#1BC768] border-none text-white text-[24px] mt-[40px] cursor-pointer" onClick={handleClick}>CONTINUAR</button>
            </div>

            <div className="flex justify-end -mt-[40px]">
                <Image src={something2} alt={''} />
            </div>
            
        </div>
    )
}