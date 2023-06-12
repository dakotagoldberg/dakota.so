"use client"
import Link from "next/link";
import { NameChip } from "./name-chip";
import { ModeToggle } from "./mode-toggle";
import navLinks from "@/app/nav-links";
import { useState } from "react";

export function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="flex flex-row items-center justify-between">
            <NameChip />
            <nav className="hidden sm:flex flex-row justify-end items-center ml-auto text-sm font-medium space-x-6">
                {navLinks.map((link) => (
                    <Link key={link.title} href={link.href}>{link.title}</Link>
                ))}
                <ModeToggle />
            </nav>
            <div className="sm:hidden flex flex-row items-center">
                <ModeToggle />
                <span onClick={() => setMenuOpen(true)} className="ml-3 icon-[ri--menu-fill] bg-lilac-950 dark:bg-lilac-100 h-7 w-7"></span>
            </div>
        </div>
        
        {menuOpen && (
            <div onClick={() => setMenuOpen(false)} className="fixed bg-[#000000AA] inset-x-0 inset-y-0 z-40 flex flex-col justify-center items-center">
                <div className="fixed bg-white dark:bg-black dark:border-lilac-900 dark:border-1 opacity-100 px-6 py-5 z-50 rounded-2xl">
                    <nav className="flex flex-col justify-center items-center w-full text-sm font-medium">
                        <div className="flex flex-row justify-between items-center w-full mb-6">
                            <div className="font-semibold text-xl tracking-tight text-lilac-950 dark:text-lilac-100">Menu</div>
                            <span onClick={() => setMenuOpen(false)} className="icon-[ri--close-fill] bg-lilac-700 dark:bg-lilac-500 h-8 w-8"></span>
                        </div>
                        {navLinks.map((link) => (
                            <Link onClick={() => setMenuOpen(false)} key={link.title} href={link.href} className="text-center my-2 w-full">
                                <div className="text-xl tracking-tight gradient-subtle-violet-with-border border-1 px-16 py-2 rounded-md">{link.title}</div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        )}
        
    </>
    )
}