import React, { useEffect, useState } from 'react'
import ContactCard from '../Cards/ContactCard';
import SuggestionCard from '../Cards/SuggestionCard';
import FeedbackCard from '../Cards/FeedbackCard';
import IssueCard from '../Cards/IssueCard';
import Thanks from '../Thanks/Thanks';

const feedbackOptions = [
    {
        text: 'Report an Issue',
        icon: <Flag />,
        IconName: 'flag'
    },
    {
        text: 'Share Feedback',
        icon: <Thumbs />,
        IconName: 'thumb'
    },
    {
        text: 'Give Suggestion',
        icon: <Suggestion />,
        IconName: 'suggestion'
    },
    {
        text: 'Contact Us',
        icon: <ContactUS />,
        IconName: 'contactus'
    }
]


const Fab = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submit, setSubmit] = useState(true)
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')


    const handleToggle = () => {
        setIsOpen((open) => !open)
    }
    const handleSubmit = (one, two) => {
        setText1(one)
        setText2(two)
        handleToggle()
        setSubmit((submit) => !submit)
    }

    useEffect(() => {
        if (submit) {
            setTimeout(() => {
                setSubmit(false);
            }, 3000);
        }
    }, [submit])

    return (

        <div className='bottom-[32px] right-[32px] fixed '>

            {isOpen ?
                <OptionDiv handleSubmit={handleSubmit} handleToggle={handleToggle} />
                :
                <div className='flex flex-col items-end'>
                    {
                        submit && <Thanks text1={text1} text2={text2} />
                    }
                    <OpenFab handleToggle={handleToggle} />
                </div>
            }

        </div>

    )
}

export default Fab

const OptionDiv = ({ handleToggle, handleSubmit }) => {
    const [selectedIcon, setSelectedIcon] = useState('')




    return (
        <div className='flex flex-col items-end'>
            {
                selectedIcon === 'flag' && <IssueCard handleSubmit={handleSubmit} />
            }
            {
                selectedIcon === 'thumb' && <FeedbackCard handleSubmit={handleSubmit} />
            }
            {
                selectedIcon === 'suggestion' && <SuggestionCard handleSubmit={handleSubmit} />
            }
            {
                selectedIcon === 'contactus' && <ContactCard handleSubmit={handleSubmit} />
            }
            <div className={` bg-transparent   flex items-end ${!selectedIcon ? 'flex-col gap-6 w-[256px] ' : 'flex-row gap-2'}  `}>

                {
                    feedbackOptions.map((option, index) => {
                        return (
                            <EachOptioin
                                key={index}
                                text={option.text}
                                icon={option.icon}
                                IconName={option.IconName}
                                selectedIcon={selectedIcon}
                                setSelectedIcon={setSelectedIcon}
                            />
                        )
                    })
                }

                <CloseFab handleToggle={handleToggle} />
            </div >
        </div>

    )
}

const EachOptioin = ({ text, icon, IconName, selectedIcon, setSelectedIcon, }) => {


    return (
        <div onClick={() => {
            setSelectedIcon(IconName)
        }} key={text} className={`flex justify-center items-center font-poppins rounded-md`}>
            {
                !selectedIcon && <span className='mr-2 text-black text-[18px]  font-medium px-4 py-2 bg-white rounded-md cursor-pointer'>{text}</span>
            }

            <span className={`${selectedIcon === IconName ? 'shadow-[1px_1px_8px_0px_#808080] p-1 border-4 border-[#808080] rounded-full mt-2' : 'm-1'}     cursor-pointer `}>
                {React.cloneElement(icon, { setSelectedIcon })}
            </span>
        </div>
    )
}

