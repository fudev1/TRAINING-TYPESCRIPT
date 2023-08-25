"use strict";
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
let hasMulet;
// typescript crée une erreur à la transpilation 
// si on assigne à notre variable une valeur non boolean
// ex : hasMulet = 'monstring';
hasMulet = true;
let lastName;
let age;
// créer des tableaux
const colors = ['mauve'];
const note = [42];
// on peut dire que c'est un tableau de nombre OU de boolean
const tableauBizarre = [42, false];
// les tuples
// tableau avec un nombre fixe d'éléments
const monTuple = ['caract', 42];
// comme les éléments sont typés par index
// il peut savoir quel éléments a accès à quel
// fonction / propriétés
monTuple[0].charAt(2);
monTuple[1].toString();
const myCharacter = {
    level: 32,
    nickname: 'deviloux',
};
// les enums
var Roles;
(function (Roles) {
    Roles["USER"] = "user";
    Roles["ADMIN"] = "admin";
    Roles["SUPERADMIN"] = "superadmin";
})(Roles || (Roles = {}));
let userRole = Roles.ADMIN;
if (userRole === Roles.ADMIN) {
    console.log(`c'est un admin !`);
}
// any
// avec any on est en js classique donc on sort du contexte TS
// car il sera incapable de nous dire si soucis il y
// genre on pourrait faire du code abérant comme :
// on lui dit de tout accepter
let maVariable;
// maVariable.push("WTF");
// si jamais on ne sait pas à l'avance quel type la var doit accepter 
// on peut use : 
// unknown;
let maVariableInconnue;
// maVariableInconnue.push('fdss'); // va me dire qu'il n'est pas OK
// parce qu'on lui dit de vérifie le type
// ça fonctionne car on lui spécifie que ça peut être ok si c'est un tableau
if (Array.isArray(maVariableInconnue)) {
    maVariableInconnue.push('blabla');
}
if (typeof maVariableInconnue === 'string') {
    maVariableInconnue.charAt(45);
}
// les fonctions 
// on type notre fonction en disant qu'elle ne renvoie rien
function banane() {
    console.log('banane');
}
// si on définit pas les types :number 
// ts va dire qu'il va return any
// si on type alors il va savoir qu'il doit return number
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}
// let result : string = add(32,34)
// vu qu'on a spécifié que la function devait return un nbre
// il accepte pas que result soit de type string
let result = add(2, 2);
function maFunctionCallBack(arg1, callback) {
    console.log(arg1);
    return callback(true);
}
// ts check strictement la valeur du retour de la callback
// mais si les argument ne sont pas présent, il n'y a pas d'erreur de compilation
maFunctionCallBack('otter', () => {
    return 2;
});
function optionalArgs(argMandatory, argOptional) {
    return argMandatory + argOptional;
}
optionalArgs('banane'); // on définit le 1er argu mais pas le 2nd car OPTIONNEL
optionalArgs('banane', 'pomme'); // si spécifie le 2nd arg, il DOIT etre un string
// optionalArgs('banane', 3) > PAS OK car ce n'est pas un string
// Le spread
// un arg spread doit forcément être un tableau
function mergeElements(...args) {
}
mergeElements('banane', 'pomme', 'orange'); // c'est ok
// as Unknow permet de rendre permissif un typage 
// c'est pas propre mais c'est dans le cas où on est bloqué
// on définit qu'un type défini a l'avance est redéfinit après
let fakeNumber = '42000';
function age2Glace(age) {
    // on peut utiliser une fonction number 
    // car dans ce cas
    // on lui dit qu'il doit le considérer comme un nombre
    return age.toExponential();
}
// créer une fonction avec des mode qu'on peut spécifier
function save(mode) {
}
save('delete');
const player = {
    name: 'deviloux',
    level: 23,
    class: 'paladin',
    isAlive: true,
    note: 'une note que jean a mit'
};
function lvlUp(player) {
}
