import React from 'react';

const LearnHelpCenter = () => {
  return (
    <div className="bg-black text-white py-16 pt-10">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-200">Learn & Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <img src="https://procreate-assets-cdn.procreate.art/img/help-center_en.ad78992.jpg" alt="Careers" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Help Center</h3>
            <p className="text-gray-700 mb-4">Explore our detailed handbooks, read articles with handy tips, or contact our customer care team.</p>

          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <img src="https://procreate-assets-cdn.procreate.art/img/b-series.a9a2d98.jpg" alt="Careers" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-4">Procreate Beginners Series</h3>
            <p className="text-gray-700 mb-4">Create stunning digital art, all while learning about the powerful tools and rich features of Procreate.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <img src="https://procreate-assets-cdn.procreate.art/img/education.3fa4906.jpg" alt="Careers" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl font-bold mb-4">Lesson Ideas</h3>
            <p className="text-gray-700 mb-4">Explore our ever-growing collection of creative learning resources for the classroom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnHelpCenter;
