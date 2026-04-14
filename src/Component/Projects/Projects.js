import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

export default function Projects() {
    return (
        <>
            <Navbar />
            <br />
            <hr />
            <h2 className='section-heading'>PROJECTS</h2>

            <section id='c-projects' className='projects active-projects'>
                <div className='p-container'>
                    <div className='all-items'>
                        <ProjectCard
                            image="images/edubuddys.jpeg"
                            title="Daycare Management System"
                            subTitle="Web-based Daycare Administration Platform"
                            description={`A comprehensive web application built to streamline daycare operations with role-based access control for parents, teachers, and administrators.
                            To Login as test user -
                            Username: test@edubuddys.com, password: edubuddys`}
                            techStack={['PHP', 'jQuery', 'Mariadb', 'Bootstrap', 'Docker', 'AWS', 'Google Authenticator API']}
                            link="https://dev.edubuddys.com/"
                            // sorcecode="https://github.com/shilpasathyanarayana/MyEduNest"
                        />
                        <ProjectCard
                            image="images/resume.png"
                            title="AI Resume Optimizer"
                            subTitle="AI-Powered Resume Analysis Web Application"
                            description="A web application that analyzes and optimizes resumes using AI to improve job application success. The system evaluates resume content, provides personalized improvement suggestions, and aligns resumes with job descriptions using Google AI APIs."
                            techStack={['HTML', 'Python', 'FastAPI', 'Docker', 'Google AI API']}
                            link="https://resume-optimiser-ai.netlify.app/"
                            // sorcecode="https://github.com/shilpasathyanarayana/resume-optimizer-ai"
                        />
                        <ProjectCard
                            image="images/scope.PNG"
                            title="Security-Shield"
                            subTitle="Security Shield - Chrome Extension"
                            description="A browser extension that scans every email in Gmail using four intelligent detectors and verifies threats live against Google's Safe Browsing database."
                            techStack={['HTML', 'JavaScript', 'Google Cloud API']}
                            link="https://security-shield-extension.netlify.app/"
                            sorcecode="https://github.com/shilpasathyanarayana/browser-security-extension"
                        />
                        <ProjectCard
                            image="images/weather.PNG"
                            title="Weather"
                            subTitle="Check city Weather"
                            description="Weather app to check current temp, wind speed and humidity of cities worldwide using OpenWeatherMap API."
                            techStack={['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API']}
                            link="http://weather-app-by-shilpa.s3-website.ca-central-1.amazonaws.com/"
                            sorcecode="https://github.com/shilpasathyanarayana/Weather-App"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}