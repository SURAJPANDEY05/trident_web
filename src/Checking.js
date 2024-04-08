import React, {useState} from 'react'


function Checking() {
    // Initial state set to the first image URL
    const [image, setImage] = useState('./img/bed.jpg');
  
    // Function to switch the image
    const switchImage = () => {
      setImage(image === './img/bed.jpg' ? './img/Paper.jpg' : './img/bed.jpg');
    };
  
    return (
      <div>
        <img src={image} alt="Switchable" />
        <button onClick={switchImage}>Switch Image</button>
      </div>
    );
  }
  
  export default Checking;