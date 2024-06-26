// import React from 'react'
import styles from "../style"
import {fnjakai, logo} from '../assets'
import{footerLinks, socialMedia} from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className={`flex-1 flex flex-col justify-start mr-10`}>
        <a href={`#home`}>
          <img src={fnjakai} alt="logo" className={`w-[288px] h-[288px] object-contain`}/>
          {/* <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Relaax. Uncle Frankie's here.</p> */}
        </a>
      </div>

      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4': 'mb-9'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flox-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 - { new Date().getFullYear() + 10} &emsp; &emsp; &emsp; FNjakai &reg; &emsp; &emsp; &emsp; All rights reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <a key={social.id}  href={social.link}>
            <img src={social.icon} alt={social.id} className={`w-[56px] h-[56px] object-contain cursor-pointer ${index !== socialMedia.length ? 'mr-6': 'mr-0'}`}/>
          </a>
          
        ))}
      </div>
    </div>

  </section>
)

export default Footer