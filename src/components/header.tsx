'use client';

import Image from "next/image";
import logo from "../../public/logo.png";
import notification from "../../public/notification.png";
import messages from "../../public/messages.png";
import setting from "../../public/setting.png";
import NaveButton from "./navButton";
import profile from "../../public/profile.png";
import { useRouter } from 'next/navigation';


export default function Header() {

    const router = useRouter();

    const handclick = () => {
        router.push('../profile');
    }

    return (
        <div className="w-full h-auto px-4 mt-4 flex justify-between">
            <div className="w-[124px] h-[55px]">
                <h2 className="text-2xl text-[#1BC768] ">Olhos</h2>
                <div className="flex gap-1">
                    <h2 className="text-xl text-black">Café</h2>
                    <Image src={logo} alt="" width={18} height={16}/>
                </div>
            </div>

            <div className="w-[623px] h-[64px] flex justify-between">
                <NaveButton />
            </div>

            <div className="flex justify-between gap-1">
                <div className="w-[47px] h-[46px] bg-white rounded-[50%]">
                    <Image src={notification} alt="" className="mx-auto mt-3 cursor-pointer"/>
                </div>

                <div className="w-[47px] h-[46px] bg-white rounded-[50%]">
                    <Image src={messages} alt="" className="mx-auto mt-3 cursor-pointer"/>
                </div>

                <div className="w-[47px] h-[46px] bg-white rounded-[50%]">
                    <Image src={setting} alt="" className="mx-auto mt-3 cursor-pointer"/>
                </div>

                <div className="w-[47px] h-[46px] bg-[#1BC768] rounded-[50%]">
                    <Image src={profile} alt="" className="mx-auto cursor-pointer" onClick={handclick}/>
                </div>
            </div>
        </div>
    )
}