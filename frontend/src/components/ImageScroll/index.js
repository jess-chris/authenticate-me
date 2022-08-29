import { useEffect } from "react";
import { useSelector } from "react-redux";

function ImageScroll() {
  
  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  useEffect(() => {
    loop();
  });

  
  function loop() {
    let count = 0;
    const splashCont = document.querySelector('.splash-cont');
    const nextSplash = document.querySelector('.next-splash');
    setInterval(function() {
  
      if (count === 0) {
          splashCont.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length)].base64}')`;
          splashCont.style.opacity = 1;
          nextSplash.style.opacity = 0;
          count++;
      } else {
          nextSplash.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length)].base64}')`;
          nextSplash.style.opacity = 1;
          splashCont.style.opacity = 0;
          count--;
      }
   }, 7000);
  };

  return(<></>)
};


export default ImageScroll;