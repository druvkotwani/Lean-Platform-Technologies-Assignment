import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="">
                <Hero />
            </div>
        </>
    );
}
