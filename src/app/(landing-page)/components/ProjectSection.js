"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Twitter Clone",
      tags: ["React.js", "MongoDB", "Node.js"],
      description: "A Twitter clone with core social media functionality.",
      fullDescription:
        "A fully functional Twitter clone featuring user authentication, tweet posting, liking, retweeting, following, and more. Built with React.js, MongoDB, Node.js, and Express, implementing a responsive design with Tailwind CSS.",
      image: "/gif/twitter-clone.gif",
      techStack: ["React.js", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/Yuriowindiatmoko2401/twitter-is-mine",
      prdLink: "https://rich-oriole-08a.notion.site/Product-Requirements-Document-PRD-Twitter-Clone-1c447881a07a80939fafdb8889b4af8b",
      trdLink: "https://rich-oriole-08a.notion.site/Technical-Requirements-Document-TRD-Twitter-Clone-1c447881a07a80419f16d04953e468e5",
    },
    {
      id: 2,
      title: "LinkedIn Clone",
      tags: ["React", "Node.js", "MongoDB"],
      description: "A professional networking platform clone with modern UI.",
      fullDescription:
        "A LinkedIn clone implementing core professional networking features with a modern, responsive design. Features user authentication with JWT, profile management, connection requests, post creation, and more.",
      image: "/gif/linkedin-clone.gif",
      techStack: ["React", "Tailwind CSS", "DaisyUI", "React Router", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Mailtrap", "ESLint", "Prettier"],
      githubLink: "https://github.com/Yuriowindiatmoko2401/its-neo-linkedin",
      prdLink: "https://rich-oriole-08a.notion.site/Product-Requirements-Document-PRD-Linkedin-Clone-1c547881a07a8085918ec7b0ea4a1362",
      trdLink: "https://rich-oriole-08a.notion.site/Technical-Requirements-Document-TRD-Linkedin-Clone-1c547881a07a80988288c6fb28332e5d",
    },
    {
      id: 3,
      title: "E-Commerce MERN",
      tags: ["React.js", "Node.js", "MongoDB"],
      description: "A complete e-commerce solution with modern stack.",
      fullDescription:
        "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, payment processing, and order management. Uses React.js frontend with Tailwind CSS and Vite, backed by Node.js/Express with MongoDB and Redis for caching.",
      image: "/gif/my-ecommerce.gif",
      techStack: ["React.js", "Tailwind CSS", "Vite", "Axios", "Node.js", "Express.js", "MongoDB", "Mongoose", "Redis", "JWT Authentication", "Cloudinary", "Stripe"],
      githubLink: "https://github.com/Yuriowindiatmoko2401/my-ecommerce-mern",
      prdLink: "https://rich-oriole-08a.notion.site/Product-Requirements-Document-PRD-E-Commerce-Application-1c447881a07a801daa4de3418f93c915",
      trdLink: "https://rich-oriole-08a.notion.site/Technical-Requirements-Document-TRD-E-Commerce-Application-1c447881a07a809a946ef5d562c80c5b",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % projects.length;

    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if (currentIndex === -1) {
      return null;
    }

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    setSelectedProject(projects[prevIndex].id);
  };

  return (
    <section
      id="projects"
      className="px-4 py-32 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <button
            onClick={() => handleProjectClick(project.id)}
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default ProjectSection;
