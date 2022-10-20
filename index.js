const submitButton = document.queryCommandValue("#submit");
console.log("js sur mon boutton");

// 1 - Selectionnner le bouton 
// 2 - Coller un ecouteur d'evenement sur le boutton
// 3 - Déclencher l'analyse

// Objet = suite de propriété avec des valeurs


/*
const parseButton = document.querySelector("#parseButton");
// la constante pareButton à pour valeur le résultat de le méthode .querySelector (c'est une function dans un objet)
// querySelector récupère dans le DOM l'élément dont l'id est "parseButton"
console.dir(parseButton);

const sentenceInput = document.querySelector('#sentenceInput');
// console.dir pour log des éléments HTML
console.dir(sentenceInput);

parseButton.addEventListener("click", analyse);
// On place un addEventistener sur le button
// lorsque que l'on "click" sur le button on déclanche la funtion donnée

// le code de l'analyse   
function analyse(){
    if (sentenceInput.value !== "") {
        console.log("début de l'analyse");
    }
}



sentenceInput.addEventListener('keypress', function (event){
    // Ce qu'il y a entre () est une condition
    // event est un OBJET
    // === EGALE opérateur de comparaison
    // SI la propriété key de mon évenement est égale à la chaine de caractère 'entrer'
    if (event.key === 'Enter') {
        analyse()
    }
})
*/