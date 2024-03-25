export const paintingData = [
 { 
    imgSrc: `./public/artworks/12.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: 0, y: 3, z: -29.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    id: 1,
    info: {
      // info about the painting
      title:'Title',
      artist: 'Rosa Bonheur',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork  perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year 212`,
      etudes: {
        key: 'balto',
        link: './balto.glb',
        position: { x: 0, y: 3, z: -29.5 },
          
      }
     
    },
  },
  


  { 
    imgSrc: `./public/artworks/1.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -5, y: 3, z: -10 }, // position of the painting
    rotationY: Math.PI /2, // rotation of the painting
    id: 2,
    info: {
      // info about the painting
      title:'Title',
      artist: 'Rosa Bonheur',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork  perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year 212`,
      etudes: {
        key: 'balto',
        link: './balto.glb',
        position: { x: -5, y: 3, z: -10 },
          
      }
     
    },
  },
];
