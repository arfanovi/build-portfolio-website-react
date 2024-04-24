import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filterProjects, setFilterProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() =>{
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setFilterProjects(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[]);

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilterProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            setFilterProjects(filtered);
        }
    };

    return (
        <section>
            <header>
                <h2 className='h2 articles-title'>Portfolio</h2>
            </header>
            <ul className='filter-list'>
                {['All', 'Web Design', 'Application', 'Web Development', 'UI/UX'].map(category => (
                    <li key={category} className='filter-item'>
                        <button onClick={() => handleFilterClick(category)} 
                                className={category === selectedCategory ? 'active' : ''}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
            <section className='projects'>
                <ul className='project-list'>
                    {filterProjects.map(project => (
                        <li key={project.id} className='project-item active'
                            data-filter-item
                            data-category={project.category}>
                            <a href="#">
                                <figure className='project-img'>
                                    <div className='project-item-icon-box '>
                                        <FaRegEye />
                                    </div>
                                    <img src={project.image} alt="" loading='lazy' />
                                </figure>
                            </a>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-category'>{project.category}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Portfolio;
