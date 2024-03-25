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
          
      }
     
    },
  },
  // // Back Wall
  // ...Array.from({ length: 4 }, (_, i) => ({
  //   imgSrc: `artworks/${i + 5}.jpg`,
  //   width: 5,
  //   height: 3,
  //   position: { x: -15 + 10 * i, y: 2, z: 19.5 },
  //   rotationY: Math.PI,
  //   info: {
  //     title: `Van Gogh ${i + 5}`,
  //     artist: 'Vincent van Gogh',
  //     description: `Artwork ${
  //       i + 5
  //     } by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
  //     year: `Year ${i + 5}`,
  //     link: 'https://github.com/theringsofsaturn',
  //   },
  // })),
  // // Left Wall
  // ...Array.from({ length: 4 }, (_, i) => ({
  //   imgSrc: `artworks/${i + 9}.jpg`,
  //   width: 5,
  //   height: 3,
  //   position: { x: -19.5, y: 2, z: -15 + 10 * i },
  //   rotationY: Math.PI / 2,
  //   info: {
  //     title: `Van Gogh ${i + 9}`,
  //     artist: 'Vincent van Gogh',
  //     description: `With its striking use of color and brushwork, Artwork ${
  //       i + 9
  //     } is a testament to Van Gogh's artistic genius.`,
  //     year: `Year ${i + 9}`,
  //     link: 'https://github.com/theringsofsaturn',
  //   },
  // })),
  // // Right Wall
  // ...Array.from({ length: 4 }, (_, i) => ({
  //   imgSrc: `artworks/${i + 13}.jpg`,
  //   width: 5,
  //   height: 3,
  //   position: { x: 19.5, y: 2, z: -15 + 10 * i },
  //   rotationY: -Math.PI / 2,
  //   info: {
  //     title: `Van Gogh ${i + 13}`,
  //     artist: 'Vincent van Gogh',
  //     description: `Artwork ${
  //       i + 13
  //     } is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
  //     year: `Year ${i + 13}`,
  //     link: 'https://github.com/theringsofsaturn',
  //   },
  // })),
];
