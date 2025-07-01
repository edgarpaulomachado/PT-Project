'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import something from "../../../../public/Group 1000007863.png";
import test from "../../../../public/teste-astigmatismo 1.png";
import something2 from "../../../../public/Group 1000007862.png";

export default function FirstTest() {
  const [answer, setAnswer] = useState<'sim' | 'nao' | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    if (answer !== null) {
      setShowModal(true);
    } else {
      alert('Por favor, selecione uma opção antes de confirmar.');
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="w-full h-screen overflow-x-hidden bg-white relative">
      <Image src={something} alt="" />

      <p className="text-[32px] text-[#1BC768] text-center">1º Teste - Astigmatismo</p>

      <div className="flex justify-center items-center">
        <Image src={test} alt="" className="mt-[20px]" />
      </div>

      <div className="mx-auto mt-[20px] w-[735px] h-[105px]">
        <p className="text-[24px]">
          Segunda etapa, por favor, cubra o seu olho direito. Na imagem acima, você consegue
          identificar alguma linha que seja mais escura ou mais nítida em relação às outras?
        </p>
      </div>

      <div className="mx-auto flex justify-between w-[715px] h-[74px] mt-[40px]">
        <div className="flex gap-6 items-center">
          <label className="flex items-center gap-2 text-[24px]">
            <input
              type="radio"
              name="resposta"
              checked={answer === 'sim'}
              onChange={() => setAnswer('sim')}
              className="w-[24px] h-[24px] border-2 border-[#1BC768]"
            />
            Sim
          </label>
          <label className="flex items-center gap-2 text-[24px]">
            <input
              type="radio"
              name="resposta"
              checked={answer === 'nao'}
              onChange={() => setAnswer('nao')}
              className="w-[24px] h-[24px] border-2 border-[#1BC768]"
            />
            Não
          </label>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-[288px] h-[74px] bg-[#1BC768] border-none rounded-[50px] text-white text-[30px]"
        >
          CONFIRMAR
        </button>
      </div>

      <div className="flex justify-end -mt-[40px]">
        <Image src={something2} alt="" />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-xl w-full text-center shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-[#1BC768]">Resultado do Teste</h2>
            <p className="text-gray-800 whitespace-pre-line text-[18px]">
              {answer === 'sim'
                ? 'Você pode estar com sinais de Astigmatismo.\n\nÉ recomendado procurar um oftalmologista para um diagnóstico profissional.'
                : 'Ótimo! Mesmo sem sintomas, aqui vão algumas dicas para manter sua visão saudável:\n\n- Faça pausas a cada 20 minutos.\n- Evite telas no escuro.\n- Alimente-se bem (vitamina A).\n- Vá ao oftalmologista periodicamente.'}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-[#1BC768] text-white rounded-full text-lg font-semibold hover:bg-[#17ac5c]"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
