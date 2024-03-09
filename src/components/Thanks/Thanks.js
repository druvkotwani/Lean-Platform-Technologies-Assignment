import React from 'react'

const Thanks = ({ text1, text2 }) => {
  return (
    <>
      <div className='bg-white font-poppins font-semibold text-lg text-center shadow-[-2px_4px_30px_0px_#00000033] rounded-lg p-2 mb-4 arrow_box'>
        <span>{text1}</span>
        <br />
        {
          text2 && <span>{text2}</span>
        }
      </div>

    </>
  )
}

export default Thanks