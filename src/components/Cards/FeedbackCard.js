import React, { useState } from 'react'

const FeedbackCard = ({ handleSubmit }) => {
    const [messages, setMessages] = useState('')
    let isMessageEmpty = messages.trim() === ''

    return (
        <div className='bg-white w-[430px] gap-[32px] rounded-lg flex flex-col items-start '>
            <header className='text-[#4D4D4D]  text-xl font-medium border-b-2  px-4 py-4 font-poppins flex items-center justify-center w-full'>
                <p className='px-4 text-center '>
                    Let us know your <span className='text-black'>Feedback</span>
                    <br />
                    about us!
                </p>
            </header>



            <div className='w-full flex flex-col'>

                <div className='px-4 flex justify-start items-end '>
                    <textarea onChange={(e) => setMessages(e.target.value)} className='resize-none w-full h-[200px] bg-[#E0E0E0] rounded-lg px-4 py-3 font-poppins font-medium text-lg border-[#CCCCCC] border' placeholder='Write here...' />
                    <button className='absolute flex justify-center items-center  bg-[#C7C7C7] px-[10px] py-1 ml-2 mb-2 rounded-md font-medium text-black font-poppins text-[19px]'>
                        <span>
                            {attach()}
                        </span>
                        Attach
                    </button>

                </div>
                <div className='p-4 font-poppins text-lg font-medium flex items-center justify-start'>
                    <input type='checkbox' className='mr-2 w-5 h-5' />
                    Send feedback anonymously
                </div>

                <button onClick={handleSubmit} disabled={isMessageEmpty} className={`bg-[#0F0F0F] ml-auto mb-4 mx-4 px-5 py-[10px] ${isMessageEmpty ? "opacity-[60%]" : ""} rounded-lg text-lg font-poppins font-medium text-[#F8F8F8]  border mt-4`}>Submit</button>
            </div>

        </div>
    )
}

export default FeedbackCard

function attach() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4995 6.7478V17.3278C16.4995 19.4178 14.9695 21.2778 12.8895 21.4778C12.3339 21.5333 11.7727 21.4717 11.2424 21.2968C10.712 21.122 10.2243 20.8379 9.81055 20.4628C9.39684 20.0878 9.0664 19.6301 8.84058 19.1194C8.61475 18.6086 8.49856 18.0562 8.49951 17.4978V5.1378C8.49951 3.8278 9.43951 2.6378 10.7395 2.5078C11.0881 2.47134 11.4406 2.50861 11.7738 2.61718C12.1071 2.72576 12.4139 2.90321 12.6742 3.13802C12.9344 3.37282 13.1424 3.65974 13.2846 3.98014C13.4268 4.30054 13.5 4.64726 13.4995 4.9978V15.4978C13.4995 16.0478 13.0495 16.4978 12.4995 16.4978C11.9495 16.4978 11.4995 16.0478 11.4995 15.4978V6.7478C11.4995 6.3378 11.1595 5.9978 10.7495 5.9978C10.3395 5.9978 9.99951 6.3378 9.99951 6.7478V15.3578C9.99951 16.6678 10.9395 17.8578 12.2395 17.9878C12.5881 18.0243 12.9406 17.987 13.2738 17.8784C13.6071 17.7698 13.9139 17.5924 14.1742 17.3576C14.4344 17.1228 14.6424 16.8359 14.7846 16.5155C14.9268 16.1951 15 15.8483 14.9995 15.4978V5.1678C14.9995 3.0778 13.4695 1.2178 11.3895 1.0178C10.834 0.96307 10.2732 1.02527 9.7432 1.20039C9.2132 1.37551 8.72574 1.65968 8.3122 2.03459C7.89866 2.40951 7.56821 2.86687 7.34213 3.37722C7.11605 3.88757 6.99934 4.43961 6.99951 4.9978V17.2678C6.99951 20.1378 9.09951 22.7078 11.9595 22.9778C15.2495 23.2778 17.9995 20.7178 17.9995 17.4978V6.7478C17.9995 6.3378 17.6595 5.9978 17.2495 5.9978C16.8395 5.9978 16.4995 6.3378 16.4995 6.7478Z" fill="#333333" />
        </svg>

    )
}
