import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../stores/SkillsBagSlice';

const SkillsBagHeader = (props) => {
    const category = useSelector((state) => state.skillsBag.category)
    const dispatch = useDispatch();

    const handleCategory = (e) => {
        dispatch(setCategory(e.target.attributes.category.value));
    }

    const categories = [
        {
            'name': 'front-end',
            'src': './img/icons/skills/frontend.png',
        },
        {
            'name': 'back-end',
            'src': './img/icons/skills/backend.png',
        },
        {
            'name': 'database',
            'src': './img/icons/skills/database.png',
        },
        {
            'name': 'design',
            'src': './img/icons/skills/design.png',
        },
        {
            'name': 'gestion',
            'src': './img/icons/skills/gestion.png',
        },

    ]

    return (
        <section className='bag-header'>
            <section className="top-header">
                <div className="title">
                    <img src="./img/icons/bag.png" alt="icon sac" />
                    <h2>Skills</h2>
                </div>
                <div className="skills-number">
                    <img src="./img/icons/skills/skill.png" alt="" />
                    <p>{props.SkillsNumber} Skills</p>
                </div>
            </section>
            <section className="category">
                <p>{category}</p>
                <div className="category-icons">
                    {
                        categories.map((item, id) =>
                            <img src={item.src} alt={`icon ` + item.name} category={item.name} onClick={(e) => handleCategory(e)} className={item.name === category ? 'active' : ''} key={id} />
                        )
                    }
                </div>
            </section>

        </section>
    );
};

export default SkillsBagHeader;