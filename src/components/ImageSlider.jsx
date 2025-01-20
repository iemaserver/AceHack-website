import React from 'react';

const images = [
  "/images/acehack/pic8.jpg",
  "/images/acehack/pic7.jpg",
  "/images/acehack/pic5.jpg",
  "/images/acehack/pic1.jpg",
  "/images/acehack/pic2.jpg",
  "/images/acehack/pic3.jpg",
  "/images/acehack/pic10.jpg",
  "/images/acehack/pic4.jpg",
  "/images/acehack/pic4.jpg",
];

const ImageSlider = () => {
  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      {/* Image List Container */}
      <div className="flex animate-slide-infinite">
        {/* Duplicate the images for seamless scroll */}
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
