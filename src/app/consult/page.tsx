import Header from "../../components/header";
import React from 'react';
import Image from 'next/image';
import search from "../../../public/search.png";
import move from "../../../public/move.png";
import filter from "../../../public/filter.png";
import star from "../../../public/star.png";
import heart from "../../../public/heart.png";
import male from "../../../public/male.png";
import female from "../../../public/female.png";
import doctor2 from "../../../public/doctor2.png"
import doctor1 from "../../../public/doctor1.png";
import goldStar from "../../../public/gold_star.png";
import info from "../../../public/info.png";
import like from "../../../public/like.png";
import calendary from "../../../public/calendary.png";


export default function Consult() {
    return (
        <>
            <Header />
            <div className="px-4 mt-8">
                <div className="w-[552px] h-[74px] rounded-[25px] py-4 px-2 flex justify-between bg-white">
                    <p className="text-[20px] my-auto">Especialistas</p>
                    <div className="flex gap-4">
                        <div className="w-[190.26px] h-[46px] rounded-[25px] px-2 py-4 flex gap-4 bg-[#EFEFF1]">
                            <Image src={search} alt={""} width={40.45} height={40.45}/>
                            <input type="search" placeholder="Procurar" className="border-none outline-none" />
                        </div>
                        <div className="w-[46px] h-[46px] rounded-[50%] bg-[#1BC768] flex items-center">
                            <Image src={move} alt={""} className="my-auto ml-2"/>
                        </div>

                        <div className="w-[46px] h-[46px] rounded-[50%] bg-[#EFEFF1] flex items-center">
                            <Image src={filter} alt="" className="my-auto ml-1"/>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[672px] py-8">
                    <div className="w-full h-[629px] rounded-[50px] bg-[#FFFFFF] px-4 py-6">
                        <div className="w-[400px] h-[38px] flex justify-between ">
                            <p>Ordenar por:</p>
                            <div className="w-[87px] h-[35px] rounded-[25px] bg-[#1BC768] px-4">
                                <p className="text-white text-[20px]">A-Z</p>
                            </div>
                            <div className="w-auto flex justify-between gap-2">
                                <div className="w-[41px] h-[38px] rounded-[50px] bg-[#F5F5F5]">
                                    <Image src={star} alt={""} className="mx-auto mt-2.5"/>
                                </div>
                                <div className="w-[41px] h-[38px] rounded-[50px] bg-[#F5F5F5]">
                                    <Image src={heart} alt={""} className="mx-auto mt-2.5"/>
                                </div>
                                <div className="w-[41px] h-[38px] rounded-[50px] bg-[#F5F5F5]">
                                    <Image src={male} alt={""} className="mx-auto mt-2.5"/>
                                </div>                                    
                                <div className="w-[41px] h-[38px] rounded-[50px] bg-[#F5F5F5]">
                                    <Image src={female} alt={""} className="mx-auto mt-2"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between my-8">
                            <div>
                                <Image src={doctor1} alt={""} />
                                <div className="mt-4 w-[258px] h-[95px] pl-4">
                                    <p className="text-[20px] text-black font-bold">Dr. Nelma Machado</p>
                                    <p className="text-[20px] mt-4">Neuroftalmologista</p>

                                    <div className="w-[100px] h-[26px] flex justify-between mt-3">
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                    </div>

                                    <div className="w-[143px] h-[40px] flex justify-between mt-4">
                                        <Image src={info} alt=""/>
                                        <Image src={calendary} alt=""/>
                                        <Image src={like} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Image src={doctor2} alt={""} />
                                <div className="mt-4 w-[258px] h-[95px] pl-4">
                                    <p className="text-[20px] text-black font-bold">Dr. Edgar Machado</p>
                                    <p className="text-[20px] mt-4">Glaucomatologista</p>

                                    <div className="w-[100px] h-[26px] flex justify-between mt-3">
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                    </div>

                                    <div className="w-[143px] h-[40px] flex justify-between mt-4">
                                        <Image src={info} alt=""/>
                                        <Image src={calendary} alt=""/>
                                        <Image src={like} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Image src={doctor1} alt={""} />
                                <div className="mt-4 w-[258px] h-[95px] pl-4">
                                    <p className="text-[20px] text-black font-bold">Dr. Nelma Machado</p>
                                    <p className="text-[20px] mt-4">Neuroftalmologista</p>

                                    <div className="w-[100px] h-[26px] flex justify-between mt-3">
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                    </div>

                                    <div className="w-[143px] h-[40px] flex justify-between mt-4">
                                        <Image src={info} alt=""/>
                                        <Image src={calendary} alt=""/>
                                        <Image src={like} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Image src={doctor2} alt={""} />
                                <div className="mt-4 w-[258px] h-[95px] pl-4">
                                    <p className="text-[20px] text-black font-bold">Dr. Edgar Machado</p>
                                    <p className="text-[20px] mt-4">Glaucomatologista</p>

                                    <div className="w-[100px] h-[26px] flex justify-between mt-3">
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                        <Image src={goldStar} alt=""/>
                                    </div>

                                    <div className="w-[143px] h-[40px] flex justify-between mt-4">
                                        <Image src={info} alt=""/>
                                        <Image src={calendary} alt=""/>
                                        <Image src={like} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}