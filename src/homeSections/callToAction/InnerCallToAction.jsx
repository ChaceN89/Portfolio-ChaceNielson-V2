import React from 'react';
import { callToActionData } from '../../data/callToActionData';
import MyButton from '../../components/uiElements/MyButton';
import ImageComponent from '../../wrappers/ImageComponent';

function InnerCallToAction() {
  return (
    <div className="border-2 border-secondary text-secondary bg-primary bg-opacity-65 rounded-xl w-full h-full
      grid grid-cols-1 md:grid-cols-3 px-4  max-w-sm sm:max-w-md md:max-w-3xl z-10
    ">
      <div className="col-span-1 flex items-center justify-center">
        <ImageComponent
          src={callToActionData.img}
          lowResSrc={callToActionData.lowResImg}
          alt="Call to Action Logo"
          className="object-contain w-40 h-56 md:w-56 md:h-72" // Adjust width and height as needed
        /> 
      </div>
      <div className="col-span-2 flex flex-col h-full justify-center items-start p-4">
        <h2>{callToActionData.top}</h2>
        <h4 className="mt-2">{callToActionData.bottom}</h4>
        <div className="mt-6 flex justify-start md:justify-start space-x-2 z-30">
          {callToActionData.buttons.map((button) => (
            <MyButton key={button.id} to={button.id}>
              {button.name}
            </MyButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnerCallToAction;
