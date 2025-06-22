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
                    </div>
                </div>
            </div>
        </>
    )
}