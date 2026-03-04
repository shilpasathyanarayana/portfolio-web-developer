import React from 'react'
import { FiExternalLink } from 'react-icons/fi';
import '../Projects/Projects.css';
export default function ProjectCard(props) {

    return (
        <div className='item'>
            <div className='left'>
                <div className='img'><img src={props.image} style={{ height: '450px', width: '500px' }}></img></div>
            </div>
            <div className='right'>
                <h2 className='project-title'>{props.title}</h2>
                <h3 className='sub-title'>{props.subTitle}</h3>
                <p className='project-desc'>{props.description}</p>
                <div className='p-button'>
                    <a href={props.link} className='primary-btn'>Visit Website <span><FiExternalLink /></span></a>
                    <a href={props.sorcecode} className='primary-btn' style={{marginLeft:'45px'}}>Source Code<span><FiExternalLink /></span></a>
                </div>
            </div>
        </div>
    )
}
