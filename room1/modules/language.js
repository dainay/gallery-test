




export const chooseEn = () => {
  let currentLanguage = 'en';  
  localStorage.setItem('currentLanguage', currentLanguage); // Правильное сохранение значения в localStorage
  console.log(currentLanguage, "HERE LANGUAGE");
  document.getElementById('show-eng').classList.add('active-button');
  document.getElementById('show-fr').classList.remove('active-button');

  document.getElementById('info-content').innerHTML =
  '  <p><b>W/A/S/D:</b> Move around</p>  <p><b>Mouse:</b> Look around</p>  <p><b>Space:</b> Deblock/block cursor</p>   <p><b>M:</b> Show Menu</p>  <p><b>G:</b> Start music</p>   <p><b>P:</b> Stop music</p>'
  
}

export const chooseFr = ()=> {
 let currentLanguage = 'fr'; // Прямое присваивание нового значения переменной
  localStorage.setItem('currentLanguage', currentLanguage); // Правильное сохранение значения в localStorage
  console.log(currentLanguage, "HERE LANGUAGE");
  document.getElementById('show-eng').classList.remove('active-button');
  document.getElementById('show-fr').classList.add('active-button');

  document.getElementById('info-content').innerHTML =
  ' <p><b>W/A/S/D :</b> Se déplacer</p> <p><b>Souris :</b> Regarder autour</p> <p><b>Espace :</b> Débloquer/bloquer le curseur</p> <p><b>M :</b> Afficher le menu</p> <p><b>G :</b> Démarrer la musique</p> <p><b>P :</b> Arrêter la musique</p>  '
  
}

     


export const updateLanguage = () => {

  const elementsFr = document.getElementById('fr');
  const elementsEng = document.getElementById('eng');



  const storedLanguage = localStorage.getItem('currentLanguage');
  if (storedLanguage === 'fr') {
  
    elementsFr.style.display = 'block';
    elementsEng.style.display = 'none';

} else {
  elementsFr.style.display = 'none';
  elementsEng.style.display = 'block';

}



}
 