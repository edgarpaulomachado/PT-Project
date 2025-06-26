'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import profile from "../../../public/profile1.png";
import Header from "@/components/header";
import zoomIn from "../../../public/material-symbols-light_zoom-in-rounded.png";
import share from "../../../public/carbon_share.png";
import zoomOut from "../../../public/circum_zoom-out.png";


export default function Profile() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [adress, setAddress] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ firstName, lastName, email, age, contact, gender, adress });
        setFirstName('');
        setLastName('');
        setEmail('');
        setAge('');
        setContact('');
        setGender('');
        setAddress('');
    }


    return (
        <>
            <Header />

            <div className="flex justify-between px-4 mt-[40px]">
                <div className="w-[366px] h-[764px] bg-white rounded-[25px] px-3 py-6">
                    <div className="flex justify-between pl-8">
                        <div className="w-[220px] h-[220px] bg-[#1BC768] rounded-[50%]">
                            <Image src={profile} alt="" width={220} height={220} className="mx-auto cursor-pointer"/>
                        </div>

                        <div className="w-[48px] h-[178px]">
                            <div className="w-[47px] h-[51px] rounded-[50%] bg-[#EFEFF1] pt-[1px]">
                                <Image src={zoomIn} alt={''} className="mx-auto mt-2 cursor-pointer"/>
                            </div>

                            <div className="w-[47px] h-[51px] rounded-[50%] bg-[#EFEFF1] pt-[1px]">
                                <Image src={share} alt={''} className="mx-auto mt-2 cursor-pointer"/>
                            </div>

                            <div className="w-[47px] h-[51px] rounded-[50%] bg-[#EFEFF1] pt-[1px]">
                                <Image src={zoomOut} alt={''} className="mx-auto mt-2 cursor-pointer"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[310px] h-[444px] mt-[25px] px-0">
                        <p className="text-[24px] text-center">Edgar Machado</p>

                        <div className="mt-[30px] pl-1">
                            <p className="text-[16px]">Idade: <span className="font-bold">25</span></p>
                            <p className="text-[16px]">Contacto: <span className="font-bold">+244 947636149</span></p>
                            <p className="text-[16px]">Email: <span className="font-bold"> </span></p>
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


                <div className="w-[797px] h-[739px] rounded-[25px] bg-[#F9F9F8]">
                    <div className="w-[797px] h-[640px] rounded-t-[50px] rounded-b-[25px] bg-white mt-[100px] p-3">

                        <form action="" className="flex justify-between px-4" onSubmit={handleSubmit}>
                            <div className="w-auto h-auto">
                                <div className="mt-8">
                                    <label className="text-[16px]">Primeiro Nome</label>
                                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>

                                <div className="mt-8">
                                    <label className="text-[16px]">Telefone</label>
                                    <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>

                                <div className="mt-8">
                                    <label className="text-[16px]">Data de Nascimento</label>
                                    <input type="date" value="" onChange={(e) => setAge(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>

                                <div className="mt-8">
                                    <label className="text-[16px]">Endereço</label>
                                    <input type="text" value={adress} onChange={(e) => setAddress(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>
                            </div>

                            <div className="w-auto h-auto">
                                <div className="mt-8">
                                    <label className="text-[16px]">Último Nome</label>
                                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>

                                <div className="mt-8">
                                    <label className="text-[16px]">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>

                                <div className="mt-8">
                                    <label className="text-[16px]">Género</label>
                                    <input type="tel" value={gender} onChange={(e) => setGender(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>

                                <div className="mt-8">
                                    <label className="text-[16px]">Idade</label>
                                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-[332px] h-[59px] rounded-[50px] bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"/>
                                </div>
                            </div>

                        </form>

                        <button type="submit" className="w-[153px] h-[56px] bg-[#1BC768] text-white text-[16px] font-bold rounded-[50px] cursor-pointer mt-[55px] ml-[590px]">Actualizar</button>
                    </div>
                </div>
            </div>
        </>
    )
}