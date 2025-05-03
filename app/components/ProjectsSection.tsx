"use client";
import { useState } from 'react';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import projects from '../../public/projects-data.json'; // Import your projects data

import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';



export default function ProjectsSection() {
  const [filter, setFilter] = useState('All'); // Default filter
   const [visibleCount, setVisibleCount] = useState(6); // Number of projects to show initially

  // Filter projects based on selected type
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.type === filter);

    // Slice projects to show only up to visibleCount
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Available filter options
  const filterOptions = ['All', 'Frontend', 'Landing Page', 'Full Stack',];
  
  // Handle Load More button click
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // Load next 3 projects
  };
  return (
    <section className="projects-section w-full flex flex-col  py-10" id='projects'>
      {/* Section Title */}
      <h2 className='text-3xl font-bold text-center my-4 '>Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {filterOptions.map(option => (
          <button
            key={option}
            className={`filter-btn bg-none outline-1 outline-slate-300 rounded-md px-2 py-1 text-slate-500 hover:bg-slate-400 hover:text-white ${filter === option ? 'active' : ''}`}
            onClick={() => {
              setFilter(option)
              setVisibleCount(6); // Reset visible count when filter changes
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
            <div key={project.id} className="project-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Project Image */}
              <div className="flex justify-center items-center mb-4 bg-slate-500 min-h-[40vh]">
                <Image src={project.image}
                  width={300}
                  height={200}
                  alt={project.title}
                  className="w-full h-auto"
                  priority={true} // Load image with priority
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                />
                
              </div>
              <h3 className='font-semibold text-secondary text-xl'>{project.title}</h3>
              <p className='text-slate-600'>{project.description}</p>
              <div className="text-slate-600 mt-2">
                <p className='text-slate-500 text-sm'>Type: {project.type}</p>
                <p className='text-slate-500 text-sm'>Tech Stack: {project.technologies.join(', ')}</p>
                <p className='text-slate-500 text-sm'>Year: N/A</p>
              </div>
              <div className="project-links">
                <div className="grid grid-cols-2 gap-5">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="text-slate-600 hover:text-slate-800" fontSize="large" />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon className="text-slate-600 hover:text-red-600" fontSize="large" />
                </Link>
                </div>
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-800 text-xs"
                  >
                  Live Demo
                 <LaunchIcon className="text-slate-600 hover:text-slate-800" fontSize="large" />
                </Link>
              </div>
            </div>
          ))
        ) : (
            <div className="no-projects-found text-center py-10 px-3">
            <Image 
              src="/mkLogo.png" 
              alt="No projects found" 
              width={150} 
              height={150} 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-slate-600">No projects found</h3>
            <p className="text-slate-500">Try selecting a different category or check back later for updates!</p>
            </div>
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
         .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
       

        .filter-btn.active {
          background: #0070f3;
          color: #fff;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        

        .project-card:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }

        .project-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
          margin-bottom: 1rem;
        }

        .project-links {
          display: flex;
          justify-content: space-between;
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