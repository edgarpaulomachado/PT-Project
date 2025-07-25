'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import doctor from '../../../public/doctor.png';
import ellipse from '../../../public/Ellipse 4.png';
import google from '../../../public/google.jpg';
import facebook from '../../../public/facebook.jpg';

interface UserData {
  nome: string;
  email: string;
  pass: string;
}

export default function AuthPage() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState<UserData>({ nome: '', email: '', pass: '' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      router.replace('/tst');
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nome || !formData.pass || (!showLogin && !formData.email)) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]') as UserData[];

    if (showLogin) {
      const userFound = users.find(
        (user) =>
          (user.nome === formData.nome || user.email === formData.email) &&
          user.pass === formData.pass
      );

      if (userFound) {
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(userFound));
        router.replace('/tst');
      } else {
        setError('Nome de usuário, email ou senha inválidos.');
      }
    } else {
      const userExists = users.some(
        (user) => user.nome === formData.nome || user.email === formData.email
      );

      if (userExists) {
        setError('Usuário já existe. Faça login ou use outro nome/email.');
        return;
      }

      const updatedUsers = [...users, formData];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(formData));
      router.replace('/tst');
    }
  };

  return (
    <>
      <div className="flex justify-between w-full h-[296px] pl-8 pr-4 py-8 bg-[#1BC768] relative">
        <div className="w-[221px] h-[98px]">
          <h2 className="text-6xl text-white">Olhos</h2>
          <div className="flex gap-1">
            <h2 className="text-5xl text-black">Café</h2>
            <Image src={logo} alt="Logo" width={45} height={42} />
          </div>
        </div>
        <div className="w-[726px] h-[78px]">
          <p className="text-[24px] text-white">
            Faça o <span className="font-bold">Login</span> ou{' '}
            <span className="font-bold">Registe-se</span> para obter todos os recursos.
          </p>
        </div>
      </div>

      <div className="w-full absolute pr-8 -mt-[120px] flex justify-between">
        <div>
          <Image src={doctor} alt="Doutor" />
          <Image src={ellipse} alt="Ellipse" className="-mt-[230px] ml-[40px]" />
          <div className="w-[434px] h-[88px] ml-[40px]">
            <p className="text-[32px] text-center">
              Seja bem-vindo à plataforma de{' '}
              <span className="font-bold text-[#1BC768]">Gestão de Saúde Ocular</span>
            </p>
          </div>
        </div>

        <div className="w-[600px] h-[755px] rounded-[25px] bg-[#F9F9F8]">
          <div className="h-[110px] pl-8 flex gap-6">
            <button
              onClick={() => {
                setShowLogin(true);
                setError(null);
              }}
              className={`mt-[50px] pb-2 text-[30px] font-bold ${
                showLogin ? 'border-b-2 border-[#1BC768]' : 'text-black'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowLogin(false);
                setError(null);
              }}
              className={`mt-[50px] pb-2 text-[30px] font-bold ${
                !showLogin ? 'border-b-2 border-[#1BC768]' : 'text-black'
              }`}
            >
              Cadastro
            </button>
          </div>

          <div className="w-full h-[645px] rounded-t-[45px] rounded-b-[25px] px-4 py-12 bg-white">
            <div className="w-[365px] h-[49px] flex justify-between mx-auto">
              <div className="w-[178px] h-[48px] bg-[#EEEEEE] rounded-[16px] flex items-center gap-2 justify-center cursor-pointer">
                <Image src={google} alt="Google" width={17} height={17} />
                <p className="text-[#616161] text-[12px]">Entrar com o Google</p>
              </div>
              <div className="w-[178px] h-[48px] bg-[#EEEEEE] rounded-[16px] flex items-center gap-2 justify-center cursor-pointer">
                <Image src={facebook} alt="Facebook" width={17} height={17} />
                <p className="text-[#616161] text-[12px]">Entrar com o Facebook</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-[401px] mt-[80px] mx-auto">
              {error && (
                <p className="text-red-500 text-center text-[14px] mb-4">{error}</p>
              )}
              <div className="mt-4">
                <label className="text-[16px] font-bold">
                  {showLogin ? 'Username ou Email' : 'Nome'}
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-[380px] border-b-2 border-[#BDBDBD] outline-none mt-[6px]"
                  placeholder={showLogin ? 'Digite seu username ou email' : 'Digite seu nome'}
                />
              </div>

              {!showLogin && (
                <div className="mt-4">
                  <label className="text-[16px] font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-[380px] border-b-2 border-[#BDBDBD] outline-none mt-[6px]"
                    placeholder="Digite seu email"
                  />
                </div>
              )}

              <div className="mt-8">
                <label className="text-[16px] font-bold">Senha</label>
                <input
                  type="password"
                  name="pass"
                  value={formData.pass}
                  onChange={handleInputChange}
                  className="w-[380px] border-b-2 border-[#BDBDBD] outline-none mt-[6px]"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="flex justify-between mt-[40px]">
                <label className="flex items-center gap-2 text-[#757575] text-[10px]">
                  <input type="checkbox" className="w-[24px] h-[22px]" />
                  Eu aceito os termos e condições
                </label>
                <button
                  type="submit"
                  className="w-[153px] h-[56px] bg-[#1BC768] text-white text-[16px] font-bold rounded-[50px] cursor-pointer"
                >
                  {showLogin ? 'Entrar' : 'Cadastrar-se'}
                </button>
              </div>

              <p className="text-[12px] text-[#424242] text-center mt-[50px]">
                {showLogin ? 'Ainda não tens uma conta?' : 'Já tens uma conta?'}{' '}
                <span
                  onClick={() => {
                    setShowLogin(!showLogin);
                    setError(null);
                  }}
                  className="text-[#1BC768] font-bold cursor-pointer"
                >
                  {showLogin ? 'Registar-se' : 'Iniciar sessão'}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
