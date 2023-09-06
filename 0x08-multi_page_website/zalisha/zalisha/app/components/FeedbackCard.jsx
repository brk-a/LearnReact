// import React from 'react'
import { quotes } from "../assets"
import Image from "next/image"

const FeedbackCard = ({content, name, title, image}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
   
    <Image src={quotes} alt="double-quotes" width={42} height={42} className="object-contain"/>
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
   
    <div className="flex flex-row">
      {/* <Image src={image} alt={name} width={48} height={48} quality={100} style={{borderRadius: '50%'}}/> */}
      <img src={image} alt={name} className={`w-[48px] h-[48px] rounded-full`}/>
      <div className="flex flex-col ml-[5px]">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
          {title}
        </p>
      </div>
    </div>
    
  </div>
)

export default FeedbackCard