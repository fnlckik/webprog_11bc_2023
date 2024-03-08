// Típusok:

// Tipp:
// int, string, bool, char, float, date, double, array, dictionary, struct

// Valóság:
// 3 alaptípus (primitív):
    // number => int, float, double
    // string => string, char
    // bool => bool
// Összetettek:
    // array
    // object => struct, date, dictionary

// typeof(): megadja egy elem típusát

// 1. String
console.log("1. Szöveg:", typeof("alma"));

// 2. Number
// Nincs külön int és float
console.log("2. Szám:", typeof(3.14));
console.log("2. Szám:", typeof(2));

// 3. Logikai
console.log("3. Logikai:", typeof(true));

// ------------------------------
// További 3 speciális érték

// 4. Undefined
console.log("4. Undefined:", typeof(nev));
// Tipikus előfordulás:
// értéket nem kapott változók
// visszatérés nélküli függvények

// 5. Null
console.log("5. Null:", typeof(null));

// 6. NaN - Not a Number
// 0 / 0, Infinity - Infinity, 0 * Infinity
console.log("6. NaN:", typeof(0 / 0));