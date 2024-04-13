export const paintingData = [
 { 
    imgSrc: `/rooms/artworks/111.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: 0, y: 3, z: -29.9 }, // position of the painting
    rotationY: 0, // rotation of the painting
    id: 4,
    info: {
      // info about the painting
      title:'The lions at home - 1881',
      size: '62.3 x 262.3cm ',
      place: 'Ferens Art Gallery, Hull',
      fr: `<b>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisit ici de les peindre en famille, allongés calmement.</b>

      Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. En effet, les autres artistes peintres du  XIX<small><sup>e</sup></small> siècle siècle donnait souvent l’animal comme symbole. En cela, nous pouvons penser à Eugène Delacroix et sa peinture <em>Chasse aux lions</em> de 1855. Dans cette dernière, nous pouvons voir que le lion est un trophée symbole de puissance et de violence. Au contraire, Bonheur représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte.
      Bonheur connaissait bien les lions. Elle se rendait dans des jardins zoologiques ou chez des dresseurs, afin de pouvoir les étudier. Par ailleurs, elle reçut dans les années 1985 deux lionceaux en cadeau. Elle vécut avec l’un d’eux qui était malade, l’autre n’ayant pas survécu.
      Pour Bonheur, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. ».
      
      Ce tableau peut mettre en relief un paradoxe. Ici, les lions semblent heureux, paisibles et dans un cadre familial harmonieux. Pourtant, à l’époque les lions étaient importés en France par la force pour le divertissement d’élites dans les cirques par exemple.`,
      en: ` <b>While lions are often used as symbols of power, Rosa Bonheur chooses to paint them here as a family, lying calmly.</b>

      Rosa Bonheur wanted to represent animals faithfully. For her, the lion, like any other animal, was not a symbol but simply a living being. Indeed, other painters of the 19th century often portrayed animals as symbols. In this regard, we can think of Eugène Delacroix and his painting "Hunting Lions" from 1855. In the latter, we can see that the lion is a trophy symbolizing power and violence. In contrast, Bonheur depicts three lion cubs here alongside their parents, in a moment of calm. There is no blood or fighting, no power or fear.
      Bonheur was familiar with lions. She visited zoological gardens or trainers to study them. Furthermore, she received two lion cubs as gifts in the 1980s. She lived with one of them, which was sick; the other did not survive.
      For Bonheur, preparatory studies were essential and constituted a step as important as the execution of the painting itself. She even told her students, "Be careful not to rush, before picking up the brushes, first lock up your pencil, become strong in the science of drawing."
      This painting can highlight a paradox. Here, the lions seem happy, peaceful, and in a harmonious family setting. Yet, at the time, lions were imported into France by force for the entertainment of elites in circuses, for example.`,

      cadre: {
        key: 'framelion',
        link: '/rooms/lionframe.glb',
        cadre: '/rooms/frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'lion',
        link: '/rooms/lion.glb',
        position: { x: 0, y: 3, z: -29.5 },
          
      }
     
    },
  },
  


  { 
    imgSrc: `/rooms/artworks/000.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: -19.7, y: 3, z: -11 }, // position of the painting
    rotationY: Math.PI /2, // rotation of the painting
    id: 5,
    info: {
      // info about the painting
      title:'Sheep and Lamb - 1866',
      size: '33 cm x 43,5 cm33 cm x 43,5 cm ',
      place: 'Walker Art Gallery, National Museums Liverpool',
     fr: `<b>Une famille de moutons : l’agneau et un membre de sa famille rapprochent leurs museaux sous le soleil doré, certainement en signe d’affection.</b> <br>

     Rosa Bonheur, célèbre pour sa représentation fidèle des animaux, nous livre ici une vision chaleureuse de la vie pastorale. À travers ses pinceaux, elle capture non seulement l’anatomie des moutons, mais surtout, elle parvient à transmettre toute leur affection et leur sensibilité. Les moutons, animaux favoris de l'artiste, sont représentés avec une tendresse palpable, témoignant de son profond lien émotionnel avec ces créatures. Nous pouvons même ressentir ce lien en observant son étude “Repose” qui met en avant l’amour entre humains et moutons.<br>
     
     Pour parvenir à une telle précision dans ses représentations, Rosa Bonheur adoptait une approche scientifique, observant attentivement les animaux et réalisant diverses études, que ce soit des peintures, des dessins au crayon ou même des sculptures. Dans sa jeunesse, Bonheur était habituée à modeler de petits animaux en cire. Ces modelages l’ont notamment aidé plus tard à la confection de ses sculptures de bronze. <br>
     Contrairement à son frère Isidore Bonheur, qui s'est principalement consacré à la sculpture, Rosa Bonheur a choisi de conserver l’art de sculpter pour enrichir ses études et approfondir sa compréhension des formes et des mouvements animaux. 
     
`,
      en: `<b>A family of sheep: the lamb and a member of its family nuzzle their noses under the golden sun, surely as a sign of affection.</b><br>

      Rosa Bonheur, famous for her faithful representation of animals, delivers here a warm vision of pastoral life. Through her brushes, she captures not only the anatomy of sheep but, above all, she manages to convey all their affection and sensitivity. The sheep, the artist's favorite animals, are depicted with palpable tenderness, testifying to her deep emotional connection with these creatures. We can even feel this bond by observing her study "Repose," which highlights the love between humans and sheep.<br>
      To achieve such precision in her representations, Rosa Bonheur adopted a scientific approach, carefully observing animals and making various studies, whether paintings, pencil drawings, or even sculptures. In her youth, Bonheur was accustomed to modeling small animals in wax. These models notably helped her later in making her bronze sculptures. Unlike her brother Isidore Bonheur, who mainly focused on sculpture, Rosa Bonheur chose to preserve the art of sculpting to enrich her studies and deepen her understanding of animal forms and movements.`,
      cadre: {
        key: 'framesheep',
        link: '/rooms/sheepframe.glb',
        cadre: '/rooms/frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },

      etudes: {
        key: 'sheep',
        link: '/rooms/sheep.glb',
        position: { x: 0, y: 3, z: -10 },
          
      }
     
    },
  },



  { 
    imgSrc: `/rooms/artworks/300.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: 19.9, y: 3, z: -11 }, // position of the painting
    rotationY: -Math.PI /2, // rotation of the painting
    id: 6,
    info: {
      // info about the painting
      title:'Sangliers dans la neige - 1872 à 1877',
      size: ' 21 cm x 30,8 cm   ',
      place: 'Coll. Priv',
      fr: `<b>Trois sangliers évoluent dans un paysage hivernal au cœur de la forêt. Ils marchent sur le chemin comme de simples randonneurs.</b>

      Rosa Bonheur avait un intérêt profond pour la représentation des animaux en groupe. Dans cette composition, les sangliers semblent former une famille ou un troupeau, déambulant ensemble à travers leur environnement naturel. Deux d'entre eux sont immobiles, leurs regards scrutant l'horizon avec attention, suggérant une vigilance naturelle face aux dangers potentiels de la forêt. Le leader, en tête du groupe, se  distingue par sa posture assurée et déterminée, exprimant une confiance tranquille dans la direction qu'il prend.
      
      À l'époque de Rosa Bonheur, les sangliers étaient souvent associés à la chasse. Cependant, l'artiste les considérait différemment, ne se contentant pas de les voir comme de simples créatures féroces. À travers cette œuvre, elle offre une vision  plus nuancée de ces animaux, mettant en avant leur tranquillité, leur  intelligence et leur capacité à naviguer dans leur environnement naturel avec une certaine grâce et sagesse. Bonheur avait un sanglier, nommé Kiki, qui lui a certainement servi de modèle dans l’étude à l’huile, tel que l’on peut le voir dans l’illustration de Theodore Stanton.`,

      en: `
      Three wild boars move through a winter landscape deep within the forest. They walk along the path like simple hikers.
      
      Rosa Bonheur had a deep interest in representing animals in groups. In this composition, the wild boars appear to form a family or a herd, strolling together through their natural environment. Two of them are motionless, their gazes scanning the horizon attentively, suggesting a natural vigilance against the potential dangers of the forest. The leader, at the forefront of the group, stands out with his confident and determined posture, expressing a calm assurance in the direction he is taking.
      During Rosa Bonheur's time, wild boars were often associated with hunting. However, the artist viewed them differently, not purely as fierce creatures. Through this work, she offers a more nuanced vision of these animals, highlighting their tranquility, intelligence, and ability to navigate their natural environment with a certain grace and wisdom. Bonheur had a wild boar named Kiki, which certainly served as a model for her in the oil study, as seen in Theodore Stanton's illustration.`,
      cadre: {
        key: 'framepig',
        link: '/rooms/pigframe.glb',
        cadre: '/rooms/frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'pig',
        link: '/rooms/pig.glb',
        position: { x: 0, y: 3, z: -10 },
          
      }
     
    },
  },
];
