import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedValues, setSelectedValues] = useState({
    issue: false,
    feedback: false,
    suggestion: false,
    contact: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedValues({
      ...selectedValues,
      [name]: checked
    });
  };

  const handleButtonClick = () => {
    console.log('Selected values:', selectedValues);
  };
  return (
    <>
      <Navbar />
      <div className="flex gap-2 sm:gap-6 justify-center items-center mt-6 font-poppins">
        <Link href='/login' className="bg-blue-500 text-lg  hover:bg-blue-700 flex flex-col text-center text-white font-bold py-2 px-4 rounded">
          Login
          <span className=" text-sm  text-[#cecece] "> with all components </span>
        </Link>
        <Link href='/withoutlogin' className="bg-blue-500 text-lg  hover:bg-blue-700 flex flex-col text-center text-white font-bold py-2 px-4 rounded">
          WithoutLogin
          <span className=" text-sm text-[#cecece] "> with all components </span>
        </Link>

      </div>

      <div className="flex  gap-6 justify-center items-center mt-6 font-poppins border-t py-4 ">

        <div className="flex flex-col items-center py-4 px-6 rounded-xl justify-center bg-teal-500  mx-2 sm:mx-0 text-white">
          <h1 className="text-2xl font-bold px-2">Select components</h1>
          <div className="flex flex-col items-start justify-start">
            <label>
              <input
                type="checkbox"
                name="issue"
                checked={selectedValues.value1}
                onChange={handleCheckboxChange}
              />
              <span className="ml-1">Report an Issue</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="feedback"
                checked={selectedValues.value2}
                onChange={handleCheckboxChange}
              />
              <span className="ml-1">Share Feedback</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="suggestion"
                checked={selectedValues.value3}
                onChange={handleCheckboxChange}
              />
              <span className="ml-1">Give suggestion</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="contact"
                checked={selectedValues.value4}
                onChange={handleCheckboxChange}
              />
              <span className="ml-1">Contact Us</span>
            </label>
            <br />
          </div>
          <p className="text-sm text-center px-2 ">
            After selecting the values just click the below buttons to see the components
          </p>

          <div className="flex  gap-4 items-start justify-center mt-2">
            <Link onClick={handleButtonClick} href='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login  </Link>
            <Link href='/withoutlogin' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">WithoutLogin </Link>
          </div>
        </div>

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
