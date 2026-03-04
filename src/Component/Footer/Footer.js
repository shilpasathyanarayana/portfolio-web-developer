import React from 'react'
import './footer.css';
import { AiFillInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='footer'>
                <img src='./images/wave.png' style={{ width: '100%' }}></img>
                <div className='f-content'>
                    <div>
                        <a href="mailto:shilpa.sathyanarayana5@gmail.com"><span><AiTwotoneMail />shilpa.sathyanarayana5@gmail.com</span></a>
                        <br />
                        <a href="tel:8255221549"><span style={{ marginLeft: '70px' }}> <HiOutlinePhoneMissedCall />+1(825)-522-1549</span></a>
                    </div>
                    <div className='f-icons'>
                        <a href="http://www.linkedin.com/in/shilpa-sathyanarayana"><BsLinkedin size={30} /></a>
                        <a href="https://instagram.com/s_n_shilpa?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram size={30} /></a>
                        <a href="https://github.com/shilpasathyanarayana"><BsGithub size={30} /></a>
                    </div>
                    <div style={{ marginBottom: '0px' }}>
                        <i>&copy; {currentYear} Shilpa</i>
                    </div>

                </div>

            </div>
        </>
    )
}
