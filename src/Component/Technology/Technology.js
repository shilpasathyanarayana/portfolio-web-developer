import React from 'react'
import './technology.css';
import { SiAdobeacrobatreader } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiAdobecreativecloud } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { SiKnowledgebase } from 'react-icons/si';
import Card from '../Card/Card';
import { motion } from "framer-motion";
import { SiAmazonaws } from 'react-icons/si';

export default function Technology() {

    const transition = {
        duration: 1,
        type: "spring",
    };

    return (

        <div className='services'>

            {/* left side */}
            <div className='awesome'>
                <span>Technology and Skills</span>
                <span>I have learned so far</span>
                <span>I have built a strong foundation in full-stack development<br>
                </br>through hands-on experience designing end-to-end applications. <br></br>
                    I enjoy coding from scratch, solving complex problems,<br></br>
                    and combining different technologies to create reliable, efficient,<br></br>
                    and user-friendly solutions.</span>
                <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side */}
            <div className='cards'>
                {/* first card */}

                <motion.div
                    initial={{ left: "4rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <div style={{ left: '-8rem' }}></div>
                    <Card
                        icon={<FaCode size={80} style={{ color: 'darkblue' }} />}
                        heading={'Languages and Frameworks'}
                        detail={"PHP, JavaScript, HTML, CSS,Laravel, Bootstrap, jQuery,WordPress"}
                    />

                </motion.div>

                {/* ?first card ends */}

                {/* second card */}

                <motion.div
                    initial={{ left: "-11rem", top: "14rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <div style={{ top: '9rem', left: '-3rem' }}></div>
                    <Card
                        icon={<SiAdobeacrobatreader size={80} style={{ color: 'darkblue' }} />}
                        heading={'Design & Tool'}
                        detail={"Figma ,Adobe Illustrator, Adobe photoshop,VS Code, Wordpress"}
                    />
                </motion.div>

                {/* second card ends */}

                {/* third card */}

                <motion.div
                    initial={{ top: "16rem", left: "19rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <div style={{ top: '17rem', left: '14rem' }}></div>
                    <Card
                        icon={<SiVisualstudiocode size={70} style={{ color: 'darkblue' }} />}
                        heading={'Databases & Reporting'}
                        detail={"MySQL, MariaDB,performance optimization,Data modeling, ETL workflow design,reporting queries"}
                    />
                </motion.div>
                {/* third card ends */}

                <motion.div
                    initial={{ left: "-11rem", top: "29rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <div style={{ top: '4rem', left: '10rem' }}></div>
                    <Card
                        icon={<BiGitBranch size={70} style={{ color: 'darkblue' }} />}
                        heading={'Dependency Manager & Containers'}
                        detail={"Git- Proficiency in Using Git including Branching, merging and collaboration using GitHub,Docker,Composer"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "7rem", left: "36rem" }}
                    whileInView={{ left: "29rem" }}
                    transition={transition}
                >
                    <Card
                        icon={<SiAdobecreativecloud size={80} style={{ color: 'darkblue' }} />}
                        heading={'Cloud and Web Server'}
                        detail={"NGINX,FreeBSD,AWS[EC2, S3, RDS, IAM,Lambda,Route53]"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "30rem", left: "23rem" }}
                    whileInView={{ left: "15rem" }}
                    transition={transition}
                >
                    <Card
                        icon={<SiKnowledgebase size={80} style={{ color: 'darkblue' }} />}
                        heading={'Soft Skills'}
                        detail={"Requirements gathering, End-user support, Stakeholder communication"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "22rem", left: "38rem" }}
                    whileInView={{ left: "29rem" }}
                    transition={transition}
                >
                    <Card
                        icon={<SiAmazonaws size={80} style={{ color: 'darkblue' }} />}
                        heading={'AWS Cloud Practitioner Certification'}
                        detail={
                            <a
                                href="https://cp.certmetrics.com/amazon/en/public/verify/credential/7b81b510d46a4750b0f7bc2752484c54"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'var(--orange)', fontWeight: 'bold', textDecoration: 'none' }}
                            >
                                View Certificate ↗
                            </a>
                        }
                    />
                </motion.div>
            </div >
        </div >
    )
}
