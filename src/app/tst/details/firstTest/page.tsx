'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import something from "../../../../../public/Group 1000007863.png";

export default function FirstTest() {
    return (
        <div className="w-full h-screen overflow-x-hidden bg-white">
            <Image src={something} alt={''}/>
        </div>
    )
}