import React from "react";
import mywork_data from "../../assets/mywork_data.js";

const MyWork = () => {
  return (
    <div
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-black text-white"
      id="mywork"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          My Work
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-purple-500/40 transition-all duration-300 group flex flex-col h-[500]"
          >
            <img
              src={work.w_img}
              alt={`Project ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col justify-between h-full p-5 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-teal-300 mb-2">
                  {work.title}
                </h2>
                <p className="text-xs text-gray-400 uppercase mb-1 tracking-wide">
                  Description
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {work.description}
                </p>
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 text-white font-medium text-sm hover:scale-105 transition"
                >
                  GitHub
                </a>
                <a
                  href={work.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-medium text-sm hover:bg-purple-500 hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
