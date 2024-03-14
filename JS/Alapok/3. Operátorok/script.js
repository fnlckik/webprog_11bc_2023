// console.log("körte");

// Operátorok - műveletek

// Aritmetikai
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(parseFloat((5 / 3).toFixed(2)));
console.log("Maradékos osztás:", 5 % 3);
console.log("Egész osztás:", parseInt(-5 / 3));
console.log("Hatvány:", 2 ** 5);
// C# konvertálás egésszé:
// Convert.ToInt32(n), int.Parse(n)
console.clear();

// Infinity
console.log("Infinity:", 1 / 0);
console.log("-Infinity:", 1 / -0);

// Itt szövegként hajtja végre:
console.log("alma" + "fa");
console.log(2 + "3");

// Itt számként hajtja végre:
console.log(2 - "3");
console.log(2 * "3");
console.log(2 / "3");

// Itt az eredmény NaN lesz:
console.log(0 / 0);
console.log(Infinity - Infinity);
console.log(Infinity * 0);
console.log("alma" * 4);
console.log("alma" * "fa");
console.clear();

// Változók aritmetikája
// x--;
// x *= 5
let x = 5;
x++;
console.log(x);
x += 5;
console.log(x);
console.clear();

// ----------------------------
// Relációs

// Alapok: <, >, <=, >=, ==, !=
console.log(2 < 3);
console.log(5 != 7);
console.clear();

// Python: False
// C#: error
// JS: true
// Ebből még gond lehet...
console.log(2 == "2");
console.clear();

// Itt a baj...
// A == operátor nem tranzitív!
// Matek: a==b && b==c => a==c
console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");
console.clear();

// Strictly equal (szigorú egyenlőség)
// Igaz pontosan akkor ha:
// típus ÉS érték szerint is egyenlőek
console.log(0 === "0");
console.log(0 !== "0");

// NaN vizsgálata:
// isNaN: igaz, ha paramétere értéke NaN
console.log(isNaN(NaN));
console.clear();

// ----------------------------
// Logikai
// ! - nem
// && - és
// || - vagy
console.log(false || 5 < 12 && 3 != "3");
console.clear();

// Kitekintés:
// Vigyázat! Ne használj ilyet!
console.log(2 < 5 < 7);
console.log(5 < 7 < 2);