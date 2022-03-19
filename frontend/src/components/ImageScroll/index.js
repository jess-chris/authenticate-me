import { useSelector } from "react-redux";

function ImageScroll() {
  
  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  (function loop(){
    setTimeout(function() {
      const splashCont = document.querySelector('.splash-cont');
  
      try {
        splashCont.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length) - 1].imageUrl}')`;
      } catch {}

      if (!splashCont) return;

       loop();
   }, 5000);
  })();

  return(null);

};


export default ImageScroll;