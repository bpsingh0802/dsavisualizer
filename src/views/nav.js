import React from 'react';

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-neutral-900 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between">
        <span className="text-2xl font-bold text-blue-500">DSA Visualizer</span>
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection('visual')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('bubble-sort')}
            className="hover:text-blue-500 transition-colors duration-300 text-lg"
          >
            Bubble Sort
          </button>

          <button
            onClick={() => scrollToSection('algorithm-visualizer')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Algorithm Visualizer
          </button>
          <button
            onClick={() => scrollToSection('available-algorithms')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Available Algorithms
          </button>
          <button
            onClick={() => scrollToSection('data-structures')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Data Structures
          </button>
          <button
            onClick={() => scrollToSection('documentation')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Documentation
          </button>
          <button
            onClick={() => scrollToSection('community')}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Community
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;