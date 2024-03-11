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