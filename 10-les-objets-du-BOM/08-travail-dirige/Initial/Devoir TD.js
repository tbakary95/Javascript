// 1.
// Créer une chaîne de caractères de 50
let tiret = "_";
console.log(`tiret: ${tiret.repeat(50)}`);

// 2.
//Inverser une chaîne de caractères (sans supprimer l'originale)
let maChaine = 'Lorem ipsum dolor sit amet consectetur adipiscing.' ;
let rev = maChaine.split('').reverse().join('');
console.log(maChaine);
console.log(rev);

// 3.
// Remplacer tous les caractères d'une chaîne par une *
let voyage = `jadore le code`;
let nvx = voyage.replace('jadore le code','*');
console.log(nvx);

// 4.
// Remplacer toutes les occurrences d'une lettre par une autre dans une chaîne
// de caractères

const chang = `vive le codage`;
console.log(chang.replace('e','t' ));

// 5.
// Supprimer toutes les occurrences d'une lettre dans une chaîne de caractères

food = `J'aime la pizza`;
food1 = food.split('e').join('');
console.log(food1);


// 6.
// Afficher la présence d'une lettre dans une chaîne (si oui, en afficher le nombre
// ( si non, afficher "absent")

let animaux = `J'ai un chat persan`;
let arr = [];
let chr = "n";
for(let item of animaux){
    if(item === chr)arr.push(item);
}
console.log("nbr de", chr, "=", arr.length)


// 7.
// Compter le nombre d'occurrence de chaque lettre dans une chaine

const str = "J'allume mon ordinateur chaque matin.";
let count = 0;
let pos = str.indexOf("r");

while ( pos != -1 ) {
    count++;
    pos = str.indexOf( "r",pos + 1 );
}
console.log(count);

// // 8.
//Remplacer les double-espace (ou +) dans une chaîne de caractères par un espace
const greeting = '    Une journée ensoleilée   ';
console.log(greeting);
console.log(greeting.trim());

// 9.
// Découper une chaîne de caractères en mots avec l'espace comme séparateur
// et les compter

var hop = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var tab = hop.split(" ");

for(var i = 0; i < tab.length; i++){
    console.log(tab[i]);
}
console.log(hop.length);
console.log(tab.length);

//////////////////////////////////////////////////////////////////////////
function ismultiple() {
    let n=Number(prompt("n="));
    let m=Number(prompt("m="));
    if ((n % m)==0){
        alert(`${n}`+`est un multiple de `+` ${m}`);
    }
    else {
        alert(`${n}`+`n'est pas un multiple de `+` ${m}`);
    }
    return n%m;
}
ismultiple();

function pair(chiffre){
    chiffre=Number(prompt("n="));
    chiffre=parseInt(chiffre);
    return ((chiffre & 1)=='0')?true:false;
}
alert(pair());

