import React from 'react';
import Image from 'next/image';
import profile from "../../../public/profile1.png";
import Header from "@/components/header";
import zoomIn from "../../../public/material-symbols-light_zoom-in-rounded.png";
import share from "../../../public/carbon_share.png";
import zoomOut from "../../../public/circum_zoom-out.png";


export default function Profile() {
    return (
        <>
            <Header />

            <div className="flex justify-between px-4 mt-[40px]">
                <div className="w-[366px] h-[764px] bg-white rounded-[25px] px-3 py-6">
                    <div className="flex justify-between pl-8">
                        <div className="w-[220px] h-[220px] bg-[#1BC768] rounded-[50%]">
                            <Image src={profile} alt="" width={220} height={220} className="mx-auto cursor-pointer"/>
                        </div>

                        <div className="w-[48px] h-[178px] my-auto gap-2">
                            <div className="w-[47px] h-[51px] rounded-[50%] bg-[#EFEFF1]">
                                <Image src={zoomIn} alt={''} className="mx-auto mt-2 cursor-pointer"/>
                            </div>

                            <div className="w-[47px] h-[51px] rounded-[50%] bg-[#EFEFF1]">
                                <Image src={share} alt={''} className="mx-auto mt-2 cursor-pointer"/>
                            </div>

                            <div className="w-[47px] h-[51px] rounded-[50%] bg-[#EFEFF1]">
                                <Image src={zoomOut} alt={''} className="mx-auto mt-2 cursor-pointer"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[310px] h-[444px] mt-[25px] px-0">
                        <p className="text-[24px] text-center">Edgar Machado</p>

                        <div className="mt-[30px] pl-1">
                            <p className="text-[16px]">Idade: <span className="font-bold">25</span></p>
                            <p className="text-[16px]">Contacto: <span className="font-bold">+244 947636149</span></p>
                            <p className="text-[16px]">Email: <span className="font-bold">kadyedgarpaulomachado@gmail.com</span></p>
                            <p className="text-[16px]">Endereço: <span className="font-bold">Luanda</span></p>
                        </div>

                        <div className="mt-[60px] px-4 gap-2">
                            <div className="h-[50px] border-b-2 flex justify-between px-2 my-auto">
                                <p className="text-[16px]">Total de consultas</p>
                                <p className="text-[16px] font-bold text-[#FFB266]">22</p>
                            </div>

                            <div className="h-[50px] border-b-2 flex justify-between px-2 my-auto mt-4">
                                <p className="text-[16px]">Total de exames</p>
                                <p className="text-[16px] font-bold text-[#28A745]">10</p>
                            </div>

                            <div className="h-[50px] border-b-2 flex justify-between px-2 my-auto mt-4">
                                <p className="text-[16px]">Status</p>
                                <p className="text-[16px] font-bold">Activo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}