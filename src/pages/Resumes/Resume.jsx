import React from 'react';

import { FaBookReader } from "react-icons/fa";
import Timeline from './Timeline';
import SkillItem from './SkillItem';

const Resume = () => {
    return (
        
        <section>
            <header>
                <h2  className='h2 articles-title'>
                    Resume
                </h2>

            </header>
            
            <div className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <FaBookReader/>
                    </div>
                    <h3 className='h3'>Education</h3>
                </div>

                <ol className='timeline-list'>
                    <Timeline
                        title="Green University of Bangladesh"
                        date="2020 - 2024"
                        description="Bechlor of Science in Computer Science and Engineering"
                    />
                    <Timeline
                        title="Eco College Thakurgaon"
                        date="2017 - 2019"
                        description="Higher Secondery School Certificate, (HSC)"
                    />
                    <Timeline
                        title="Atwari Pilot High School"
                        date="2017"
                        description="Secondery School Certificate, (SSC)"
                    />
                </ol>
            </div>



            <div className='skill'>
                <h3 className='h3 skills-title'>My Skills</h3>
                <ul className='skills-list content-card'>
                    <SkillItem title="UI/UX Design" value={80}
                    />
                    <SkillItem title="Web Design" value={95}
                    />
                    <SkillItem title="Javascript" value={85}
                    />
                    <SkillItem title="React" value={70}
                    />
                    <SkillItem title="Typescript" value={80}
                    />
                    <SkillItem title="Database" value={95}
                    />
                   

                </ul>

            </div>
        </section>
    );
};

export default Resume;