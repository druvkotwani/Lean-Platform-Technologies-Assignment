import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex gap-6 justify-center items-center mt-6">
        <Link href='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login Page</Link>
        <Link href='/withoutlogin' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">WithoutLogin Page</Link>

      </div>

      <footer className="fixed bottom-0 footer w-full flex items-center justify-center p-4 bg-base-100  border-t-2 font-poppins">
        <aside className="items-center grid-flow-col">
          <span className="text-sm source-code-pro bold text-white">Assignment done with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500"> ❤️ </span>
            by
            <a href='https://dhruvkotwani.me/' className='text-sky-600  '> Dhruv Kotwani</a>
          </span>
        </aside>
      </footer >
    </>
  );
}
