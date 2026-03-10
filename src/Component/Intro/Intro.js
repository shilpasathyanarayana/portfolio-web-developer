import React from 'react'
import './intro.css';
import Resume from './shilpa-sathyanarayana-resume.pdf';
import { MdMarkEmailUnread } from 'react-icons/md';
import Role from './Role';


export default function Intro() {
   
    return (
        <>
            <div className='into'>
                <div className='i-left'>
                    <div className='i-name'>
                        <span>Hi My name is <br/>Shilpa</span>
                        <span>I am a passionate</span>
                        <span>Full-Stack Developer</span>
                        <Role/>
                       
                    </div>
                    <a href={Resume} download={"shilpa-sathyanarayana-resume.pdf"}><button className='button i-button'>Download Resume</button></a>
                    <div className='i-icons'>
                        <a href="http://www.linkedin.com/in/shilpa-sathyanarayana" target='_blank' rel="noopener noreferrer"><img src='/images/linkedin (1).png' alt=''></img></a>
                        <a href="https://github.com/shilpasathyanarayana" target='_blank' rel="noopener noreferrer"><img src='/images/github (1).png' alt='' /></a>
                        <a href="mailto:shilpa.sathyanarayana5@gmail.com" target='_blank' rel="noopener noreferrer"><MdMarkEmailUnread size={100} color='orange' /></a>
                    </div>
                </div>

                <div className='i-right'>
                    <img src="/images/Vector1.png" alt=''/>
                    <img src="/images/Vector2.png" alt=''/>
                    <img src="/images/devoloper.png" alt=''/>
                </div>
            </div>
        </>
    )
}
