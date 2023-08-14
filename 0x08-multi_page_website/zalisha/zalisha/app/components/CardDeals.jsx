// import React from 'react'
import styles, {layout} from "../style"
import {js, python, react, next, django} from '../assets'
// import { card } from "../assets"
// import Button from "./Button"
import Image from "next/image"

const CardDeals = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="grid grid-cols-3 gap-4">
        <Image src={python} width={480} height={480} alt="py-logo" className="rounded-full"></Image>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <Image src={django} alt="django-logo"width={480} height={480} className="rounded-full"></Image>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <Image src={js} alt="js-logo" width={480} height={480} className="rounded-full"></Image>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <Image src={react} alt="react-logo" width={480} height={480} className="rounded-full"></Image>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <Image src={next} alt="next-logo" width={480} height={480} className="rounded-full"></Image>
      </div>
    </div>    
  </section>
)

export default CardDeals


/**
 * 
//  *   <div className={layout.sectionInfo}>
      
//       {/* <h2 className={styles.heading2}>
//         Find a better card deal <br className='sm:block hidden'/>
//         quickly and conveniently.
//       </h2> */
//       {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         We have partnerships that bring innovation,
//         efficiency and convenience to you. You can now work and play
//         from anywhere, at any time, with anyone, however you like.
//       </p> */}
//       {/* <Button styles={`mt-10`}/> */}
//       </div>

//       {/* <div className={layout.sectionImage}>
//         <Image src={card} alt="card-deals" className='w-[100%] h-[100%]'/>
//       </div> */}
