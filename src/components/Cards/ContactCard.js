import React from 'react'

const ContactCard = () => {
    return (
        <div className='bg-white h-[540px] w-[430px] gap-[32px] rounded-lg flex flex-col items-start '>
            <header className='text-[#4D4D4D]  text-xl font-medium border-b-2  px-4 py-4 font-poppins flex items-center justify-center w-full'>
                <p className='px-4'>
                    Let us know about the Issue
                    <br />
                    you are facing right now!
                </p>
            </header>

            <div className='w-full'>
                <div className='flex items-start flex-col justify-start px-4 '>
                    <p className='text-lg font-poppins font-medium text-[#4D4D4D]'>Choose a section</p>
                    <select value={selectedOption} onChange={handleOptionChange} className='bg-[#E0E0E0] w-full py-3 px-4 rounded-lg text-lg font-poppins font-medium border-[#CCCCCC] border  '>
                        <option value="">Concept Cards</option>
                        <option value="option1">Interview Questions</option>
                        <option value="option2">Practise Questions</option>
                        <option value="option3">Quizzes</option>
                    </select>
                </div>
            </div>

            <div className='w-full flex flex-col'>
                <div className='flex items-start flex-col justify-start px-4 '>
                    <p className='text-lg font-poppins font-medium text-[#4D4D4D] flex  items-center justify-center gap-1'>
                        Describe the issue in detail
                        <span>{astrix()}</span>
                    </p>
                </div>

                <div className='px-4 flex justify-start items-end '>
                    <textarea className='resize-none w-full h-[200px] bg-[#E0E0E0] rounded-lg px-4 py-3 font-poppins font-medium text-lg border-[#CCCCCC] border' placeholder='Write here...' />
                    <button className='absolute flex justify-center items-center  bg-[#C7C7C7] px-[10px] py-1 ml-2 mb-2 rounded-md font-medium text-black font-poppins text-[19px]'>
                        <span>
                            {attach()}
                        </span>
                        Attach
                    </button>

                </div>


                <button className='bg-[#0F0F0F] ml-auto mx-4 px-5 py-[10px] opacity-[60%] rounded-lg text-lg font-poppins font-medium text-[#F8F8F8]  border mt-4'>Submit</button>
            </div>

        </div>
    )
}

export default ContactCard