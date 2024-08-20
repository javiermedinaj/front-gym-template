import React from 'react';

const announcements = [
  "Senior iOS Engineer",
  "UX/UI Designer",
  "Software Engineer",
];

const Careers = () => {
  return (
    <div className="relative bg-[url('https://procreate-assets-cdn.procreate.art/img/careers.2df5064.jpg')] bg-cover bg-center bg-no-repeat text-white py-64">
      <div className="relative z-10 text-center py-16">
        <h2 className="text-4xl md:text-6xl font-bold">We’re looking for a</h2>
      </div>

    
      <div className="absolute inset-x-0 top-1/2 bg-black bg-opacity-50 overflow-hidden whitespace-nowrap pb-2">
        <div className="flex animate-marquee text-center">
          {announcements.map((announcement, index) => (
            <div key={index} className="mx-4 text-4xl md:text-6xl font-bold">
              {announcement}
            </div>
          ))}
          {announcements.map((announcement, index) => (
            <div key={index + announcements.length} className="mx-4 text-4xl md:text-6xl font-bold">
              {announcement}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center mt-20">
        <p className="text-xl md:text-3xl mb-4 ">We have work that challenges your intellect, develops your skills, and warms your heart.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Careers;