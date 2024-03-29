// import React from 'react'
import styles, {layout} from "../style"
import { card } from "../assets"
import Button from "./Button"

const CardDeals = () => (
  <section className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden'/>
        quickly and conveniently.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We have partnerships that bring innovation,
        efficiency and convenience to you. You can now work and play
        from anywhere, at any time, with anyone, however you like.
      </p>
      <Button styles={`mt-10`}/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card-deals" className='w-[100%] h-[100%]'/>
    </div>
    
  </section>
)

export default CardDeals