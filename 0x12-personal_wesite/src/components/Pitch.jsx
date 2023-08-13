import { features } from "../constants"
import styles, {layout} from "../style"
import Button from  './Button'

const FeatureCard = ({icon, title, content, index}) => {
    return(
      <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== features.length -1 ? 'mb-6' : 'mb-0'}`}>
      
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

const Pitch = () => {
    return (
      <section id="pitch" className={layout.section}>

        <div className={`${layout.sectionImg} flex-col`}>
          {/* {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))} */}
          <p className={`${styles.paragraph} max-w-[370px] mt-5 mr-10`}>
              The name’s Njakai; F Njakai. I am a full stack software developer with a year’s worth of
              experience. Before that, I was a financial analyst for three years.
              My stack is JS, React.js and Next.js in the front-end and Python, JS, Django and Postgres in
              the back-end.
              I apply an ethos of consistency, life-long learning and first-principles-problem-solving in my work and
              life.
              Get me the role and test me on my ethos
          </p>
        </div>
  
        <div className={`${layout.sectionInfo} ml-10`}>
          <h2 className={styles.heading2}>
             Elevator Pitch {/*<br className="sm:block hidden"/> we'll handle the money. */}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            This is the latest version of my elevator pitch
          </p>
          {/* <Button styles='mt-10'/> */}
        </div>
  
        {/* <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))}
        </div> */}
  
      </section>
    )
  }
  
  export default Pitch