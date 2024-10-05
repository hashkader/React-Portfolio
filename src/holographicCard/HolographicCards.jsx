import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './HolographicCards.css';

const HolographicCards = () => {
  const tiltElementsRef = useRef([]);

  useEffect(() => {
    tiltElementsRef.current.forEach((tiltElement) => {
      VanillaTilt.init(tiltElement, {
        scale: 1.1,
        gyroscope: true,
        speed: 800,
        perspective: 1000,
      });

      tiltElement.addEventListener("tiltChange", (event) => {
        const angle = parseInt(event.detail.tiltY, 10) + parseInt(event.detail.tiltX, 10);
        tiltElement.style.setProperty("--angle", `${angle}deg`);
      });
    });

    // return () => {
    //   tiltElementsRef.current.forEach((tiltElement) => {
    //     tiltElement.vanillaTilt.destroy();
    //   });
    // };
  }, []);

  return (
    <main>
      <div id="grid">
          <div 
            className="card" 
            ref={el => tiltElementsRef.current[0] = el}
          >
            <div className='image'>
              <img src="" alt="" />
            </div>
            <div className="card-content">
              <h2 style={{color:"#116885", fontSize:"32px"}}>Adbex</h2>
            </div>
          </div>
          <div 
            className="card" 
            ref={el => tiltElementsRef.current[1] = el}
          >
            <div className="card-background"></div>
            <div className="card-content">
              <h2 style={{color:"#116885", fontSize:"32px"}}>Woolies</h2>
            </div>
          </div>
          <div 
            className="card" 
            ref={el => tiltElementsRef.current[2] = el}
          >
            <div className="card-background"></div>
            <div className="card-content">
              <h2 style={{color:"#116885", fontSize:"32px"}}>Sanlam</h2>
            </div>
          </div>
          <div 
            className="card" 
            ref={el => tiltElementsRef.current[3] = el}
          >
            <div className="card-background"></div>
            <div className="card-content">
              <h2 style={{color:"#116885", fontSize:"32px"}}>Poes</h2>
            </div>
          </div>
        </div>
    </main>
  );
};

export default HolographicCards;
