import React from 'react'
import './about.css';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

export default function About() {
    return (
        <>
            <Navbar />
            <div className='para-section'>
                <h1>About Me</h1>
                <p> Full-Stack Software Developer with 3 years of experience managing the complete development lifecycle
                    in fast-paced environments. Skilled in building scalable web applications and RESTful APIs, with a passion
                    for problem-solving, creating responsive designs, and enhancing user experiences. Looking to contribute
                    my skills to create reliable and user-friendly web solutions.
                </p>
                <br />
                <h1>My Journey:</h1>
                <p>I am  a full-stack developer with a diverse background in Computer Sceince, Physics and Mathematics education.
                    My journey from being a dedicated lecturer to embracing the world of web development has been a testament to my curiosity, adaptability, and love for problem-solving.
                    My journey in web development began with a curiosity for technology and a desire to create meaningful digital experiences.and I'm excited to merge my background in physics
                    education with my passion for crafting dynamic and innovative web experiences.
                    <br></br>
                    <br></br>
                    In my current role as a Software Developer at Voyager Systems Corp in Edmonton,
                    I serve as the sole developer, handling the complete software development lifecycle—from requirements
                    gathering and technical planning to coding, testing, deployment, and post-release support.
                    I have hands-on experience in designing and building full-stack applications using PHP for the back end,
                    HTML5, CSS, JavaScript, Bootstrap for the front end, MySQL for database management, Composer for
                    dependency management, and NGINX,Apache for server deployment, Git for version control and AWS for cloud computing.
                </p>
            </div>


            <div className='container'>
                <div className='row'>

                    <section className='col'>
                        <div className='title'>
                            <h2>EDUCATION</h2>
                        </div>
                        <div className='contents'>
                            <div className='box'>
                                <h4>2022 -2023</h4>
                                <h3>Web development Diploma</h3>
                                <p>Web Development Diploma - CDI college, Edmonton Canada</p>
                            </div>
                            <div className='box'>
                                <h4>2017 -2019</h4>
                                <h3>Master's degree</h3>
                                <p>Master's Degree in Science</p>
                            </div>
                            <div className='box'>
                                <h4>2015 -2017</h4>
                                <h3>Bachelor's degree</h3>
                                <p>Bachelor's degree in Computer Science, Physics and Mathematics</p>
                            </div>
                        </div>
                    </section>

                    <section className='col'>
                        <div className='title'>
                            <h2>EXPERIENCE</h2>
                        </div>
                        <div className='contents'>
                            <div className='box'>
                                <h4>2023 -present</h4>
                                <h3>Software Developer- Voyager Systems Corp ,Edmonton AB</h3>
                                <ul>
                                    <li>Led the full software development cycle as the sole developer - Designed, developed, tested, and
                                        maintained a full-stack PHP web application that streamlined daily operations for an IT
                                        management company including CRM, Ticketing, Invoice generation, Inventory management,
                                        Billing workflow and User management modules</li>

                                    <li>Built responsive, user-friendly front-end interfaces using PHP, HTML, CSS, jQuery, and Bootstrap 5,
                                        and managed MariaDB database design and optimization. Configured and deployed the
                                        application on FreeBSD/NGINX servers, ensuring speed, scalability, and security, while using
                                        Composer and Git for efficient dependency and version management.</li>

                                    <li>Developed a Service Level Agreement (SLA)–based ticket prioritization system, improving
                                        response accuracy and significantly reducing ticket handling time for the support team.</li>

                                    <li>
                                        Designed and implemented a Document Management module that centralized client-related and
                                        company-related documents in one accessible location, improving information retrieval and
                                        reducing manual search effort.
                                    </li>

                                    <li>
                                        Developed an email notification system module that improved communication and reduced
                                        manual follow-ups by automating alerts for SLA violations, user management updates, and key
                                        system events
                                    </li>

                                    <li>
                                        Collaborated with service teams to translate workflow and usability needs into scalable solutions,
                                        actively incorporating feedback to enhance UI/UX and backend performance. Tested and
                                        optimized the application for speed, cross-browser compatibility, and SEO efficiency.
                                        Authored technical documentation for deployment, structure, and features to support future
                                        maintenance.
                                    </li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h4>2022 -Present</h4>
                                <h3>Web developer-Freelance</h3>
                                <ul>
                                    <li>
                                        Developing MyEduNest, a comprehensive daycare management web application using PHP,
                                        JavaScript, Docker, and AWS (S3 for file and image uploads) to streamline day-to-day
                                        operations, including child onboarding, parent and staff profile management,
                                        class scheduling, attendance tracking, appointment booking,Two-factor authentication for secure login,
                                        QuickBooks API integration,and dynamic portal announcements.
                                    </li>
                                    <li>Used Docker and Composer to containerize and manage application dependencies, improving
                                        deployment consistency</li>
                                    <li>Strengthened skills in Laravel, server configuration, and modern web development practices
                                        through hands-on project work.</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h4>2019 -2021</h4>
                                <h3>Subject Matter Expert - Byju’s and Unacademy</h3>
                                <ul>
                                    <li>Authored and curated high-quality Physics problems and content for Byju’s &Unacademy online learning portal.
                                    Mentored fellow SMEs by providing reviews, feedback, and training, improving overall content quality.
                                    Collaborated regularly with company representatives to provide feedback on new website features, enhancing the SME experience.
                                    Ensured content alignment with curriculum standards and learning objectives for diverse student age groups.
                                    Contributed to content strategy discussions, helping improve the educational impact and usability of digital learning platforms.</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h4>2017 -2019</h4>
                                <h3>Lecturer- Alva's Education Foundation, Karnataka, India</h3>
                                <ul>
                                    <li>
                                        Delivered engaging lectures for Grades 11 and 12, helping students build strong foundation of the
                                        subject and problem-solving. Guided students through lab experiments and real-world
                                        applications, promoting analytical thinking and teamwork.
                                        Developed lesson plans, assignments, and assessments that improved student engagement and
                                        performance.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
            <br /> <br /> <br />
            <Footer />
        </>
    );
}
