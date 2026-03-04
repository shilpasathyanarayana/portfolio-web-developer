import React, { useRef, useState } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
export default function Contact() {
    // from emailjs- react page
    const form = useRef();

    // ✅ Make sure these are declared here, inside the component
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false);


    // to display message on sending the message
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatusMessage('');
        setIsError(false);
        // service-id, template-id and public key is copied from my  emailjs account.
        emailjs.sendForm('service_3xtcwg6', 'template_81yxksw', form.current, 's33D2aXAbFfvgjX_z')
            .then(
                (result) => {
                    console.log('Email sent:', result.text);
                    setStatusMessage('Email sent successfully!');
                    setIsError(false);
                    e.target.reset(); // Reset form after success
                },
                (error) => {
                    console.log('Email error:', error.text);
                    setStatusMessage('Failed to send message. Please try again.');
                    setIsError(true);
                }
            );
    };
    // -----------------------------------
    return (
        <div className='contact-form'>
            <div className='w-left'>
                <div className='awesome'>
                    <span>Get In Touch</span>
                    <span>Contact Me</span>
                </div>
            </div>
            <div className='c-right'>
                {/* install emailjs by -- npm add @emailjs/browser to send the info to my gmail */}
                <form ref={form} onSubmit={sendEmail}>
                    {/* below name of the input must match with the names in the email template of emailjs(from_name, user_email and message) */}
                    <input type='text' name='from_name' className='user' placeholder='Name'></input>
                    <input type='email' name='user_email' className='user' placeholder='Email address'></input>
                    <textarea name='message' className='user' placeholder='message'></textarea>
                    <input type='submit' value='send message' className='button' />
                    <span>{done && "Thanks for contacting me"}</span>
                </form>

                {statusMessage && (
                    <span className={isError ? 'error-msg' : 'success-msg'}>
                        {statusMessage}
                    </span>
                )}
            </div>
        </div>
    )
}
