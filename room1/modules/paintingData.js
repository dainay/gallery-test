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
      title:'Barbaro après la chasse - 1858',
      size: '96.5 × 130.2cm ',
      place: 'Philadelphia Museum of Art',
      fr: `Sur cette peinture à l’huile, nous pouvons voir un chien de chasse. Pourquoi a-t-il l’air triste ?  <br>Au XIXe siècle, les chiens étaient utilisés pour le travail. Certains étaient élevés pour tirer des chariots, pour garder les troupeaux ou encore pour aider à la chasse. À la même époque, nous pouvions observer une forte augmentation du nombre de chiens dans les foyers. C’est ainsi qu’en 1855 un impôt fut créé pour les propriétaires de chiens. Le prix variait en fonction du rôle de l’animal, s’il était dit “d’agrément” ou “utilitaire”. Cette nouvelle taxe devait réduire le nombre d’animaux errants et protéger la population de la rage, mais a conduit dans certains foyers à l’abandon de leur compagnon. Sur cette peinture, le chien est un griffon briquet, une race de chiens de chasse. Il est ici attaché si court qu’il ne peut ni attraper l’os derrière ses pattes, ni se coucher. La tête baissée, il semble implorer son maître, ou les spectateurs. <br>
      Bonheur a créé cette peinture avec une intention bien précise. Elle cherche à susciter une prise de conscience sur la condition des animaux domestiques et leur traitement par l'homme. Elle dénonce donc les pratiques cruelles de l'époque, telles que l'attache courte  du chien de chasse, symbolisant le manque de liberté et de considération pour son bien-être. En capturant l'expression  triste et implorante du griffon briquet, Bonheur invite les spectateurs à  réfléchir sur leur propre responsabilité envers les animaux et à remettre en question les normes sociales qui tolèrent leur exploitation et leur souffrance.`,
      en: ` In this oil painting, we can see a hunting dog. Why does he look sad?
      
      In the 19th century, dogs were used for work. Some were bred to pull carts, to guard herds, or to assist hunting. At the same time, there was a significant increase in the number of pet dogs in households. In 1855, a tax was created for dog owners. The price varied depending on the role of the animal, whether it was considered "for company" or "utility." This new tax was intended to reduce the number of stray animals and protect the population from rabies, sadly it led to some households abandoning their pets.
      In this painting, the dog is a Briquet Griffon Vendeen, a breed of hunting dog. He is chained so short here that he cannot reach the bone behind his paws or lie down. With his head lowered, he seems to implore his master or the viewers.
      Bonheur created this painting with a very specific objective. She seeks to raise awareness about the condition of domestic animals and their treatment by humans. She therefore denounces the cruel practices of the time, such as the short tethering of the hunting dog, symbolizing the lack of freedom and consideration for its well-being. By capturing the sad and imploring expression of the Briquet Griffon, Bonheur invites viewers to reflect on their own responsibility towards animals and to question the social norms that tolerate their exploitation and suffering.`,

      cadre: {
        key: 'framebalto',
        link: './public/baltoframe.glb',
        cadre: './frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'balto',
        link: './public/balto.glb',
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
      title:'Portrait d’un âne ',
      size: '100,3 x 81,3 cm ',
      place: 'Coll. Part',
     fr: `<b>Nous pouvons voir sur cette peinture à l’huile la tête d’un âne aux traits malheureux.</b> <br> 

     À l'époque de Rosa Bonheur, les ânes occupaient un rôle crucial dans le travail agricole. Principalement présents en Normandie et en Provence, ils étaient chargés de transporter des charges lourdes, participant ainsi activement aux activités rurales. 
     Contrairement à d'autres animaux qui vivaient souvent séparément des habitations de leurs propriétaires, les ânes étaient principalement logés dans les étables situées au rez-de-chaussée des maisons, à proximité des réserves de bois et de nourriture.<br> 
     
     La décision de Bonheur de représenter ces ânes dans ses œuvres permettait d'exprimer des idées profondes sur la classe ouvrière et les travailleurs ruraux, ainsi que sur les valeurs associées à leur travail. En choisissant de les peindre, elle mettait en lumière la relation étroite entre les humains et ces animaux de travail dévoués.
     De plus, il est plausible que l'âne représenté dans sa peinture porte une expression de tristesse, symbolisant le fardeau lourd et souvent épuisant qu'il portait sur son dos. Cette dimension émotionnelle ajoute une profondeur à l'œuvre de Bonheur, révélant sa sensibilité à la souffrance des animaux et sa capacité à capturer des émotions complexes dans ses compositions.<br> 
     
     Ainsi, le "Portrait d'un âne" de Rosa Bonheur ne se contente pas de représenter un simple animal de travail, mais il devient le témoin vivant des réalités sociales et des relations interdépendantes entre l'homme et l'animal à l'époque.`,
      en: `In this oil painting, we can see the head of a donkey with a desperate expression.<br> 

      During Rosa Bonheur's time, donkeys played a crucial role in agricultural work. Primarily found in Normandy and Provence, they were forced to carry heavy loads, thus actively participating in rural activities. Unlike other animals that often lived separately from their owners' homes, donkeys were primarily housed in stables located on the ground floor of houses, near wood and food reserves. <br> 
      Bonheur's decision to depict these donkeys in her works allowed her to express deep ideas about the working class and rural workers, as well as the values associated with their work. By choosing to paint them, she highlighted the close relationship between humans and these dedicated working animals. Furthermore, it is plausible that the donkey depicted in her painting show a sad expression to symbolizing the heavy and often exhausting burden it carried on its back. This emotional dimension adds depth to Bonheur's work, revealing her sensitivity to the animal suffering and her ability to capture complex emotions in her compositions.<br> 
      Thus, Rosa Bonheur's "Portrait of a Donkey" does not merely depict a simple working animal, but it becomes a living witness to the social realities and interdependent relationships between humans and animals at that time.`,
      cadre: {
        key: 'framedonkey',
        link: './public/donkeyframe.glb',
        cadre: './frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },

      etudes: {
        key: 'donkey',
        link: './public/donkey.glb',
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
      title:'Trois cerfs mâles en forêt de Fontainebleau - 1886',
      size: '74 x 61cm ',
      place: 'Gallery Robert Funk Fine Art',
      fr: `<b>Cette peinture représente trois cerfs de Fontainebleau, arrêtés et qui regardent le spectateur, ou la peintre. </b><br>

      Bonheur nous apporte ici une information sur la vie des cerfs de l’époque. Ils vivent en groupes dans la forêt de Fontainebleau. L’Office National des Forêts (ONF) en dénombre de nos jours entre 650 et 750 dans cette forêt. Mais Bonheur en peint ici trois ensemble et ils sont l’objet de nombreux autres de ses tableaux, comme Le Roi de la Forêt (1878). La peintre a-t-elle eu la chance de vivre à une époque où il était courant de faire la rencontre de cervidés en se promenant dans les bois ? Pour pouvoir peindre des cerfs en liberté, elle explique dans ses mémoires publiées en 1908 qu’elle avait pour habitude de s’assoir dans les bois pour que les animaux s’habitue à sa présence. Elle pouvait ensuite les peindre, sans risquer de les effrayer.
      Sur cette huile sur toile, les cerfs nous observent. Nous pouvons lire dans leur regard différentes émotions : la peur, la surprise et la méfiance. Bonheur qui observait méticuleusement les animaux et les étudiait en profondeur, prête des émotions aux cerfs à une époque où ils sont pour la plupart de simples gibiers. <br>
      
      Nous savons aujourd’hui que cerfs et biches pleurent lors de la chasse. Montaigne disait déjà “Et comme il advient communément que le cerf, se sentant hors d’haleine et de force, n’ayant plus autre remède, se rejette et rend à nous-mêmes qui le poursuivons, nous demandant merci par ses larmes…” en 1580, mais la lutte contre la chasse n’a pas été considéré après de nombreuses années plus tard.<br>
      Ainsi, "Trois cerfs mâles en forêt de Fontainebleau" incarne non seulement le talent artistique de Rosa Bonheur, mais aussi son engagement envers la  cause animale et la préservation de l'environnement, faisant de cette  œuvre un témoignage poignant de son époque et une source d'inspiration pour les générations futures.`,

      en: `<b>This painting depicts three deer from Fontainebleau, halted and gazing at the viewer, or the painter.</b>
      <br>
      Bonheur provides us here with insight into the lives of deer at the time. They lived in groups in the Fontainebleau forest. The National Forestry Office (ONF) currently estimates their numbers to be between 650 and 750 in this forest. But Bonheur paints three of them together here, and they are the subject of many of her other paintings, such as "The King of the Forest" (1878). Did the painter have the chance to live in an era when encountering deer while walking in the woods was common? To be able to paint deer in the wild, she explained in her memoirs published in 1908 that she used to sit in the woods to let the animals get used to her presence. She could then paint them without risking frightening them.<br>
      In this oil on canvas, the deer are observing us. We can read different emotions in their gaze: fear, surprise, and suspicion. Bonheur, who meticulously observed and studied animals, attributes emotions to the deer at a time when most of them were merely seen as game.<br>
      We now know that deer and does cry during hunting. Montaigne already said in 1580, "And as commonly happens that the deer, feeling out of breath and strength, having no other remedy, throws itself back and surrenders to us who pursue it, asking for mercy with its tears..." But the fight against hunting was not considered until many years later.
      Thus, "Three Male Deer in the Fontainebleau Forest" embodies not only Rosa Bonheur's artistic talent but also her commitment to the animal cause and environmental preservation, making this work a poignant testimony of her time and a source of inspiration for future generations.`,
      cadre: {
        key: 'framecerf',
        link: './public/cerfframe.glb',
        cadre: './public/frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'cerf',
        link: './public/cerf1.glb',
        position: { x: 0, y: 3, z: -10 },
          
      }
     
    },
  },
];
