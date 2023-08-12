// import React from 'react'
import styles, {layout} from "../style"
import {js, python, react, next, django} from '../assets'
// import { card } from "../assets"
// import Button from "./Button"

const CardDeals = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="grid grid-cols-3 gap-4">
        <img src={python} alt="py-logo" className="rounded-full"></img>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <img src={django} alt="django-logo" className="rounded-full w-[400px] h-[400px]"></img>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <img src={js} alt="js-logo" className="rounded-full"></img>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <img src={react} alt="react-logo" className="rounded-full"></img>
        <div className="rounded-full  w-[480px] h-[480px] bg-none border-none"></div>
        <img src={next} alt="next-logo" className="rounded-full  w-[432px] h-[432px]"></img>
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

//       {/* <div className={layout.sectionImg}>
//         <img src={card} alt="card-deals" className='w-[100%] h-[100%]'/>
//       </div> */}
