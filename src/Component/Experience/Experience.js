import React from 'react'
import './experience.css';
export default function Experience() {
    return (
        <>
            <section class="secondsection">
                <span class="text-gray">
                    What have i done so far!?
                </span>
                <h1>Work Experience</h1>

                <div class="box">
                    <div class="verticle">
                        <img class="img-top" src="./images/teacher.png" alt=""/>
                            <div class="verticle-text">
                                Physics Lecturer
                                <div class="date">(2017-2019)</div>
                            </div>
                            <div class="verticle-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita corporis quis
                                laboriosam asperiores nobis culpa, ratione quas earum inventore nisi quo minima. Lorem ipsum
                                dolor Lorem ipsum dolor sit.
                            </div>
                    </div>


                    <div class="verticle">
                        <img class="img-top" src="./images/sme.png" alt="" height="32px"/>
                            <div class="verticle-text">
                                Subject Matter Expert
                                <div class="date">(2020-2021)</div>
                            </div>
                            <div class="verticle-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita corporis quis
                                laboriosam asperiores nobis culpa, ratione quas earum inventore nisi quo minima.
                            </div>
                    </div>


                    <div class="verticle">
                        <img class="img-top" src="./images/teacher.png" alt=""/>
                            <div class="verticle-text">
                                Online <br/> Tutor
                                    <div class="date">(2021-2022)</div>
                            </div>
                            <div class="verticle-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita corporis quis
                                laboriosam asperiores nobis culpa, ratione quas earum inventore nisi quo minima. Lorem ipsum
                                dolor sit amet consectetur, adipisicing elit.
                            </div>
                    </div>


                    <div class="verticle">
                        <img class="img-top" src="./images/diploma.png" alt="" height="30px" width="30px"/>
                            <div class="verticle-text">
                                Web Development diploma
                                <div class="date">(2022-2023)</div>
                            </div>
                            <div class="verticle-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita corporis quis
                                laboriosam asperiores nobis culpa, ratione quas earum inventore nisi quo Lorem ipsum dolor sit
                                amet.
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
