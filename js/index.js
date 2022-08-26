const Palomita1 = document.querySelector("#Palomita1SVG"); 
const Palomita2 = document.querySelector("#Palomita2SVG"); 
const Palomita3 = document.querySelector("#Palomita3SVG"); 
const Palomita4 = document.querySelector("#Palomita4SVG"); 

const Palomita5 = document.querySelector("#Palomita5SVG"); 
const Palomita6 = document.querySelector("#Palomita6SVG"); 
const Palomita7 = document.querySelector("#Palomita7SVG"); 
const Palomita8 = document.querySelector("#Palomita8SVG"); 



const FinalFunctionEjecution = () => {
    framesParticle(Palomita1, 30, 75, 9, 10, 45); 
    framesParticle(Palomita2, 25, 75, 9, 11.625, 45); 
    framesParticle(Palomita3, 20, 75, 9, 13.25, 45); //
    framesParticle(Palomita4, 25, 75, 9, 14.875, 45); 
    framesParticle(Palomita5, 30, 75, 9, 16.5, 45); 
    framesParticle(Palomita6, 25, 75, 9, 18.125, 45); 
    framesParticle(Palomita7, 33, 75, 9, 19.75, 45); 
    framesParticle(Palomita8, 20, 75, 9, 21.375, 45); 
}

 setInterval(FinalFunctionEjecution, 3000)
