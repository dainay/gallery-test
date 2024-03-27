export const paintingData = [
  // Front Wall
  ...Array.from({ length: 1 }, (_, i) => ({
     
    imgSrc: `./img/painings/1.jpg`,  
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: 10 , y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Van Gogh ${i + 1}`,
      artist: 'Vincent van Gogh',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork ${
        i + 1
      } perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year ${i + 1}`,
      link: ' ',
    },
  })),
  


 


];
