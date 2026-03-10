import React, { useState } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { TbSquareLetterS } from 'react-icons/tb'
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className='title'>
                <a
                    href="/"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    Shilpa Sathya Narayana
                </a>
            </div>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <GiHamburgerMenu size={30} />
            </div>
            <ul style={{ listStyleType: 'none' }} className={menuOpen ? "open" : "NoStyle"}>
                <a href="About"><li>About Me</li></a>
                <a href="Projects"><li>Projects</li></a>
                <a href="ContactNav"><li>Contact</li></a>
            </ul>
            <a href="tel:+18255221549"><button className='button n-button'>Call</button></a>
        </nav>
    );
}


// <div className='n-wrapper'>
//     <div className='n-left'>
//         <div className='n-name'>SHILPA</div>
//     </div>
//     <div className='n-right'>
//         <div className='n-list'>
//             <ul style={{ listStyleType: 'none' }} className={menuOpen ? "open" : "NoStyle"}>
//                 <a href="About"><li>About Me</li></a>
//                 <a href="Projects"><li>Projects</li></a>
//                 <a href="ContactNav"><li>Contact</li></a>
//                 <button className='button n-button'>Call</button>
//             </ul>
//         </div>
//         <div className='hamberger' onClick={() => {
//             setMenuOpen(!menuOpen);
//         }}>
//             <GiHamburgerMenu size={30} />
//         </div>
//     </div>
// </div >
