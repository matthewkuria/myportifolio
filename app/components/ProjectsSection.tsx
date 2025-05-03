"use client";
import { useState } from 'react';
import projects from '../../public/projects-data.json'; // Import your projects data
export default function ProjectsSection() {
  const [filter, setFilter] = useState('All'); // Default filter
   const [visibleCount, setVisibleCount] = useState(3); // Number of projects to show initially

  // Filter projects based on selected type
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.type === filter);

    // Slice projects to show only up to visibleCount
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Available filter options
  const filterOptions = ['All', 'Frontend','Landing Page','Full Stack',];
  // Handle Load More button click
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // Load next 6 projects
  };
  return (
    <section className="projects-section w-full flex flex-col  py-10">
      <h2>Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {filterOptions.map(option => (
          <button
            key={option}
            className={`filter-btn ${filter === option ? 'active' : ''}`}
            onClick={() => {
              setFilter(option)
              setVisibleCount(3); // Reset visible count when filter changes
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {visibleProjects.length > 0 ? (
          visibleProjects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found for this category.</p>
        )}
      </div>
         {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="load-more">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
      {/* CSS Styles */}
      <style jsx>{`
        

        h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

       

        .filter-btn:hover {
          background: #555;
        }

        .filter-btn.active {
          background: #0070f3;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: #222;
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
          transition: transform 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
          margin-bottom: 1rem;
        }

        .project-links {
          display: flex;
          justify-content: space-around;
          margin-top: 1rem;
        }

        .project-links a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 500;
        }

        .project-links a:hover {
          text-decoration: underline;
        }
        .load-more {
          text-align: center;
          margin-top: 2rem;
        }

        .load-more-btn {
          padding: 0.75rem 2rem;
          border: none;
          background: #0070f3;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s;
        }

        .load-more-btn:hover {
          background: #005bb5;
        }

        @media (max-width: 768px) {
          .filter-buttons {
            flex-wrap: wrap;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}