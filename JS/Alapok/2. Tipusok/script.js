// Típusok

// Tipp:
// int, string, char, double, boolean, float, list, struct

// Valóság:
// number => int, float, double
// string => string, char
// boolean => boolean
// array => list
// object => struct

// Szöveg
console.log("1. Szöveg:", typeof("alma"));

// Szám
console.log("2. Szám:", typeof(5));
console.log("2. Szám:", typeof(3.14));

// Logikai - true, false
console.log("3. Logikai:", typeof(true));

// Változók deklarálása (helyet foglalunk a memóriában):
// A böngésző konzolja az oldal JS kontextusában fut.
let a = 3; // int a = 3;
let b = 5;
let c;

// További különleges értékek:
// 4. Undefined
// - változók értéke, ha még nem kaptak értéket
// - függvények esetén, ha nincs visszatérési érték
console.log("4. Undefined:", typeof(undefined));

// 5. Null
console.log("5. Null:", typeof(null));

// 6. NaN (Not a Number)
// Kb. nem létező műveletek elvégzésekor
console.log("6. Nem szám:", typeof(NaN));

// Vizsgálni, hogy valami NaN érték: isNaN(x)