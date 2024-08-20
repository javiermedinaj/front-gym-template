import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
   
      <nav className="absolute top-0 left-0 right-0 z-20 bg-transparent p-4">
        <div className="flex justify-between items-center">
          {/* <div className="text-white font-bold text-2xl">Logo</div> */}
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

  
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video autoPlay muted loop src="https://res.cloudinary.com/dubr40tiq/video/upload/v1724037055/training.mp4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Art is for everyone.</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Amplify your creativity with our powerful and intuitive apps, made for
            creative professionals and aspiring artists.
          </p>
        </div>
      </div>


    </div>
  );
};

export default Hero;
