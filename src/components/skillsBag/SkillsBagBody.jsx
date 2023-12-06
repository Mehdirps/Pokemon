import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSkill } from '../../stores/SkillsBagSlice';

const SkillsBagBody = (props) => {

    const skills = props.skills;
    const skillCategory = useSelector((state) => state.skillsBag.category)
    const dispatch = useDispatch();
    const skill = useSelector((state) => state.skillsBag.skill)
    const [defaultSkill, setDefaultSkill] = useState([]);

    const handleSkillDetails = (skill) => {
        dispatch(setSkill(skill));
        setDefaultSkill('');
    }

    useEffect(() => {
        if (!skill) {
            const skill = skills.filter(item => item.category === skillCategory)[0];
            setDefaultSkill(skill)
        }
    }, [skills, skill, skillCategory])

    return (
        <section className="skillsBag-body">
            <section className="skills-container">
                {
                    skills.map((item, id) =>
                        item.category === skillCategory ?
                            <div className="skill" id={item.name === skill.name ? 'skill-active' : '' || item.name === defaultSkill.name ? 'skill-active' : ''} key={id} onClick={() => handleSkillDetails(item)}>
                                <figure>
                                    <img src={item.icon} alt="" />
                                </figure>
                                <p>{item.name}</p>
                            </div>
                            : null
                    )
                }
            </section>
            <section className="skill-details">
                <h3>{skill ? skill.name : defaultSkill.name}</h3>
                <p>{skill ? skill.started_date : defaultSkill.started_date}</p>
                <p>{skill ? skill.category : defaultSkill.category}</p>
                <p>{skill ? skill.level : defaultSkill.level}</p>
            </section>
        </section >
    );
};

export default SkillsBagBody;