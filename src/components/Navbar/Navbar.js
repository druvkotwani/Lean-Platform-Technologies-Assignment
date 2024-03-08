
import Image from "next/image"

const Navbar = () => {
    return (
        <div className=" w-full  shadow-[0px_4px_4px_0px_#FFFFFF40] flex items-center justify-start" style={{ height: '122px', left: '1px', padding: '16px 20px 16px 20px' }}>
            <div className=" pt-[26.65px] pr-[23px] pb-[26.65px] pl-[23px] gap-[7.69px] flex justify-center items-center ">
                <span className="text-2xl  text-white font-medium ">The</span>
                <span className="text-2xl  text-black font-medium bg-white px-[3.59px] ">Product</span>
                <span className="text-2xl  text-white font-medium ">Platform</span>
            </div>

            <div className="flex justify-between items-center gap-3 ">
                <span>Learn</span>
                <span>Practise</span>
                <Image
                    priority
                    width={50}
                    height={50}
                    src='/images/Profileimg.png'
                    alt="Profile Image"
                />

            </div>
        </div>
    )
}

export default Navbar