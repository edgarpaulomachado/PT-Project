'use client';

import React from 'react';
import Image from 'next/image';
import logo from "../../../public/logo.png";
import something from "../../../public/Group 1000007863.png";
import eye from "../../../public/pajamas_eye.png";
import something2 from "../../../public/Group 1000007862.png";
import {useRouter} from "next/navigation";


export default function Test() {

    const router = useRouter();
    const handleClick = () => {
        router.push('/tst/details');
    };

    return ( 
        <div className="w-full h-screen overflow-x-hidden bg-white">
            <Image src={something} alt={''} />

            <div className="w-[124px] h-[55px] mx-auto -mt-[60px]" >
                <h2 className="text-[50px] text-[#1BC768] ">Olhos</h2>
                <div className="flex gap-1">
                    <h2 className="text-[45px] text-black">Café</h2>
                    <Image src={logo} alt="" width={22} height={18}/>
                </div>
            </div>

            <div className="w-auto h-[228px] mx-autoo mt-[120px] px-8">
                <h2 className="text-center text-[36px] text-[#1BC768]">AVALIE SUA VISÃO</h2>
                <p className="text-[24px] text-center text-black mt-[30px]">Clique agora e faça uma avaliação online da sua visão!</p>

                <p className="text-[20px] text-center mt-[30px]">Nossos testes, foram desenvolvidos para auxiliar na identificação de possíveis problemas de visão e determinar se é necessário procurar um oftalmologista para exames mais detalhados.</p>

                <p className="text-[20px] text-center mt-[20px]">É importante ressaltar que esses testes não possuem valor diagnóstico definitivo.</p>
            </div>

            <div className="w-[547px] h-[212px] mx-auto mt-[100px] block">
                <button type="button" className="w-[547px] h-[70px] bg-[#1BC768] text-center text-white flex items-center justify-center gap-2 rounded-[50px] border-none cursor-pointer" onClick={handleClick}>
                    
                    <Image src={eye} alt={''} />
                    INICIAR TESTES
                
                </button>

                <button type="button" className="w-[547px] h-[70px] mt-[20px] bg-transparent text-center text-[#1BC768] gap-2 rounded-[50px] border-2 border-[#1BC768] cursor-pointer">
                    SELECIONE UM TESTE ESPECIFICO
                </button>
            </div>

            <div className="flex justify-end -mt-[40px]">
                <Image src={something2} alt={''} />
            </div>
        </div>
    )
}