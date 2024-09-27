import  { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import p1 from "../../assets/p1.png"
import p2 from "../../assets/2.png"
import p3 from "../../assets/3.png"
import p4 from "../../assets/4.png"
import p5 from "../../assets/5.png"
import p6 from "../../assets/6.png"
import p7 from "../../assets/7.png"
import p9 from "../../assets/9.png"
const Portfolio = () => {
  const projectsData =     [
    {
        "id": 1,
        "title": "Proshop",
        "category": "Web development",
        "image":p1,
        "link":"https://proshop-gpt7.onrender.com/"
    },
    {
        "id": 2,
        "title": "DevConnector",
        "category": "Web development",
        "image": p2,
        "link":"https://social-media-tgss.onrender.com/"
    },
    {
        "id": 3,
        "title": "ZEESH",
        "category": "Web design",
        "image": p3,
        "link":"https://restaurant-client-topaz.vercel.app/"
    },
    {
        "id": 4,
        "title": "Egypt-Population",
        "category": "Web development",
        "image": p4,
        "link":"https://egypt-xe1t.onrender.com/dashboard"
    },
    {
        "id": 5,
        "title": "Video-Call",
        "category": "Web design",
        "image": p5,
        "link":"https://video-call-opal-six.vercel.app/"
    },
    {
        "id": 6,
        "title": "ShareFun",
        "category": "Web design",
        "image": p6,
        "link":"https://social-media-app-amber-ten.vercel.app/"
    },
    {
        "id": 7,
        "title": "JobFinder",
        "category": "Web design",
        "image": p7,
        "link":"https://jobfinder-5zac.vercel.app/find-jobs"
    },
    {
        "id": 8,
        "title": "Travel World",
        "category": "Web design",
        "image":p9,
        "link":"https://travel-booking.onrender.com/"
    }
]
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load project data from projects.json
  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {['All', 'Web design',  'Web development'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <a href={project.link} target="_blank">
          <div className="info-content">
          <FaRegEye />

          </div>
            </a>
                    
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
