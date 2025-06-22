import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from "../../public/logo.png";
import doctor from "../../public/doctor.png";
import ellipse from "../../public/Ellipse 4.png";
import google from "../../public/google.jpg";
import facebook from "../../public/facebook.jpg";



export default function Register() {
    return (
        <>
            <div className="flex justify-between w-full h-[296px] pl-8 pr-4 py-8 bg-[#1BC768] relative">
                <div className="w-[221px] h-[98px]">
                    <h2 className="text-6xl text-white ">Olhos</h2>
                    <div className="flex gap-1">
                        <h2 className="text-5xl text-black">Café</h2>
                        <Image src={logo} alt="" width={45} height={42}/>
                    </div>
                </div>
                <div className="w-[726px] h-[78px]">
                    <p className="text-[24px] text-white">Faça o <span className="text-white font-bold">Login</span> ou <span className="text-white font-bold">Registe-se</span> para obter todos os recuros que a plataforma dispõe.</p>
                </div>
            </div> 

            <div className="w-full absolute pr-8 -mt-[120px] flex justify-between">
                <div>
                    <Image src={doctor} alt={''}/>
                    <Image src={ellipse} alt={''} className="-mt-[230px] ml-[40px]"/>
                    <div className="w-[434px] h-[88px] ml-[40px]">
                        <p className="text-[32px] text-center">Seja bem-vindo a plataforma de <span className="font-bold text-[#1BC768]">Gestão de Saúde Ocular</span> </p>
                    </div>
                </div>

                <div className="w-[600px] h-[755px] rounded-[25px] bg-[#F9F9F8]">
                    <div className="w-full h-[645px] rounded-t-[45px] rounded-b-[25px] mt-[110px] px-4 py-8 bg-white">
                        <div className="w-[365px] h-[49px] flex justify-between mx-auto">
                            <div className="w-[178px] h-[48px] bg-[#EEEEEE] rounded-[16px] flex justify-center items-center cursor-pointer">
                                <Image src={google} alt={''} width={17} height={17} />
                                <p className="text-[#616161] text-[12px]">Entrar com o Google</p>
                            </div>

                            <div className="w-[178px] h-[48px] bg-[#EEEEEE] rounded-[16px] flex justify-center items-center cursor-pointer">
                                <Image src={facebook} alt={''} width={17} height={17}/>
                                <p className="text-[#616161] text-[12px]">Entrar com o Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}