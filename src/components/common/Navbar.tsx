"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ModeToggle = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { name: "Home", href: "#" },
        { name: "Service", href: "#" },
        { name: "Feature", href: "#" },
        { name: "Product", href: "#" },
        { name: "Testimonial", href: "#" },
        { name: "FAQ", href: "#" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between px-[20px] py-[16px]">
            <div className="flex gap-[8px]">
                <div>
                    <Image src="/Icon.svg" width={35} height={24} alt="logo" />
                </div>
                <div>
                    <Image
                        src="/Nexcent.svg"
                        width={111.49}
                        height={20.66}
                        alt="logo"
                    />
                </div>
            </div>

            <div className="hidden lg:flex flex-row gap-10 h-[24px]">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-[#18191F] dark:text-white"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <div className="lg:hidden flex">
                <Button variant="ghost" className="text-black dark:text-white">
                    ☰
                </Button>
            </div>

            <div className="flex gap-[14px]">
                <ModeToggle />

                <Button
                    variant="outline"
                    className="border border-customGray bg-customGray p-[10px] pl-[20px] pr-[20px] rounded-tl-[6px]  text-[#4CAF4F] font-inter text-[14px] font-medium leading-[20px] text-center"
                >
                    Login
                </Button>

                <Button
                    className="bg-[#4CAF4F] text-[#FFFFFF] rounded-tl-[6px] p-[10px] pl-[20px] pr-[20px] font-inter text-[14px] font-medium leading-[20px] text-center"
                >
                    Sign up
                </Button>
            </div>
        </nav>
    );
};
