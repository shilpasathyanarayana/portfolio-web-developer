import React, { useRef, useState } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const sendEmail = () => {
        console.log('sendEmail called!');
        console.log('form.current:', form.current);

        setStatusMessage('Sending...');

        emailjs.sendForm(
            'service_3xtcwg6',
            'template_81yxksw',
            form.current,
            's33D2aXAbFfvgjX_z'
        )
            .then((result) => {
                console.log('Email sent:', result.text);
                setStatusMessage('Email sent successfully!');
                setIsError(false);
                form.current.reset();
            })
            .catch((error) => {
                console.log('Email error:', error);
                setStatusMessage('Failed: ' + JSON.stringify(error));
                setIsError(true);
            });
    };

    return (
        <div className='contact-form'>
            <div className='w-left'>
                <div className='awesome'>
                    <span>Get In Touch</span>
                    <span>Contact Me</span>
                </div>
            </div>
            <div className='c-right'>
                <form ref={form}>
                    <input type='text' name='from_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email address' />
                    <textarea name='message' className='user' placeholder='message' />
                    {/* Removed onSubmit, using direct onClick instead */}
                    <button
                        type='button'
                        className='contact-btn'
                        onClick={() => {
                            console.log('Button clicked!');
                            sendEmail();
                        }}
                    >
                        send message
                    </button>

                    {statusMessage && (
                        <p style={{ color: isError ? 'red' : 'green' }}>
                            {statusMessage}
                        </p>
                    )}
                </form>


            </div>
        </div>
    )
}