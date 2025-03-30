import Image from "next/image";
import { X, ChevronRight, ChevronLeft, FileText, Code, GitHub } from "lucide-react";
import { useRef } from "react";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-lg max-w-6xl w-11/12 max-h-[90vh] overflow-y-auto p-12 h-10/12 border border-gray-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold text-primary-50">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-primary-50 hover:text-primary-400 rounded-full
            p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="space-y-6 md:w-1/2">
            <p className="text-gray-300 text-lg">{project.description}</p>
            <p className="text-gray-300">{project.fullDescription}</p>
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-primary-400 text-lg">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-primary-400 text-lg">Project Links:</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.prdLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
                >
                  <span>PRD Document</span>
                </a>
                <a 
                  href={project.trdLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
                >
                  <span>TRD Document</span>
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full md:w-1/2 rounded-lg overflow-hidden border border-gray-700/50">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="contain"
              className="p-0"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={onPrev}
              className="bg-gray-800/70 rounded-full p-3 hover:bg-gray-800 transition-colors -translate-x-2 shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="bg-gray-800/70 rounded-full p-3 hover:bg-gray-800 transition-colors translate-x-2 shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
