import Image from "next/image"

const Navbar = () => {
    return (
        <div className="  w-full shadow-[0px_4px_4px_0px_#FFFFFF40]  h-[102px] flex items-center justify-between sm:px-5 sm:py-4 pr-4">

            <div className=" py-[26.65px] px-[23px] gap-[7.69px] flex justify-center text-xl sm:text-2xl items-center font-montserrat font-medium text-white">
                <span className="">The</span>
                <span className=" text-black  bg-white px-[3.59px] ">Product</span>
                <span className="">Platform</span>
            </div>

            <div className="flex justify-between items-center gap-3 text-2xl ">
                <span className="px-5 py-4 text-[#FEFEFE80]  justify-center font-inter items-center gap-[10px] cursor-pointer sm:flex hidden">
                    Learn
                    {downSvg()}
                </span>
                <span className="px-5 py-4 text-[#FEFEFE80]  justify-center font-inter items-center gap-[10px] cursor-pointer sm:flex hidden">
                    Practise
                    {downSvg()}
                </span>
                <Image
                    priority
                    width={40}
                    height={40}
                    src='/images/Profileimg.png'
                    alt="Profile Image"
                />
            </div>

        </div>
    )
}

export default Navbar

function downSvg() {
    return (
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.36975 2L10.0336 10L18 2" stroke="#FEFEFE" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
        </svg>


    )
}