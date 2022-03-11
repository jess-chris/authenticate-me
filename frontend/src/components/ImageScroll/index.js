function ImageScroll({ images }) {
  
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