import React, { useState } from 'react'

const ContactCard = ({ handleSubmit }) => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const isMessageEmpty = message.trim() === ''

    return (
        <div className='bg-white w-full sm:w-[430px] gap-[32px] rounded-t-3xl  sm:rounded-lg flex flex-col items-start '>
            <header className='text-[#4D4D4D]   text-xl font-medium border-b-2  px-4 py-4 font-poppins flex items-center justify-center w-full'>
                <div className='px-4 flex flex-col items-center justify-center  '>
                    <p>Get in
                        <span className='text-black'> Contact with us </span>
                        for your
                    </p>
                    <span>queries!</span>
                </div>
            </header>

            <div className='w-full'>
                <div className='flex items-start flex-col justify-start px-4 '>
                    <p className='text-lg font-poppins font-medium text-[#4D4D4D]'>Your Name</p>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='w-full bg-[#E0E0E0] rounded-lg px-4 py-3 font-poppins font-medium text-lg border-[#CCCCCC] border' placeholder='Enter your name' />
                </div>
            </div>

            <div className='w-full flex flex-col'>
                <div className='flex items-start flex-col justify-start px-4 '>
                    <p className='text-lg font-poppins font-medium text-[#4D4D4D] flex  items-center justify-center gap-1'>
                        What would you like to ask?
                        <span>{astrix()}</span>
                    </p>
                </div>

                <div className='px-4 flex justify-start items-end '>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='resize-none w-full h-[130px]  bg-[#E0E0E0] rounded-lg px-4 py-3 font-poppins font-medium text-lg border-[#CCCCCC] border' placeholder='Write here...' />

                </div>

                <button onClick={() => handleSubmit('Thanks for reaching out to us! ', `We will get back to you as soon as possible`)} disabled={isMessageEmpty} className={`bg-[#0F0F0F] ml-auto mb-4 mx-4 px-5 py-[10px] ${message.length > 0 ? '' : 'opacity-[60%]'} rounded-lg text-lg font-poppins font-medium text-[#F8F8F8]  border mt-4`}>Submit</button>

            </div>

        </div>
    )
}

export default ContactCard

function astrix() {
    return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00013 4V12M11.4641 6L4.53613 10M4.53613 6L11.4641 10" stroke="#FD443A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}