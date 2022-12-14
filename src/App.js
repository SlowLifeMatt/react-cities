// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  console.log(bigImage);
  const handleClick = (image) => {
    setBigImage(image);
    image.selected
  };

  const images = imagesArr.map((image, index) => {
    //I added a ternary to className and added .border if the image was bigImage
    //You could also add a style= property and do that there as well
    return (
      <img
        className={image.img === bigImage ? 'thumb border' : 'thumb'}
        src={image.img}
        key={index}
        alt={image.city}
        onClick={() => handleClick(image.img)}

     
      />
    );
  });
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <div>
          <img src={bigImage} id="bigimage" alt="bigImage" />
          {/* <img src="" id="bigimage" alt='bigImage'/> */}
        </div>
      </div>
    </div>
  );
}
