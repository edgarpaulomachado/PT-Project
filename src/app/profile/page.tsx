'use client';

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import profile from '../../../public/profile1.png';
import zoomIn from '../../../public/material-symbols-light_zoom-in-rounded.png';
import share from '../../../public/carbon_share.png';
import zoomOut from '../../../public/circum_zoom-out.png';

const TABS = [
  { key: 'information', label: 'Informações Pessoais' },
  { key: 'pass', label: 'Password' },
  { key: 'documents', label: 'Documentos' },
];

interface UserData {
  nome?: string;
  email?: string;
  pass?: string;
  age?: string;
  contact?: string;
  gender?: string;
  address?: string;
}

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    contact: '',
    gender: '',
    address: '',
    pass: '',
  });

  const [userData, setUserData] = useState<UserData>({});
  const [activeTab, setActiveTab] = useState('information');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedForm = localStorage.getItem('formData');
    if (storedForm) {
      const parsedForm = JSON.parse(storedForm);
      setFormData(parsedForm);
    }

    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const updatedUserData: UserData = {
      nome: fullName,
      email: formData.email,
      age: formData.age,
      contact: formData.contact,
      gender: formData.gender,
      address: formData.address,
    };

    const updatedFormData = { ...formData };

    setTimeout(() => {
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="flex justify-between px-8 mt-10">
        <div className="w-[366px] bg-white rounded-2xl p-6">
          <div className="flex justify-between">
            <div className="w-[220px] h-[220px] bg-[#1BC768] rounded-full">
              <Image src={profile} alt="Profile" width={220} height={220} className="mx-auto cursor-pointer" />
            </div>
            <div className="space-y-3">
              {[zoomIn, share, zoomOut].map((icon, idx) => (
                <div key={idx} className="w-[47px] h-[51px] rounded-full bg-[#EFEFF1] pt-1">
                  <Image src={icon} alt="icon" className="mx-auto mt-2 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xl font-bold">{userData.nome || `${formData.firstName} ${formData.lastName}` || 'Usuário não logado'}</p>
            <p className="text-sm text-gray-600">{userData.email || formData.email || ''}</p>
          </div>

          <div className="mt-6 space-y-2 pl-1">
            <Info label="Idade" value={userData.age || formData.age} />
            <Info label="Contacto" value={userData.contact || formData.contact} />
            <Info label="Género" value={userData.gender || formData.gender} />
            <Info label="Endereço" value={userData.address || formData.address} />
          </div>

          <div className="mt-10 space-y-4 px-4">
            <Stat label="Total de consultas" value="22" color="text-[#FFB266]" />
            <Stat label="Total de exames" value="10" color="text-[#28A745]" />
            <Stat label="Status" value="Activo" />
          </div>
        </div>

        <div className="w-[797px] bg-[#F9F9F8] rounded-2xl">
          <div className="flex justify-between px-4 h-[99px] items-end">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 text-[25px] font-bold cursor-pointer ${
                  activeTab === tab.key ? 'border-b-2 border-[#1BC768]' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-t-[50px] rounded-b-2xl p-3">
            {activeTab === 'information' && (
              <form onSubmit={handleSubmit} className="flex justify-between px-4">
                <div className="space-y-8">
                  <Input label="Primeiro Nome" name="firstName" value={formData.firstName} onChange={handleChange} />
                  <Input label="Telefone" name="contact" value={formData.contact} onChange={handleChange} />
                  <Input label="Data de Nascimento" name="age" type="date" value={formData.age} onChange={handleChange} />
                  <Input label="Endereço" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="space-y-8">
                  <Input label="Último Nome" name="lastName" value={formData.lastName} onChange={handleChange} />
                  <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  <SelectInput label="Género" name="gender" value={formData.gender} onChange={handleChange} />
                  <Input label="Idade" name="age" type="number" value={formData.age} onChange={handleChange} />
                </div>
              </form>
            )}

            {activeTab === 'pass' && (
              <form className="px-4 space-y-6">
                <Input label="Digite a sua password" name="pass" type="password" value={formData.pass} onChange={handleChange} />
                <Input label="Nova password" name="newPass" type="password" value={formData.pass} onChange={handleChange} />
                <Input label="Confirmar a password" name="confirmPass" type="password" value={formData.pass} onChange={handleChange} />
              </form>
            )}

            {activeTab !== 'documents' && (
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[153px] h-[56px] bg-[#1BC768] text-white text-[16px] font-bold rounded-full cursor-pointer mt-10 flex justify-center items-center"
              >
                {loading ? 'Actualizando...' : 'Actualizar'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const Info = ({ label, value }: { label: string; value: string }) => (
  <p className="text-[16px]">
    {label}: <span className="font-bold">{value}</span>
  </p>
);

const Stat = ({ label, value, color = 'text-black' }: { label: string; value: string; color?: string }) => (
  <div className="h-[50px] border-b-2 flex justify-between px-2 items-center">
    <p className="text-[16px]">{label}</p>
    <p className={`text-[16px] font-bold ${color}`}>{value}</p>
  </div>
);

const Input = ({ label, name, type = 'text', value, onChange }: { label: string; name: string; type?: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <div>
    <label className="text-[16px] block">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-[332px] h-[59px] rounded-full bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"
    />
  </div>
);

const SelectInput = ({ label, name, value, onChange }: { label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLSelectElement>) => void }) => (
  <div>
    <label className="text-[16px] block">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="block w-[332px] h-[59px] rounded-full bg-[#EFEFF1] border-none outline-none p-3 mt-[6px]"
    >
      <option value="">Selecionar</option>
      <option value="Masculino">Masculino</option>
      <option value="Feminino">Feminino</option>
      <option value="Outro">Outro</option>
    </select>
  </div>
);