function OpenFab({ handleToggle }) {
    return (
        <div onClick={handleToggle} className=' cursor-pointer w-14 h-14 rounded-full  bg-white flex items-center justify-center '>
            <svg className='ml-2' width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4645_6127)">
                    <path d="M19.7452 0H2.32296C1.04002 0 0 1.04002 0 2.32296V27.8755C0 29.1584 1.04002 30.1984 2.32296 30.1984H19.7452C21.0281 30.1984 22.0682 29.1584 22.0682 27.8755V2.32296C22.0682 1.04002 21.0281 0 19.7452 0Z" fill="#0F0F0F" />
                    <path d="M3.48438 6.96924L17.4222 6.96924" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                    <path d="M3.48438 11.6147L17.4222 11.6147" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                    <path d="M3.48438 16.2607L17.4222 16.2607" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                    <path d="M3.48438 20.9067H10.4533" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                    <path d="M25.2995 13.6118L16.5793 28.7155L16.9482 33.0538C17.0167 33.8594 17.8669 34.3503 18.5989 34.0068L22.5404 32.1571L31.2606 17.0535C31.902 15.9424 31.5214 14.5217 30.4103 13.8803L28.4727 12.7616C27.3616 12.1201 25.9409 12.5008 25.2995 13.6118Z" fill="#0F0F0F" stroke="#F8F8F8" stroke-width="1.16148" stroke-linecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_4645_6127">
                        <rect width="32" height="34" fill="white" />
                    </clipPath>
                </defs>
            </svg>



        </div>


    )
}

function CloseFab({ handleToggle }) {
    return (
        <div onClick={handleToggle} className='w-14 h-14 rounded-full cursor-pointer   bg-white flex items-center justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2.00122L22 22.0006M2 22.0006L22 2.00122" stroke="#0F0F0F" stroke-width="3.99994" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


        </div>

    )

}

function Flag({ setSelectedIcon }) {
    return (
        <div onClick={() => setSelectedIcon('flag')} className='w-14 h-14 rounded-full  bg-white flex items-center justify-center'>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.859375 10.8692V21.2692H2.33542H2.94479V17.4789V13.6845L3.2576 13.5301C5.20354 12.5835 7.40135 12.486 9.36354 13.266C9.59104 13.3554 10.1639 13.6276 10.6351 13.8714C11.1104 14.1151 11.6792 14.3873 11.9067 14.4767C13.8485 15.2485 15.896 15.3095 17.8745 14.6554C18.2401 14.5335 18.7195 14.3304 19.2151 14.0785L19.987 13.6926L19.9992 7.46885L20.0073 1.2451L19.5117 1.53354C17.8176 2.50448 16.6354 2.86604 15.1323 2.86604C14.4417 2.86604 13.8689 2.79292 13.227 2.61823C12.5648 2.44354 12.1545 2.27292 11.0089 1.68792C9.94042 1.1476 9.45292 0.952604 8.65667 0.753542C7.42167 0.440729 6.00792 0.424479 4.74448 0.708853C4.27729 0.814478 3.68417 1.00135 3.26573 1.1801L2.94479 1.31417V0.891666V0.469166H2.33542H0.859375V10.8692Z" fill="#0F0F0F" />
            </svg>


        </div>

    )
}


