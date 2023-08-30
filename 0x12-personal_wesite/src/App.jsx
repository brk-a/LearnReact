import React from 'react'
import styles from './style'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Hero, Hive, Stats, Billing, Business, CallToAction, CardDeals, Clients, Footer, Testimonials} from './components'
import Portfolio from './components/Portfolio'
import Pitch from './components/Pitch'
import Example from './components/Carousel'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter }`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats></Stats> */}
          {/* <Business></Business> */}
          {/* <Example></Example> */}
          <Portfolio></Portfolio>
          {/* <Billing></Billing> */}
          <CardDeals></CardDeals>
          {/* <Hive></Hive> */}
          <Pitch></Pitch>
          {/* <Testimonials></Testimonials> */}
          {/* <Clients></Clients> */}
          {/* <CallToAction></CallToAction> */}
          <Footer></Footer>
        </div>
      </div>

    </div>
  )
}

export default App