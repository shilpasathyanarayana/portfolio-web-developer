import React from 'react'
import './about.css';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

export default function About() {
    return (
        <>
            <Navbar />
            <div className='para-section'>
                {/* <h1>About Me</h1> */}
                {/* <p> Full-Stack Software Developer with 3 years of experience managing the complete development lifecycle
                    in fast-paced environments. Skilled in building scalable web applications and RESTful APIs, with a passion
                    for problem-solving, creating responsive designs, and enhancing user experiences. Looking to contribute
                    my skills to create reliable and user-friendly web solutions.
                </p>
                <br /> */}
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
                                    <li>Designed and Developed Internal IT tool that streamlined daily operations for an IT
                                        management company including CRM, Ticketing, Invoice generation, Inventory management,
                                        Billing Workflow, Email Notifications and User management modules.</li>

                                    <li>Built responsive frontend components using PHP, HTML, CSS, JavaScript [jQuery], Bootstrap 5,
                                        and developed Python-based REST APIs to handle backend logic and data exchange and
                                        MySQL database design and optimization.</li>

                                    <li>Configured and deployed the application on production servers ensuring speed, scalability, and
                                        security, using Composer and Git for efficient dependency and version management.</li>

                                    <li>
                                        Implemented an SLA based ticket prioritization system using Python API endpoint reducing
                                        average ticket handling time by approximately 30% which improved response accuracy for the
                                        support team.
                                    </li>

                                    <li>
                                        Automated email notification workflows for SLA violations and user management events and
                                        key system events reducing manual follow ups by 50% and improved internal communications
                                        efficiency.
                                    </li>

                                    <li>
                                        Collaborated with service teams to translate workflow and actively incorporated feedback to
                                        enhance UI/UX and performance. Tested and optimized the application for speed, crossbrowser compatibility, and SEO efficiency. Performed Unit test and authored technical
                                        documentation for deployment, structure, and features to support future maintenance.
                                    </li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h4>2022 -2023</h4>
                                <h3>Web developer-Freelance</h3>
                                <ul>
                                    <li>
                                        Completed multiple web development projects for clients in freelancing platforms, delivering
                                        solutions and aligning deliverables with defined project milestones.
                                    </li>
                                    <li>Optimized WordPress websites using caching and SEO techniques, improving page load speed
                                        by 40% and achieving Google Page Speed scores above 90.</li>
                                </ul>
                            </div>
                            {/* <div className='box'>
                                <h4>2019 -2021</h4>
                                <h3>Subject Matter Expert - Byju’s and Unacademy</h3>
                                <ul>
                                    <li>Authored and curated high-quality Physics problems and content for Byju’s &Unacademy online learning portal.
                                    Mentored fellow SMEs by providing reviews, feedback, and training, improving overall content quality.
                                    Collaborated regularly with company representatives to provide feedback on new website features, enhancing the SME experience.
                                    Ensured content alignment with curriculum standards and learning objectives for diverse student age groups.
                                    Contributed to content strategy discussions, helping improve the educational impact and usability of digital learning platforms.</li>
                                </ul>
                            </div> */}
                            <div className='box'>
                                <h4>2017 -2019</h4>
                                <h3>Lecturer- Alva's Education Foundation, Karnataka, India</h3>
                                <ul>
                                    <li>
                                        Delivered lectures to Grades 11 and 12, helping students build strong foundation of the subject
                                        and problem-solving. Guided students through lab experiments and real-world applications,
                                        promoting analytical thinking and teamwork.
                                    </li>
                                    <li>Developed lesson plans, assignments, and assessments that improved student engagement
                                        and performance.</li>
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
