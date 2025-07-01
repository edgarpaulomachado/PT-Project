'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import something from "../../../../public/Group 1000007863.png";
import test from "../../../../public/teste-astigmatismo 1.png";
import something2 from "../../../../public/Group 1000007862.png";

export default function FirstTest() {
    return (
        <div className="w-full h-screen overflow-x-hidden bg-white">
            <Image src={something} alt={''}/>

            <p className="text-[32px] text-[#1BC768] text-center">1º Teste- Astigmatismo</p>

            <div className="flex justify-center items-center">
                 <Image src={test} alt={''} className="mt-[20px]" />
            </div>

            <div className="mx-auto mt-[20px] w-[735px] h-[105px]">
                <p className="text-[24px]">Segunda etapa, por favor, cubra o seu olho direito. Na imagem acima, você consegue identificar alguma linha que seja mais escura ou mais nítida em relação às outras?</p>
            </div>

            <div className="mx-auto flex justify-between w-[715px] h-[74px] mt-[40px]">
                <div className="flex gap-2">
                    <div className="flex gap-2">
                        <input type="radio" name="yes" id="" className="w-[39px] h-[36] border-2 border-[#1BC768]" />
                        <label className="text-[24px] mt-[16px]">Sim</label>
                    </div>

                    <div className="flex gap-2">
                        <input type="radio" name="yes" id="" className="w-[39px] h-[36] border-amber-3002 border-[#1BC768]" />
                        <label className="text-[24px] mt-[16px]">Não</label>
                    </div>  
                </div>

                <button type="submit" className="w-[288px] h-[74px] bg-[#1BC768] border-none rounded-[50px] text-white text-[30px]">CONFIRMAR</button>
            </div>

            <div className="flex justify-end -mt-[40px]">
                <Image src={something2} alt={''} />
            </div>
        </div>
    )
}