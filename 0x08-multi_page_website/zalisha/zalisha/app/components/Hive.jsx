import React from 'react'
import styles, { layout } from "../style"
import {js, python, react, next, django} from '../assets'
import Image from "next/image"

const Hive = () => {
  return (
    <>
      <section className={layout.section}>
        <div className={`${layout.sectionInfo} flex justify-center items-center`}>
          <div className={`hex-container`}>
            <div className={`hex pos0`}></div>
            <div className={`hex pos1`}></div>
            <div className={`hex pos2`}></div>
            <div className={`hex pos3`}></div>
            <div className={`hex pos4`}></div>
            <div className={`hex pos5`}></div>
            <div className={`hex pos6`}></div>
          </div>



          <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
    </section >

    </>
  )
}

export default Hive

/**
 * 
 * <section className={layout.section}>
        <div className={layout.sectionInfo}>
        <div className="hexagon hex1">
          <Image src={js} alt="js-logo" />
        </div>
        <div className="hexagon hex2"></div>
        <div className="hexagon hex3"></div>
        <div className="hexagon hex4"></div>
        <div className="hexagon hex5"></div>
        <div className="hexagon hex6"></div>
      </div>
      </section>
 */