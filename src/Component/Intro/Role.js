import React from 'react'
import Typed from 'typed.js';
import './intro.css'
export default function Role() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front End', 'Back End'],
            typeSpeed: 50,
            loop: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='role'>
            <span  ref={el} />
        </div>
    );
}
