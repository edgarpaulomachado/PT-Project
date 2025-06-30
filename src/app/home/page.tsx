'use client';

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import filter from '../../../public/filter.png';
import arrow2 from '../../../public/Arrow 2.png';
import calendar from '../../../public/calendar.png';
import frame from '../../../public/Frame.png';

export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState<{ nome?: string }>({});

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleClick = () => {
    router.push('./tst');
  };

  return (
    <>
      <Header />

      <div className="px-4 flex justify-between mt-12">
        <div className="w-[347px]">
          <h2 className="text-[32px] text-[#1BC768]">Seja Bem-vindo, <span className="text-black">{userData.nome}</span></h2>
        </div>

        <div className="flex gap-2">
          <div className="w-[485px] h-[74px] rounded-full flex justify-between bg-white px-2 items-center">
            <p>Próxima medicação</p>
            <div className="w-[208px] h-[46px] rounded-[25px] bg-[#EFEFF1] flex justify-between px-2 items-center">
              <p className="text-[12px]">Qua, 16 Jun 2025</p>
              <Image src={filter} alt="Filtro" width={16} height={16} />
            </div>
          </div>

          <button
            className="w-[183px] h-[64px] rounded-full bg-[#1BC768] flex items-center justify-between px-4 text-white text-[20px] font-medium"
            onClick={handleClick}
          >
            <span>Consulta</span>
            <Image src={arrow2} alt="Ir" width={24} />
          </button>
        </div>
      </div>

      <div className="ml-4 w-[235px] h-[50px] rounded-full bg-white flex items-center justify-between px-2 mt-6">
        <div className="w-[42px] h-[42px] rounded-full bg-[#1BC768] flex items-center justify-center">
          <Image src={calendar} alt="Calendário" />
        </div>
        <p className="text-[12px]">QUI, 12 FEV 2025</p>
        <Image src={frame} alt="Ícone" />
      </div>
    </>
  );
}
