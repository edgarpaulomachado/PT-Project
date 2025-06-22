import Header from "../../components/header";
import Image from 'next/image';
import filter from "../../../public/filter.png";
import arrow2 from "../../../public/Arrow 2.png";
import calendar from "../../../public/calendar.png";
import frame from "../../../public/Frame.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 flex justify-between mt-12">
        <div className="w-[347px] h-[128px]">
          <h2 className="text-[32px] text-[#1BC768]">Seja Bem-vindo</h2>
          <p className="text-[26px]">Edgar Machado</p>
        </div>

        <div className="flex gap-2">
          <div className="w-[485px] h-[74px] rounded-[100px] my-auto flex justify-between bg-[#FFFFFF] px-2">
            <p className="my-auto">Próxima medicação</p>
            <div className="w-[208px] h-[46px] rounded-[25px] bg-[#EFEFF1] my-auto flex justify-between px-1">
              <p className="text-[12px] my-auto">Qua, 16 Jun 2025</p>
              <Image src={filter} alt={""} width={16} height={16} className="my-auto"/>
            </div>
          </div>

          <button className="w-[183px] h-[64px] rounded-[100px] bg-[#1BC768] flex justify-between px-3 my-auto cursor-pointer">
            <p className="text-white text-[20px] my-auto">Consulta</p>
            <Image src={arrow2} alt={""} width={23.23} className="my-auto"/>
          </button>
        </div>
      </div> 

      <div className="ml-4 w-[235px] h-[50px] rounded-[100px] bg-white flex justify-between px-1">
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#1BC768] my-auto">
          <Image src={calendar} alt="" className="mx-auto mt-2"/>
        </div>
        <p className="text-[12px] text-center my-auto">QUI, 12 FEV 2025</p>
        <Image src={frame} alt=""/>
      </div>
    </>
  );
}
