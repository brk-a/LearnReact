import React from 'react'
import styles, {layout} from "../style"
import {js, python} from '../assets'

const Hive = () => {
  return (
    <>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
        <div className="hexagon hex1">
          <img src={js} alt="js-logo" />
        </div>
        <div className="hexagon hex2"></div>
        <div className="hexagon hex3"></div>
        <div className="hexagon hex4"></div>
        <div className="hexagon hex5"></div>
        <div className="hexagon hex6"></div>
      </div>
      </section>
    </>
  )
}

export default Hive