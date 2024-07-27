
const short = "Functional mini dril rig and GUI.";
const long = (
  <div className='space-y-2'>
    <p>
      This project involved building a functional mini drill rig with the Drillbotics team at the University of Calgary. While I contributed to all aspects of the project, my primary responsibility was creating a graphical user interface (GUI) that could plot the drilling operation in real-time and provide interactive features.
    </p>
    <p>
      The GUI was developed using Plotly Dash and Python, offering a comprehensive and user-friendly interface to monitor and analyze the drilling process. The project showcases the integration of engineering principles with real-time data visualization, enhancing the efficiency and effectiveness of drilling operations.
    </p>
  </div>
);

export const drillbotics = {
  starred: true,
  id: "drillbotics",
  name: "Drillbotics",
  tag: "Machine Learning",
  blurb: short,
  description: long,
  images: [
    { src: "drillbotics0.jpg", blurhash: "L2Ps@p00~nS^00OT_2D*008^R;Di" },
    { src: "drillbotics1.jpg", blurhash: "LAH-rkQ,yG-ncrO@%M0L=}00-iIB" },
    { src: "drillbotics2.jpg", blurhash: "L3HL6nIp?J9b~W^%010000aL?Fsk" },
    { src: "drillbotics3.jpg", blurhash: "L8FYcCR2%OR-#zk[D%D%x{it~W%M" },
    { src: "drillbotics4.jpg", blurhash: "LCGIJw-;oLRk~WR+IoayIr-oRj%1" },
    { src: "drillbotics5.jpg", blurhash: "L7GudjTH=v~D%$Io9a-:01%LR+D*" },
    { src: "drillbotics6.jpg", blurhash: "LAF=jk~p-p?a_3o#tQRjR5RkIoRi" },
  ],
  mainStack: [
    {name:"Plotly Dash", svg_path:"plotly-dash.svg"},
    {name:"Python", svg_path:"python.svg"},
  ],
  extendedStack: [
    {name:"Engineering", svg_path:"engineering.svg"} ,
    {name:"Circuity Design", svg_path:"circuit-board.svg"} ,
  ],
  externalLinks: [
    
  ],
};
