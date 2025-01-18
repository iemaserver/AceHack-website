'use client';

import React  from 'react';
import './Speaker.css';



const Organizer = () => {
  const organizerData = [
    { name: 'Abdal Lalit', image: '/images/mentors3/abdal lalit.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Abhinav Rai', image: '/images/mentors3/abhinav rai.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Abhinav', image: '/images/mentors3/Abhinav.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Ayon Roy', image: '/images/mentors3/ayon roy.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Chhavi', image: '/images/mentors3/chhavi.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Chinmay', image: '/images/mentors3/chinmay.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Devendra', image: '/images/mentors3/devendra.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Gurkirat', image: '/images/mentors3/gurkirat.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Jaskaran', image: '/images/mentors3/jaskaran.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Manav', image: '/images/mentors3/manav.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Himani', image: '/images/mentors3/himani.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Pankaj', image: '/images/mentors3/pankaj.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Pranav', image: '/images/mentors3/pranav.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Maninder', image: '/images/mentors3/Maninder.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Raajessh', image: '/images/mentors3/raajessh.jpg', linkedin: 'https://linkedin.com' },
    { name: 'Rishabh', image: '/images/mentors3/rishabh.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Rishika', image: '/images/mentors3/Rishika.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Rohan', image: '/images/mentors3/rohan.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Shambhavi', image: '/images/mentors3/shambhavi.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Shivam', image: '/images/mentors3/shivam.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Srishti', image: '/images/mentors3/srishti.jpg', linkedin: 'https://linkedin.com' },
    { name: 'Aryan', image: '/images/mentors3/aryan.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Shyamal', image: '/images/mentors3/shyamal.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Sounak', image: '/images/mentors3/sounak.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Sunchit', image: '/images/mentors3/sunchit.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Abhimanyu', image: '/images/mentors3/abhimanyu.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Chanpreet', image: '/images/mentors3/chanpreet.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Piyush', image: '/images/mentors3/piyush.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Praveen', image: '/images/mentors3/praveen.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Pawan', image: '/images/mentors3/pawan.jpg', linkedin: 'https://linkedin.com' },
    { name: 'Nitesh', image: '/images/mentors3/nitesh.jpg', linkedin: 'https://linkedin.com' },
    { name: 'Anchal', image: '/images/mentors3/anchal.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Sri', image: '/images/mentors3/sri.jpeg', linkedin: 'https://linkedin.com' },
    { name: 'Hargovind', image: '/images/mentors3/hargovind.jpeg', linkedin: 'https://linkedin.com' }
];



function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

  // const [animationTime, setAnimationTime] = useState<number>(20);
  // const [isIncreasing, setIsIncreasing] = useState<boolean>(true);


  // useEffect(() => {
  //   // Function to smoothly increase and decrease the animation time
  //   const updateAnimationTime = () => {
  //     if (isIncreasing) {
  //       // Gradually increase the animation time
  //       setAnimationTime((prev) => {
  //         if (prev >= 40) {
  //           setIsIncreasing(false); // Switch to decreasing when we reach max limit
  //           return 40;
  //         }
  //         return prev + 1; // Increase by 0.5s each time
  //       });
  //     } else {
  //       // Gradually decrease the animation time
  //       setAnimationTime((prev) => {
  //         if (prev <= 20) {
  //           setIsIncreasing(true); // Switch to increasing when we reach min limit
  //           return 20;
  //         }
  //         return prev - 1; // Decrease by 0.5s each time
  //       });
  //     }
  //   };

  //   // Update animation time every 100ms (for smoother transitions)
  //   const interval = setInterval(updateAnimationTime, 1000);

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [isIncreasing]);


  return (
    <div className='background'>
      <br />
      <br />
      <br />
      <div className='flex flex-col items-center text-center'>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2 ">
      Previous Mentors & Judges
          </h1>

      </div>
      <br></br>
      <br></br>
      
      <div className="organizer-slider">
      
      <div className="slider-row">
        {shuffleArray(organizerData).map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="profile-picture">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="profile-name">{item.name}</div>
            <div className="social-icon">
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 509.64"
                >
                  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                  <path
                    fill="#fff"
                    d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}

        {/* Duplicate for seamless scrolling */}
        {shuffleArray(organizerData).map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="profile-picture">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="profile-name">{item.name}</div>
            <div className="social-icon">
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 509.64"
                >
                  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                  <path
                    fill="#fff"
                    d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

          
        {/* Second Slider (Moving Right) */}
      <div className="slider-container reverse"  >
        <div className="slider" >
        {shuffleArray(organizerData).reverse().map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="profile-picture">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="profile-name">{item.name}</div>
            <div className="social-icon">
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 509.64"
                >
                  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                  <path
                    fill="#fff"
                    d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
          {/* Duplicate for seamless scrolling */}
          {shuffleArray(organizerData).reverse().map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="profile-picture">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="profile-name">{item.name}</div>
            <div className="social-icon">
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 509.64"
                >
                  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                  <path
                    fill="#fff"
                    d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
        
      </div>
        
    </div>

    
  );
};

export default Organizer;