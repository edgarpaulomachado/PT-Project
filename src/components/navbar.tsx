'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    
    const Links = [
        {href: '/', label: 'Home'},
        {href: '/about', label: 'Sobre'},
        {href: '/marketplace', label: 'Marketplace'},
        {href: '/faqs', label: 'FAQs'},
        {href: '/contacts', label: 'Contactos'}
    ]; 

    return (
        <nav className="flex gap-4 p-4">
            {Links.map((link) => (
                <Link key={link.href} href={link.href} className={`transition-colors duration-200 ${
                    pathname === link.href
                    ? 'text-[1BC768]' : 'text-[#1E1E1E]'
                }`}>
                    {link.href}
                </Link>
            ))}
        </nav>
    )
}