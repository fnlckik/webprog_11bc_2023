// console.log("körte");

// Operátorok - műveletek

// Aritmetikai
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log("Kerekítés:", (2 / 3).toFixed(2));
console.log("Maradék:", 13 % 5);

// Egész konverzió? int.Parse()?
console.log("Egész osztás:", parseInt(13 / 5));

console.log("alma" + "fa");
console.clear()

// Ebből még baj lesz...
console.log(2 + "1");
console.log("4" * 6);

// Nem működő műveletek!
// Ilyenkor kapunk NaN-t
console.log("alma" * 6);
console.log("alma" * "fa");
console.log("alma" / "fa");

// Infinity
// Határérték (lásd: emelt matek)
console.log(1 / 0);
console.log(1 / -0);
console.clear();

// Változók aritmetikája
let a = 5;
a++;
console.log(a);
a += 5;
console.log(a);
console.clear();

// -------------------------------
// Relációs

// Alapok: <, <=, >, >=, ==, !=
console.log(2 < 3);
console.log(5 != 7);

// Mj:
// Python: False
// C#: error
// Ebből még baj lehet...
console.log(2 == "2");
console.clear();

// Erről beszélek...
// Az == operátor nem tranzitív!
// Matek: a=b és b=c => a=c
console.log("" == 0);
console.log("0" == 0);
console.log("" == "0");
console.clear();

// Új operátor:
// === stricty equal (szigorú egyenlőség)
// Igaz ha: típus ÉS érték is egyezik!
console.log("0" === 0);
console.log("0" !== 0);
console.clear();

// Még így gond lehet:
console.log(NaN == NaN);

// NaN vizsgálat
// isNaN: visszatérési értéke, hogy paramétere NaN-e?
console.log(isNaN(NaN));
console.clear();

// -------------------------------
// Logikai
// ! - nem
// && - és
// || - vagy
console.log(false || 1 < 2 && 5 !== "5");

// Kitekintés:
// Vigyázat: a < b < c jelentése (a < b) < c
console.log(1 < 3 < 5);
console.log(4 < 5 < 2);

// Összefoglaló:
// .toFixed(n), parseInt(n), parseFloat(n)
// ===, !==
// isNaN(n)