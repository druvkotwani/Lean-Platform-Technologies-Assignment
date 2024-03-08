import Fab from "../FAB/Fab"

const Hero = () => {
    return (
        <div className="">
            <div className="font-montserrat flex  justify-start fixed top-[162px] left-[67px] items-center gap-2">
                <span className="cursor-pointer">{arrowSVg()}</span>
                <span className="text-2xl font-medium text-white">Back to Questions</span>
            </div>

            <div className="top-[250px] left-[304px] fixed flex flex-col gap-5">
                <div className="w-[832px] h-[351px] bg-white rounded-md">
                    <div>

                    </div>
                </div>
                <div className="w-[832px] h-[351px] bg-white rounded-md">
                    <div>

                    </div>
                </div>
            </div>

            <Fab />
        </div>
    )
}

export default Hero

function arrowSVg() {
    return (
        <svg width="33" height="36" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.878681 20.8787C-0.292892 22.0502 -0.292893 23.9497 0.878681 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.78679C23.0416 0.615221 21.1421 0.615221 19.9706 1.78679L0.878681 20.8787ZM43 20L3 20L3 26L43 26L43 20Z" fill="#F8F8F8" />
        </svg>

    )
}