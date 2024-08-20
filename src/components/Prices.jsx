import React from 'react';

const Prices = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
      
          <Card
            title="Procreate"
            subtitle="Complete art studio."
            price="12.99"
            image="https://procreate-assets-cdn.procreate.art/img/procreate_en.440fc9e.jpg"
          />

       
          <Card
            title="Procreate Dreams"
            subtitle="Animate anywhere."
            price="19.99"
            image="https://procreate-assets-cdn.procreate.art/img/dreams_en.1515a6c.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, price, image }) => (
  <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden w-full md:w-96">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-xl mb-4">{subtitle}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="bg-gray-700 text-white px-4 py-2 rounded text-sm">LEARN MORE</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">BUY NOW</button>
        </div>
      </div>
        <span className="text-sm">USD {price} USD. Once.</span>
    </div>
    <div className="flex flex-wrap">
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-48 object-cover"
      />
    </div>
  </div>
);

export default Prices;