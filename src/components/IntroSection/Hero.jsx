import React from 'react';
import '../../styles/Hero.css'; // Import the CSS file for any additional styles

function Hero() {


  return(
    <section className="section-wrapper-height ">



    </section>
  )


  return (
    <section className=" overflow-hidden bg-gradient-to-b  relative">
      <div className="wrapper max-w-[1366px] h-full mx-auto flex flex-col md:flex-row">
        <div className="textContainer w-full md:w-1/2 h-full flex flex-col justify-center gap-10 md:gap-16 p-4 text-center md:text-left">
          <h2 className="text-2xl text-rebeccapurple tracking-widest">Welcome</h2>
          <h1 className="text-4xl md:text-[88px]">I'm a Developer</h1>
          <div className="buttons flex justify-center md:justify-start">
            <button className="p-5 border border-white rounded-lg bg-transparent text-white mr-5 cursor-pointer font-light">Button 1</button>
            <button className="p-5 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light">Button 2</button>
          </div>
        </div>
        <div className="imageContainer absolute top-0 right-0 md:static md:w-1/2 h-full md:h-auto flex-shrink-0">
          <img src="path/to/your/image.jpg" alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="slidingTextContainer absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold">
        Sliding Text
      </div>
    </section>
  );
}

export default Hero;
