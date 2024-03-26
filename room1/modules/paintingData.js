export const paintingData = [
 { 
    imgSrc: `./public/artworks/111.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: 0, y: 3, z: -29.9 }, // position of the painting
    rotationY: 0, // rotation of the painting
    id: 1,
    info: {
      // info about the painting
      title:'Title',
      artist: 'Rosa Bonheur',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork  perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year 212`,

      cadre: {
        key: 'framebalto',
        link: './baltoframe.glb',
        cadre: './frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'balto',
        link: './balto.glb',
        position: { x: 0, y: 3, z: -29.5 },
          
      }
     
    },
  },
  


  { 
    imgSrc: `./public/artworks/000.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: -19.7, y: 3, z: -11 }, // position of the painting
    rotationY: Math.PI /2, // rotation of the painting
    id: 2,
    info: {
      // info about the painting
      title:'Title',
      artist: 'Rosa Bonheur',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork  perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year 212`,
      cadre: {
        key: 'framedonkey',
        link: './donkeyframe.glb',
        cadre: './frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },

      etudes: {
        key: 'donkey',
        link: './donkey.glb',
        position: { x: 0, y: 3, z: -10 },
          
      }
     
    },
  },



  { 
    imgSrc: `./public/artworks/300.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: 19.9, y: 3, z: -11 }, // position of the painting
    rotationY: -Math.PI /2, // rotation of the painting
    id: 3,
    info: {
      // info about the painting
      title:'Cerf',
      artist: 'Rosa Bonheur',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork  perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year 212`,
      cadre: {
        key: 'framecerf',
        link: './cerfframe.glb',
        cadre: './frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'cerf',
        link: './cerf1.glb',
        position: { x: 0, y: 3, z: -10 },
          
      }
     
    },
  },
];