function Thumbs({ setSelectedIcon }) {
    return (
        <div onClick={() => setSelectedIcon('thumb')} className='w-14 h-14 rounded-full  bg-white flex items-center justify-center'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4645_2445)">
                    <path d="M23.5638 29.6247C24.0398 29.4996 24.2015 29.1121 24.2503 27.9588C24.2717 27.5286 24.2961 27.2723 24.3418 27.0892C24.4242 26.7505 24.6805 26.2318 24.9429 25.884C25.309 25.3958 26.0291 24.7307 26.5905 24.3584L26.7217 24.273V20.2394V16.2028L26.383 16.0594C25.4799 15.678 24.3052 15.3698 23.0756 15.1929C22.1694 15.0617 21.5836 15.0281 20.2076 15.0251C18.9322 15.022 18.8895 15.0251 18.6576 15.0922C17.7576 15.3515 17.0985 15.9801 16.8392 16.8222C16.8026 16.9381 16.5982 18.0304 16.3846 19.2478C16.0154 21.3683 16.0001 21.4782 16.0001 21.8718C16.0032 22.2288 16.0154 22.3203 16.0856 22.5583C16.3236 23.3455 16.8758 23.9587 17.6172 24.2547C18.0474 24.4286 18.1451 24.4347 19.9788 24.4347H21.6508L21.544 24.7337C21.2968 25.4263 21.187 26.1006 21.187 26.9366C21.187 27.5835 21.2206 27.8001 21.3731 28.1815C21.5074 28.5202 21.6538 28.7398 21.9284 29.0114C22.2 29.2829 22.4532 29.4416 22.8071 29.5636C22.9993 29.6308 23.4173 29.6643 23.5638 29.6247Z" fill="#0F0F0F" />
                    <path d="M30.8134 24.8744C31.146 24.7738 31.4389 24.4747 31.5426 24.13C31.6036 23.9347 31.6036 23.8554 31.5975 19.9804L31.5884 16.0292L31.4877 15.8248C31.3656 15.5746 31.1246 15.3458 30.8775 15.2451C30.7066 15.1749 30.6822 15.1749 29.6509 15.1749C28.6197 15.1749 28.5952 15.1749 28.4244 15.2451C28.1772 15.3458 27.9362 15.5746 27.8142 15.8248L27.7135 16.0292L27.7043 19.9804C27.6982 23.8554 27.6982 23.9347 27.7592 24.13C27.866 24.4839 28.1559 24.7738 28.5007 24.8775C28.7203 24.9416 30.6029 24.9416 30.8134 24.8744Z" fill="#0F0F0F" />
                    <path d="M8.43522 2.3746C7.95925 2.49969 7.79755 2.88718 7.74873 4.04051C7.72737 4.47072 7.70296 4.72701 7.6572 4.91008C7.57482 5.24875 7.31852 5.76744 7.05613 6.11527C6.69 6.60345 5.96994 7.26859 5.40854 7.64083L5.27734 7.72626V11.7598V15.7965L5.61602 15.9399C6.51914 16.3213 7.69381 16.6294 8.9234 16.8064C9.82957 16.9376 10.4154 16.9712 11.7914 16.9742C13.0668 16.9773 13.1095 16.9742 13.3414 16.9071C14.2415 16.6477 14.9005 16.0192 15.1598 15.1771C15.1964 15.0612 15.4009 13.9689 15.6144 12.7515C15.9836 10.6309 15.9989 10.5211 15.9989 10.1275C15.9958 9.77051 15.9836 9.67898 15.9135 9.44099C15.6755 8.6538 15.1232 8.04053 14.3818 7.74457C13.9516 7.57065 13.854 7.56455 12.0203 7.56455H10.3483L10.455 7.26554C10.7022 6.57294 10.812 5.89864 10.812 5.06263C10.812 4.4158 10.7785 4.19917 10.6259 3.81778C10.4917 3.4791 10.3452 3.25942 10.0706 2.98787C9.79906 2.71632 9.54582 2.55766 9.1919 2.43562C8.99968 2.36849 8.58168 2.33493 8.43522 2.3746Z" fill="#0F0F0F" />
                    <path d="M1.18564 7.12483C0.853068 7.22551 0.560163 7.52452 0.456425 7.8693C0.395404 8.06457 0.395404 8.1439 0.401506 12.0188L0.410659 15.97L0.511345 16.1745C0.633389 16.4246 0.874425 16.6535 1.12156 16.7542C1.29242 16.8243 1.31683 16.8243 2.3481 16.8243C3.37937 16.8243 3.40378 16.8243 3.57464 16.7542C3.82178 16.6535 4.06282 16.4246 4.18486 16.1745L4.28555 15.97L4.2947 12.0188C4.3008 8.1439 4.3008 8.06457 4.23978 7.8693C4.13299 7.51537 3.84314 7.22551 3.49837 7.12178C3.27869 7.0577 1.39616 7.0577 1.18564 7.12483Z" fill="#0F0F0F" />
                </g>
                <defs>
                    <clipPath id="clip0_4645_2445">
                        <rect width="31.2" height="31.2" fill="white" transform="translate(0.399902 0.400024)" />
                    </clipPath>
                </defs>
            </svg>


        </div>


    )
}

