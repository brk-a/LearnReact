// import React from 'react'
import styles from "../style"
import {fnjakai, logo, zalishaGold} from '../assets'
import{footerLinks, socialMedia} from '../constants'
import Image from "next/image"
import Link from "next/link"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className={`flex-1 flex flex-col justify-start mr-10`}>
        <a href={`#home`}>
          <Image src={zalishaGold} width={200} height={200} alt="logo" className={` object-contain`}/>
          {/* <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Relaax. Uncle Frankie's here.</p> */}
        </a>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px]  hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4': 'mb-9'}`}>
                  <Link href={link.link} className="text-white list-none no-underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flox-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        &copy; 2023 - 2033 &emsp; &emsp; Zalisha &emsp; &emsp; All rights reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <a key={social.id}  href={social.link}>
            <Image src={social.icon} alt={social.id} width={56} height={56} className={`object-contain cursor-pointer ${index !== socialMedia.length ? 'mr-6': 'mr-0'}`}/>
          </a>
          
        ))}
      </div>
    </div>

  </section>
)

export default Footer