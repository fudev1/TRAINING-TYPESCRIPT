let firstname; 
firstname = true; 
firstname = 'banane';
// il me propose les fonction du type string car je l'ai assigné comme tel
// au dessus
firstname.charAt(1);
firstname = 42;
// là on vient de redéfinir `firstname` en nombre donc il va perdre les fonction string => 
// firstname.charAt(1); // il va y avoir une erreur. charAt n'existe pas sur le type number


// on assigne le type de boolean à notre variable
let hasMulet: boolean;
// typescript crée une erreur à la transpilation 
// si on assigne à notre variable une valeur non boolean
// ex : hasMulet = 'monstring';
hasMulet = true;

let lastName: string;
let age: number; 

// créer des tableaux

const colors : string[] = ['mauve'];
const note : Array<number> = [42];

// on peut dire que c'est un tableau de nombre OU de boolean
const tableauBizarre : Array<number | boolean> = [42, false];

// les tuples
// tableau avec un nombre fixe d'éléments

const monTuple: [string, number] = ['caract', 42];

// comme les éléments sont typés par index
// il peut savoir quel éléments a accès à quel
// fonction / propriétés
monTuple[0].charAt(2);
monTuple[1].toString();

const myCharacter: {
    nickname: string,
    level : number;
    //le ? rend la propriété optionnelle
    isSick? : boolean
} = {
    level: 32,
    nickname : 'deviloux',
}