function Suggestion({ setSelectedIcon }) {
    return (
        <div onClick={() => setSelectedIcon('suggestion')} className='w-14 h-14 rounded-full  bg-white flex items-center justify-center'>
            <svg width="31" className='ml-2 mt-1' height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.934082 0.533813V3.63266H17.9778V0.533813H0.934082ZM0.934082 6.73151V9.83037H17.9778V6.73151H0.934082ZM27.2743 6.88646C27.1194 6.88646 26.8095 7.0414 26.6545 7.19634L25.1051 8.74577L28.3589 11.9996L29.9083 10.4501C30.2182 10.1402 30.2182 9.52048 29.9083 9.2106L27.8941 7.19634C27.7391 7.0414 27.5842 6.88646 27.2743 6.88646ZM24.3304 9.67542L14.8789 18.972V22.2258H18.1327L27.5842 12.7743L24.3304 9.67542ZM0.934082 12.9292V16.0281H11.7801V12.9292H0.934082Z" fill="#0F0F0F" />
            </svg>
        </div>




    )
}

function ContactUS({ setSelectedIcon }) {
    return (
        <div onClick={() => setSelectedIcon('contactus')} className='w-14 h-14 rounded-full  bg-white flex items-center justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.57813 0.0334492C2.33438 0.0709486 1.84219 0.249067 1.57032 0.389687C1.20001 0.586555 0.585943 1.2006 0.389068 1.5709C0.309381 1.72558 0.192193 1.99744 0.131256 2.18025L0.0234431 2.50836V6.46916C0.0234431 10.7581 0.0187556 10.6409 0.281256 11.2315C0.623443 11.9908 1.41094 12.6939 2.14219 12.8861L2.33907 12.9377L2.35313 13.9126C2.36719 14.9954 2.39532 15.0939 2.68594 15.2767C2.87344 15.3938 3.18282 15.4079 3.36563 15.3095C3.43594 15.272 3.98907 14.7423 4.59376 14.1376L5.69532 13.0314H5.91094H6.13126L6.15469 11.9393C6.17344 10.9971 6.18751 10.8049 6.27657 10.505C6.73126 8.96282 7.87501 7.81911 9.42188 7.35038C9.76876 7.24726 9.80157 7.24726 13.1156 7.22851L16.4531 7.21445V4.93171C16.4531 2.42868 16.4438 2.32556 16.1672 1.74901C15.8766 1.13966 15.375 0.638116 14.7422 0.324064C14.0625 -0.0134239 14.3438 0.000638008 8.20313 0.0100126C5.17501 0.0100126 2.64376 0.0240746 2.57813 0.0334492Z" fill="black" />
                <path d="M9.80625 8.72032C8.74687 8.99687 7.9125 9.84528 7.63594 10.914C7.55156 11.2468 7.54688 11.4624 7.54688 15.0951C7.54688 17.5934 7.56562 19.0184 7.59844 19.2012C7.62187 19.3512 7.74375 19.6793 7.86094 19.9231C8.22656 20.6777 8.88281 21.2402 9.72656 21.5261L10.0547 21.6339L14.1797 21.648L18.3047 21.6621L19.4531 22.8011C20.6766 24.0198 20.7281 24.0573 21.0891 23.9776C21.2531 23.9448 21.4875 23.762 21.5766 23.6073C21.6141 23.5417 21.6422 23.1761 21.6562 22.5292L21.6797 21.5496L21.8672 21.4933C22.1812 21.3996 22.6172 21.1558 22.9172 20.9074C23.4469 20.4668 23.85 19.7402 23.9531 19.0512C23.9812 18.859 24 17.2325 24 15.0482C24 10.9327 24.0047 10.9984 23.6766 10.3375C23.3625 9.70466 22.8609 9.20312 22.2516 8.9125C21.6328 8.6172 21.9 8.62657 15.75 8.63126C10.3875 8.63126 10.1344 8.63595 9.80625 8.72032Z" fill="black" />
            </svg>

        </div>

    )
}
