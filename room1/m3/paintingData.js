export const paintingData = [
 { 
    imgSrc: `./public/artworks/111.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 1, // width of the painting
    height: 1, // height of the painting
    position: { x: 0, y: 3, z: -29.9 }, // position of the painting
    rotationY: 0, // rotation of the painting
    id: 7,
    info: {
      // info about the painting
      title:'Highland Raid -1860',
      size: ' 129,5 cm x 213,3 cm',
      place: 'National Museum of Women in the Arts, Washington, D. C.',
      fr: `
      <b>Rosa Bonheur nous transporte au cœur des Highlands écossais, où un groupe de chèvres et bœufs semble se précipiter vers le spectateur avec une énergie débordante. </b>

Les animaux sont représentés en mouvement, leurs silhouettes dynamiques émergents du paysage sauvage qui les entoure. Cette peinture semble avoir été influencée par les écrits de Walter Scott, célèbre pour ses récits de héros et de légendes écossaises. À travers "Highland Raid", Rosa Bonheur nous invite à plonger dans un monde d'aventures et de mystères, où les animaux incarnent le tumulte et la vitalité de la nature.

Les chèvres, paraissant avancer sans interruption vers le spectateur, créent une impression de mouvement presque cinématographique. Ce choix artistique évoque les développements émergants de la fin du XIXe siècle, notamment le film “L’entrée d’un train en gare de la Ciotat” des frères Lumière en 1896, où un train fonce vers le spectateur, utilisant un effet similaire pour captiver l'audience. "Highland Raid" témoigne du talent visionnaire de Rosa Bonheur et de son désir d'innover dans son art, en repoussant les limites de la représentation visuelle.

Elle invite le spectateur à se perdre dans les paysages grandioses des Highlands écossais et à ressentir l'élan de vie qui anime les animaux sauvages qui y vivent. Elle souligne également l'influence puissante de la littérature et de la culture sur l'art, et la manière dont les artistes peuvent s'inspirer de diverses sources pour créer des œuvres qui transcendent les époques et les frontières.

      `,
      en: `
      <b>Rosa Bonheur transports us to the heart of the Scottish Highlands, where a group of goats and cattle seems to rush towards the viewer with overflowing energy.</b>
      
      The animals are depicted in motion, their dynamic silhouettes emerging from the wild landscape that surrounds them. This painting appears to have been influenced by the writings of Walter Scott, famous for his tales of Scottish heroes and legends. Through "Highland Raid," Rosa Bonheur invites us to dive into a world of adventure and mystery, where animals embody the tumult and vitality of nature.
      The goats, seemingly advancing uninterrupted towards the viewer, create an almost cinematic sense of movement. This artistic choice evokes the emerging developments of the late 19th century, in particular the film "Arrival of a Train at La Ciotat Station" by the Lumière brothers in 1896, where a train rushes towards the viewer, using a similar effect to captivate the audience. "Highland Raid" bears witness to Rosa Bonheur's visionary talent and her desire to innovate in her art, pushing the boundaries of visual representation.
      She invites the viewer to lose themselves in the grand landscapes of the Scottish Highlands and to feel the surge of life that animates the wild animals that live there. She also underscores the powerful influence of literature and culture on art, and how artists can draw inspiration from diverse sources to create works that transcend eras and boundaries.`,

      cadre: {
        key: 'framebull',
        link: './public/bullframe.glb',
        cadre: './public/frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: 'bull',
        link: './public/bull.glb',
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
    id: 8,
    info: {
      // info about the painting
      title:'Le Duel - 1895',
      size: '149,5 x 241,3 cm ',
      place: 'Col.P.',
      fr: `
      <b>Rosa Bonheur nous montre ici un combat entre deux chevaux : leurs poils brillent, leurs muscles semblent bouger, et leurs yeux reflètent toute la douleur et la rage qu’ils ressentent. Quel motif peut mener deux majestueux animaux à se battre ainsi ?</b>
      
      Ce tableau dépeint en fait l’histoire d’un duel légendaire entre deux étalons qui ont éxisté : Godolphin Arabian (à gauche) et Hobgoblin (à droite), se battant pour la jument Roxanna que l’on peut ici voir au fond à droite du tableau. Cette légende raconte que Godolphin, jaloux que Hobgoblin ait été l’étalon de Roxanna, l’attaque et l’achève.
      Cette histoire parle ainsi d’émotions entre animaux : la jalousie, souvent davantage exprimée dans les histoires entre humains, a su inspirer Rosa Bonheur.
      
      Cette peinture est belle de part sa symbolique, mais aussi grâce à sa composition. En effet, Bonheur utilise ici la composition pyramidale, souvent utilisée dans la peinture de la Renaissance. Ici, les corps des deux chevaux principaux forment un triangle, dont la tête de Godolphin est le sommet. Dans la légende, c’est ce dernier qui gagne finalement le duel. Le fait qu’il soit au sommet de la pyramide ne serait-il pas une indication sur l’issu du combat ?
      Nous pouvons de plus voir que la règle des tiers également utilisée en photographie est visible dans le paysage : les ombres et les arbres en fond délimitent ces tiers. Cette technique, comme celle de la composition pyramidale, permettent de rendre plus harmonieuse une peinture ou photographie.
      `,
      en: `
      <b>Rosa Bonheur shows us here a battle between two horses: their fur gleams, their muscles seem to move, and their eyes reflect all the pain and rage they feel. What motive could lead two majestic animals to fight like this?</b>
      
      This painting actually depicts the story of a legendary duel between two stallions that existed: Godolphin Arabian (on the left) and Hobgoblin (on the right), fighting over the mare Roxanna, who can be seen in the background to the right of the painting. This legend tells that Godolphin, jealous that Hobgoblin was Roxanna's stallion, attacks and kill him off. This story speaks of emotions between animals: jealousy, often more expressed in human stories, it still has inspired Rosa Bonheur.
      This painting is beautiful in its symbolism, but also thanks to its composition. Indeed, Bonheur uses here the pyramidal composition, often used in Renaissance painting. Here, the bodies of the two main horses form a triangle, with the head of Godolphin as the top. In the legend, it is this latter who ultimately wins the duel. Couldn’t the fact that he is at the top of the pyramid be an indication of the outcome of the fight? We can also see that the rule of thirds, also used in photography, is visible in the landscape: the shadows and trees in the background delimit these thirds. This technique, like that of pyramidal composition, helps to make a painting or photograph more harmonious.`,

      cadre: {
        key: 'framehorse',
        link: './public/horseframe.glb',
   
        position: { x: 0, y: 3, z: -29.5 },
      },

      etudes: {
        key: 'horse',
        link: './public/publichorse.glb',
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
    id: 9,
    info: {
      // info about the painting
      title:' La Foulaison du blé en Camargue - 1864-1899',
      size: '  313,0cm x 654,0 cm  ',
      place: 'Galerie et au musée des Beaux-Arts de Bordeaux',
      fr: `<b>Un paysan camarguais à la tête d’un troupeau de chevaux ; il tient un fouet, mais n’est-ce pas les chevaux qui semblent être puissants ?</b>

      Cette œuvre a une composition singulière. L’homme qui tient le fouet semble de prime abord être au cœur du troupeau, comme au cœur du tableau. Mais en nous attardant sur la répartition des éléments, nous pouvons constater que le troupeau est en fait légèrement sur la droite, laissant ainsi apparaitre un chariot sur la gauche. De plus, la répartition de ces chevaux dans ce tableau est étonnante : les trois chevaux blancs sont ensemble, derrière l’homme, tandis que les autres sont devant lui, guidés par son fouet. Le blanc attire ici notre oeil, et nous permet de nous attarder sur les détails des chevaux. Puissants et musculeux, ils semblent ici montrer toute la force du monde rural.
      Les chevaux (demi-sauvages) sont en effet ici utilisés pour piétiner du blé, et en extraire le grain.
      Ce tableau est par ailleurs l’un des rare où l’on aperçoit le visage d’un Homme. Bonheur savait en effet parfaitement les dessiner, mais préférait consacrer davantage de temps et de détails aux animaux, comme le montre son portrait de Buffalo Bill.
       
      Cette œuvre n’a jamais été achevée. Elle l’a en effet débutée en 1864 mais ne l’a pas terminée avant sa mort en 1899.
      `,

      en: `<b>A Camargue peasant leading a herd of horses; he holds a whip, but aren't the horses the ones who appear powerful?</b>

      This work has an odd composition. The man holding the whip initially appears to be at the heart of the herd, as well as at the center of the painting. However, upon closer examination of the distribution of elements, we can observe that the herd is actually slightly to the right, revealing a cart on the left. Furthermore, the arrangement of these horses in this painting is astonishing: the three white horses are together, behind the man, while the others are in front of him, guided by his whip. The white color here attracts our eye, allowing us to linger on the details of the horses. Powerful and muscular, they seem to display all the strength of rural life here. The (semi-wild) horses are indeed used here to trample wheat and extract the grain.
      This painting is also one of the few where we catch a glimpse of a human face. Bonheur was indeed perfectly capable of drawing them, but preferred to devote more time and detail to animals, as shown in her portrait of Buffalo Bill.
      This work was never completed. She began it in 1864 but did not finish it before her death in 1899.`,
      cadre: {
        key: 'framehorserun',
        link: './public/horserunframe.glb',
        cadre: './public/frame1.glb',
        position: { x: 0, y: 3, z: -29.5 },
      },
      etudes: {
        key: ' horserun',
        link: './public/horserun.glb',
        position: { x: 0, y: 3, z: -10 },
          
      }
     
    },
  },
];
