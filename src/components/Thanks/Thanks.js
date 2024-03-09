import React from 'react'

const Thanks = ({ text1 = 'Thanks for bringing the issue to our attention.', text2 = `We'll review it shortly and provide an update soon!` }) => {
  return (
    <>
      <div className='bg-white font-poppins font-semibold text-lg text-center shadow-[-2px_4px_30px_0px_#00000033] rounded-lg p-2 mb-4 arrow_box'>
        <span>{text1}</span>
        <br />
        <span>{text2}</span>
      </div>

    </>
  )
}

export default Thanks