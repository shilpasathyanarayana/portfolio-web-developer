import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import {FiExternalLink} from 'react-icons/fi'
export default function Projects() {
    // const navigate = useNavigate();
    const [sectionToDisplay, setSectionToDisplay] = useState();

    console.log(sectionToDisplay);
    let classNameForFProjectLink = 'tab-links active';
    let classNameForCProjectLink = 'tab-links';
    let classNameForFProjectSection = 'projects active-projects';
    let classNameForCProjectSection = 'projects';
    if (sectionToDisplay === 'c-projects') {
        classNameForFProjectLink = 'tab-links';
        classNameForCProjectLink = 'tab-links active';
        classNameForFProjectSection = 'projects';
        classNameForCProjectSection = 'projects active-projects';
    }
    return (
        <>
            <Navbar />
            <br />
            <hr />
            <h2 className='section-heading'>PROJECTS</h2>
            <div className='tab-title'>
                <p className={classNameForFProjectLink} onClick={() => { setSectionToDisplay('f-projects') }}>Freelancing Works</p>
                <p className={classNameForCProjectLink} onClick={() => { setSectionToDisplay('c-projects') }}>College projects</p>
            </div>
            <section id='f-projects' className={classNameForFProjectSection}>
                <div className='p-container'>
                    <div className="">
                        <div className='all-items'>
                            <div className='item'>
                                <div className='left'>
                                    <div className='img'><img src="images/scope.PNG" style={{ height: '450px', width: '500px' }}></img>
                                    </div>
                                </div>
                                <div className='right'>
                                    <h2 className='project-title'>Scope Tuition Center</h2>
                                    <h3 className='sub-title'>Education center website</h3>
                                    <p className='project-desc'>Created this interactive and responsive website using React. This React-based tuition center website can offer a seamless and user-friendly experience for students, parents, and tutors while fostering a supportive learning environment.</p>
                                    <div className='p-button'>
                                        <a href="https://scopetuition.com/" className='primary-btn'>Visit Website <span><FiExternalLink /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className='item'>
                                <div className='left'>
                                    <div className='img'><img src="images/vishwa.PNG" style={{ height: '450px', width: '500px' }}></img>
                                    </div>
                                </div>
                                <div className='right'>
                                    <h2 className='project-title'>Vishwa Electricals</h2>
                                    <h3 className='sub-title'>Electrical shop website</h3>
                                    <p className='project-desc'>Created this interactive and responsive website using React.This is the simple user friendly website as per client request</p>
                                    <div className='p-button'>
                                        <a href="https://vishwaelectricals.store/" className='primary-btn'>Visit Website <span><FiExternalLink /></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id='c-projects' className={classNameForCProjectSection}>
                <div className='p-container'>
                    <div className={classNameForCProjectSection}>
                        <div className='all-items'>
                            <ProjectCard image="images/gliterify.PNG" title="Gliterify" subTitle="A Jwelery-Website" description="E-Commerce website for Jwelery shopping with add to cart feature made using HTML, CSS, venilla JavaScript,SQL, express and nodeJs, and API" link={"http://glitterify.s3-website.ca-central-1.amazonaws.com/"} sorcecode={"https://github.com/shilpasathyanarayana/Gliterify-Online-jwellery-store"} />

                            <ProjectCard image="images/banking.PNG" title="Yes-Bank" subTitle="Banking-Website" description="The banking website is a comprehensive full-stack web application developed using ReactJs, MySQL, API, Express and NodeJs." link={"http://yesbank-react.s3-website.ca-central-1.amazonaws.com"} sorcecode={"https://github.com/shilpasathyanarayana/yesbank-react-app"} />


                            <ProjectCard image="images/homzy.PNG" title="Home-Easy" subTitle="Real Estate website" description="Created design using Figma and developed React-app for Real estate - My first React App with simple react router feature and CSS(From Figma)" link={"https://home-easy-by-shilpa.netlify.app/"} sorcecode={"https://github.com/shilpasathyanarayana/Home-easy-website"} />

                            <ProjectCard image="images/weather.PNG" title="Weather" subTitle="Check city Weather" description="This is the weather App to check the current temp, wind speed and humidity of different cities all over the world.I created this website using HTML, CSS, JavaScript and to display the weather i used API from openweathermap.org webpage." link={"http://weather-app-by-shilpa.s3-website.ca-central-1.amazonaws.com/"} sorcecode={"https://github.com/shilpasathyanarayana/Weather-App"} />

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
