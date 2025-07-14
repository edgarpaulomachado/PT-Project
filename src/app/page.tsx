'use client';

import Image from 'next/image';
import React from 'react';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import logo from "../../public/logo.png";
import NavBar from "../components/navbar";
import login from "../../public/login.png";

export default function HomePage() {
  return (
    <>
      <div className="px-4 pt-4 flex justify-between">
        <div className="w-[124px] h-[55px]">
          <h2 className="text-2xl text-[#1BC768] ">Olhos</h2>
          <div className="flex gap-1">
            <h2 className="text-xl text-black">Café</h2>
            <Image src={logo} alt="" width={18} height={16}/>
          </div>
        </div>

        <NavBar />

        <button type="button" className="w-[163px] h-[46px] rounded-[50px] text-white flex text-[16px] bg-[1BC768]">
          <Image src={login} alt={''} />
          Login/Cadastro
        </button>

      </div>
    </>
  )
}

