import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SkillsBagHeader from './skillsBag/SkillsBagHeader';
import SkillsBagBody from './skillsBag/SkillsBagBody';
import { setSkillsBag, setSkill } from '../stores/SkillsBagSlice';

const SkillsBag = () => {
    const open = useSelector((state) => state.skillsBag.open)
    const category = useSelector((state) => state.skillsBag.category)
    const skill = useSelector((state) => state.skillsBag.skill)
    const dispatch = useDispatch();
    const skillsList = [
        {
            'name': 'HTML',
            'icon': './img/icons/skills/front/html.png',
            'started_date': '06/2021',
            'category': 'front-end',
            'level': 'Très bon niveau'
        },
        {
            'name': 'CSS',
            'icon': './img/icons/skills/front/css.png',
            'started_date': '06/2021',
            'category': 'front-end',
            'level': 'Très bon niveau'
        },
        {
            'name': 'Sass',
            'icon': './img/icons/skills/front/sass.png',
            'started_date': '08/2021',
            'category': 'front-end',
            'level': 'Très bon niveau'
        },
        {
            'name': 'JavaScript',
            'icon': './img/icons/skills/front/javascript.png',
            'started_date': '07/2021',
            'category': 'front-end',
            'level': 'Bon niveau'
        },
        {
            'name': 'React.js',
            'icon': './img/icons/skills/front/react.png',
            'started_date': '11/2022',
            'category': 'front-end',
            'level': 'Bon niveau'
        },
        {
            'name': 'Redux',
            'icon': './img/icons/skills/front/redux.png',
            'started_date': '01/2023',
            'category': 'front-end',
            'level': 'Niveau moyen'
        },
        {
            'name': 'Vue.js',
            'icon': './img/icons/skills/front/vue.png',
            'started_date': '07/2022',
            'category': 'front-end',
            'level': 'Niveau moyen'
        },
        {
            'name': 'WordPress',
            'icon': './img/icons/skills/front/wordpress.png',
            'started_date': '08/2021',
            'category': 'front-end',
            'level': 'Bon niveau'
        },
        {
            'name': 'Node.js',
            'icon': './img/icons/skills/back/node.png',
            'started_date': '11/2022',
            'category': 'back-end',
            'level': 'Niveau moyen'
        },
        {
            'name': 'Express',
            'icon': './img/icons/skills/back/express.png',
            'started_date': '11/2022',
            'category': 'back-end',
            'level': 'Niveau moyen'
        },
        {
            'name': 'MongoDB',
            'icon': './img/icons/skills/back/mongodb.png',
            'started_date': '11/2022',
            'category': 'database',
            'level': 'Niveau moyen'
        },
        {
            'name': 'PHP',
            'icon': './img/icons/skills/back/php.png',
            'started_date': '09/2021',
            'category': 'back-end',
            'level': 'Bon niveau'
        },
        {
            'name': 'Symfony',
            'icon': './img/icons/skills/back/symfony.png',
            'started_date': '03/2022',
            'category': 'back-end',
            'level': 'Niveau moyen'
        },
        {
            'name': 'Laravel',
            'icon': './img/icons/skills/back/laravel.png',
            'started_date': '07/2023',
            'category': 'back-end',
            'level': 'Bon niveau'
        },
        {
            'name': 'MySql',
            'icon': './img/icons/skills/back/mysql.png',
            'started_date': '09/2021',
            'category': 'database',
            'level': 'Bon niveau'
        },
        {
            'name': 'Vs Code',
            'icon': './img/icons/skills/tools/vscode.png',
            'started_date': '06/2021',
            'category': 'gestion',
            'level': 'Bon niveau'
        },
        {
            'name': 'Figma',
            'icon': './img/icons/skills/tools/figma.png',
            'started_date': '07/2021',
            'category': 'design',
            'level': 'Bon niveau'
        },
        {
            'name': 'FileZilla',
            'icon': './img/icons/skills/tools/filezilla.png',
            'started_date': '10/2021',
            'category': 'gestion',
            'level': 'Bon niveau'
        },
        {
            'name': 'Gimp',
            'icon': './img/icons/skills/tools/gimp.png',
            'started_date': '10/2021',
            'category': 'design',
            'level': 'Niveau faible'
        },
        {
            'name': 'Inkscape',
            'icon': './img/icons/skills/tools/inkscape.png',
            'started_date': '10/2021',
            'category': 'design',
            'level': 'Niveau moyen'
        },
        {
            'name': 'Illustrator',
            'icon': './img/icons/skills/tools/illustrator.png',
            'started_date': '01/2022',
            'category': 'design',
            'level': 'Niveau moyen'
        },
        {
            'name': 'PhotoShop',
            'icon': './img/icons/skills/tools/photoshop.png',
            'started_date': '01/2022',
            'category': 'design',
            'level': 'Niveau faible'
        },
        {
            'name': 'Postman',
            'icon': './img/icons/skills/tools/postman.png',
            'started_date': '11/2022',
            'category': 'gestion',
            'level': 'Bon niveau'
        },
        {
            'name': 'MongoDbCompass',
            'icon': './img/icons/skills/back/mongodb.png',
            'started_date': '11/2022',
            'category': 'gestion',
            'level': 'Niveau moyen'
        },
        {
            'name': 'Git',
            'icon': './img/icons/skills/tools/git.png',
            'started_date': '07/2021',
            'category': 'gestion',
            'level': 'Bon niveau'
        },
        {
            'name': 'GitHub',
            'icon': './img/icons/skills/tools/github.png',
            'started_date': '07/2021',
            'category': 'gestion',
            'level': 'Bon niveau'
        },
        {
            'name': 'GitLab',
            'icon': './img/icons/skills/tools/gitlab.png',
            'started_date': '07/2022',
            'category': 'gestion',
            'level': 'Bon niveau'
        },
    ]

    useEffect(() => {
        if(category !== skill.category){
            dispatch(setSkill(''))
        }
    })
    return (
        <>
            {
                open ?
                    <section className='skills-bag'>
                        <SkillsBagHeader SkillsNumber={skillsList.length} />
                        <SkillsBagBody skills={skillsList} />
                        <div className="close-button" onClick={() => dispatch(setSkillsBag(false))}>
                            <img src="./img/icons/close-button-white.png" alt="bouton fermer" />
                            <p>Fermer</p>
                        </div>
                    </section>
                    : ''
            }
        </>
    );
};

export default SkillsBag;