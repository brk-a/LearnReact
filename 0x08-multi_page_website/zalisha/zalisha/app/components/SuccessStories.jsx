// import React from 'react'
import { successStories } from "../constants"
import styles, {layout} from "../style"
import Button from  './Button'
import Image from "next/image"

const FeatureCard = ({icon, title, content, index}) => {
  return(
    <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== successStories.length -1 ? 'mb-6' : 'mb-0'}`}>
    
    <div className={`w-[64px] h-[64-px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Image src={icon} alt={title} width={50} height={50} className=' object-contain'/>
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
  )
}

const SuccessStories = () => {
  return (
    <section id="success-stories" className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
           Success stories {/*<br className="sm:block hidden"/> we'll handle the money. */}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          Here are some of the projects we have worked on 
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>

      {/* <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div> */}
      <div className={`grid grid-flow-row gap-2 ${layout.sectionImage}`}>
        {successStories.map((feature, index) => (
          <a key={index} href={feature.link} className="no-underline">
            <FeatureCard key={feature.id} {...feature} index={index}/>
          </a>
        ))}
      </div>

    </section>
  )
}

export default SuccessStories