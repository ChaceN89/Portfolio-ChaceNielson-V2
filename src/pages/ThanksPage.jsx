/**Shows after an email is send, will redirect to home page after 4 seconds  */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AiOutlineCheckCircle } from "react-icons/ai";
import MyButton from '../components/buttons/MyButton';

import BackgroundWrapper from '../wrappers/BackgroundWrapper';

function ThanksPage() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate('/')
        }, 4000)
    }, [navigate])

    const returnHome = () => {
      navigate('/')
    }

    return (
      <BackgroundWrapper 
        id="AboutMe" 
        className="min-h-section-height h-full flex items-center justify-center"      
        src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-trim.png"}
        lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-mountain-small.png"}
        bgOpacity={55}
        backgroundSize = "cover"
      >
        <div className="flex flex-col items-center justify-center space-y-5 bg-frosted-glass  rounded-2xl max-w-lg border-faint">
            <AiOutlineCheckCircle size={100}/>
            <h1 className="text-4xl font-bold text-center">Thank You!</h1>
            <p className='text-center'>I appreciate your interest and I will get back to you as soon as possible </p>
            <MyButton onClick={returnHome}>Home</MyButton>
        </div>
      </BackgroundWrapper>
  )
}

export default ThanksPage