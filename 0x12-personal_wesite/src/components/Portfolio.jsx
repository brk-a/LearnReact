// import React from 'react'
import { portfolio } from "../constants"
import styles, {layout} from "../style"
import Button from  './Button'
import Example from "./Carousel"

const FeatureCard = ({icon, title, content, index}) => {
  return(
    <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== portfolio.length -1 ? 'mb-6' : 'mb-0'}`}>
    
    <div className={`w-[64px] h-[64-px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={title} className='w-[50%] h-[50%] object-contain'/>
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
  )
}

const Portfolio = () => {
  return (
    <section id="portfolio" className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
           Portfolio projects {/*<br className="sm:block hidden"/> we'll handle the money. */}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Here are some of the projects I have worked on 
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>

      {/* <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div> */}
      <div className={`grid grid-flow-row gap-2 ${layout.sectionImg}`}>
        {portfolio.map((feature, index) => (
          <a key={index} href={feature.link}>
            <FeatureCard key={feature.id} {...feature} index={index}/>
            {/* <Example></Example> */}
          </a>
        ))}
      </div>

    </section>
  )
}

export default Portfolio