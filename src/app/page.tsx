'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from "../../public/logo.png";
import doctor from "../../public/doctor.png";
import ellipse from "../../public/Ellipse 4.png";
import google from "../../public/google.jpg";
import facebook from "../../public/facebook.jpg";
import { useState } from 'react';

interface FormData {
    nome?: string;
    email?: string;
    pass?: string;
}

export default function Register() {

    const [showLogin, setShowLogin] = useState(true);
    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    
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

                    <div className="h-[110px] pl-8 flex gap-6">

                        <div className="mt-[50px]">
                            <button onClick={() => setShowLogin(false)} className={`pb-2 ${!showLogin ? 'border-b-2 border-[#1BC768] text-[30px] font-bold cursor-pointer' : 'text-black text-[30px] font-bold cursor-pointer' } `}>Login</button>
                        </div>

                        <div className="mt-[50px]">
                            <button onClick={() => setShowLogin(true)} className={`pb-2 ${showLogin ? 'border-b-2 border-[#1BC768] text-[30px] font-bold cursor-pointer' : 'text-black text-[30px] font-bold cursor-pointer' } `}>Cadastro</button>  
                        </div>
                    </div>

                    <div className="w-full h-[645px] rounded-t-[45px] rounded-b-[25px] px-4 py-12 bg-white">
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

                        {showLogin ? (
                        <form action="" className="w-[401px] h-[238px] mt-[80px] mx-auto" onSubmit={handleSubmit}>
                                
                            <div className="mt-4">
                                <label className="text-[16px] font-bold">Nome</label>
                                <input type="text" name="nome" id="" value={formData.nome || ''} onChange={handleInputChange} className="w-[380px] border-b-2 border-b-[#BDBDBD] outline-none outline-[#1BC768] mt-[6px]" />
                            </div>

                            <div className="mt-4">
                                <label className="text-[16px] font-bold">Email</label>
                                <input type="email" name="email" id="" value={formData.email || ''} onChange={handleInputChange} className="w-[380px] border-b-2 border-b-[#BDBDBD] outline-none outline-[#1BC768] mt-[6px]" />
                            </div>
                                
                            <div className="mt-8">
                                <label className="text-[16px] font-bold">Password</label>
                                <input type="password" name="pass" id="" value={formData.pass || ''} onChange={handleInputChange} className="w-[380px] border-b-2 border-b-[#BDBDBD] outline-none outline-[#1BC768] mt-[6px]" />
                            </div>
                                    
                            <div className="w-[401px] h-auto flex justify-between mt-[40px]">
                                <div className="w-[186px] h-[23px] flex my-auto gap-2">
                                    <input type="checkbox" name="" id="" className="w-[24px] h-[22px] bg-[#7B76F140]" />
                                    <p className="text-[#757575] text-[10px] my-auto">Eu aceitos os termos e condições</p>
                                </div>

                                <button type="submit" className="w-[153px] h-[56px] bg-[#1BC768] text-white text-[16px] font-bold rounded-[50px] cursor-pointer">Cadastrar-se</button>
                            </div>

                            <p className="text-[12px] text-[#424242] text-center mt-[70px]">Já tens uma conta? {''} <span className="text-[12px] text-[#1BC768] font-bold cursor-pointer" onClick={() => setShowLogin(false)}>Iniciar sessão</span></p>
                            
                        </form>
                        ) : (
                        
                        <form action="" className="w-[401px] h-[238px] mt-[80px] mx-auto" onSubmit={handleSubmit}>
                                
                            <div className="mt-4">
                                <label className="text-[16px] font-bold">Username</label>
                                <input type="text" name="nome" id="" value={formData.nome || ''} onChange={handleInputChange} className="w-[380px] border-b-2 border-b-[#BDBDBD] outline-none outline-[#1BC768] mt-[6px]" />
                            </div>
                                
                            <div className="mt-8">
                                <label className="text-[16px] font-bold">Password</label>
                                <input type="password" name="pass" id="" value={formData.pass || ''} onChange={handleInputChange} className="w-[380px] border-b-2 border-b-[#BDBDBD] outline-none outline-[#1BC768] mt-[6px]" />
                            </div>
                                    
                            <div className="w-[401px] h-auto flex justify-between mt-[40px]">
                                <div className="w-[186px] h-[23px] flex my-auto gap-2">
                                    <input type="checkbox" name="" id="" className="w-[24px] h-[22px] bg-[#7B76F140]" />
                                    <p className="text-[#757575] text-[10px] my-auto">Eu aceitos os termos e condições</p>
                                </div>

                                <button type="submit" className="w-[153px] h-[56px] bg-[#1BC768] text-white text-[16px] font-bold rounded-[50px] cursor-pointer">Entrar</button>
                            </div>

                            <p className="text-[12px] text-[#424242] text-center mt-[50px]">Ainda não tens uma conta? {''} <span className="text-[12px] text-[#1BC768] font-bold cursor-pointer" onClick={() => setShowLogin(true)}>Registar-se</span></p>
                            
                        </form>
                        )};

                    </div>
                </div>
            </div>
        </>
    )
}