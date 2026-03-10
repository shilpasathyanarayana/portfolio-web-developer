import React from 'react'
import { FiExternalLink } from 'react-icons/fi';
import '../Projects/Projects.css';

export default function ProjectCard(props) {
    return (
        <div className='item'>
            <div className='left'>
                <div className='img'>
                    <img src={props.image} alt='Project Card Image' style={{ height: '450px', width: '500px' }} />
                </div>
            </div>
            <div className='right'>
                <h2 className='project-title'>{props.title}</h2>
                <h3 className='sub-title'>{props.subTitle}</h3>
                <p className='project-desc' style={{ whiteSpace: "pre-line" }}>{props.description}</p>

                {/* Tech Stack */}
                {props.techStack && (
                    <div className='tech-stack'>
                        {props.techStack.map((tech, index) => (
                            <span key={index} className='tech-badge'>{tech}</span>
                        ))}
                    </div>
                )}

                <div className='p-button'>
                    <a href={props.link} className='primary-btn' target='_blank' rel="noopener noreferrer">Visit Website <span><FiExternalLink /></span></a>
                    <a href={props.sorcecode} className='primary-btn' style={{ marginLeft: '45px' }} target='_blank' rel="noopener noreferrer">Source Code <span><FiExternalLink /></span></a>
                </div>
            </div>
        </div>
    )
}