import React from 'react'
import './work.css';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { motion } from "framer-motion";

export default function Works() {
    return (
        <>
            <div className='works'>
                {/* left side */}
                <div className='awesome'>
                    <span>Frame Works and services</span>
                    <span>I have learned so far</span>
                    <div>
                        Front-End Frameworks - React
                        <br />
                        BackEnd Frameworks -Node.js
                        <br />
                        CSS frameWorks - Bootstrap
                        <br />
                        and Libraries
                    </div>
                    <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
                </div>
                {/* right side */}
                <div className='w-right'>
                    <motion.div
                        initial={{ rotate: 45 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle"
                    >
                        <div className='w-secondaryCircle'>
                            <FaReact size={100} style={{ color: 'darkblue' }} />
                        </div>
                        <div className='w-secondaryCircle'>
                            <TbBrandNextjs size={100} style={{ color: 'var(--orange)' }} />
                        </div>
                        <div className='w-secondaryCircle'>
                            <BsBootstrapFill size={90} style={{ color: 'darkblue' }} />
                        </div>
                        <div className='w-secondaryCircle'>
                            <SiMysql size={115} style={{ color: 'var(--orange)' }} />
                        </div>
                    </motion.div>
                    <div className='w-backCircle blueCircle'></div>
                    <div className='w-backCircle yellowCircle'></div>
                </div>
            </div>
        </>
    )
}
