// import React from 'react'
import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from '../components/GetStarted'
import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        {/* <div className='flex flex-row items-center py-[6px] px-4 bg-discounted-gradient rounded-[10px] mb-2'>
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span>
            {' '}Discount For {' '}
            <span className="text-white">1 Month</span>
            {' '}
            <span className="text-white">Account</span>
          </p>
        </div> */}

        <div className="flex flex-row items center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
           {/* Zalisha<br className="sm:block hidden"/>{' '} */}
            <span className="text-gradient">Tenda wema,</span><br className="sm:block hidden"/>{' '}
            <span className="text-gradient">nenda zako</span><br className="sm:block hidden"/>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        {/* Payment Method. */}
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto doloremque est rerum nulla suscipit, natus id laborum quisquam quaerat! 
        </p>
        
      </div>

      <div  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <Image src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5]'/> */}
        {/* <iframe src="https://www.youtube.com/watch?v=a3YDuqTb7xY" className={`w-[750px] h-[500px] border-none`}></iframe> */}
        <div className="rounded-xl outline-4 border border-[#ffe34d] p-2">
        <video width={900} height={600} controls>
          <source src="https://www.youtube.com/watch?v=a3YDuqTb7xY" type="video/mov"></source>
          <source src="https://www.youtube.com/watch?v=a3YDuqTb7xY" type="video/wmv"></source>
          <source src="https://www.youtube.com/watch?v=a3YDuqTb7xY" type="video/mp4"></source>
          <source src="https://www.youtube.com/watch?v=a3YDuqTb7xY" type="video/mpeg4"></source>
        </video>
        </div>
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20"/> */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  )
}

export default Hero