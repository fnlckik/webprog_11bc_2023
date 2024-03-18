// Vezérlési szerkezetek
// if, for, while, switch => C# szintaxis
// function

// 1. Függvények
// Eljárás: undefined visszatérésű függvény
// paraméterek típusa nem érdekes
function atlag(a, b) {
    return (a + b) / 2;
}


// 2. Ciklusok, láthatóság (var, let)
console.log("Szamok 1-tol 5-ig:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// console.log(i);


// 3. If, "truthy, falsy"
// Falsy: hamisra kiértékelődő
// Nekünk: false, 0, "", null, undefined, NaN
if (1 < 2) {
    console.log("Igaz!");
} else {
    console.log("Hamis!");
}
console.clear();


// ---------------------------------------

// 4. Készíts duplazoFelezo(n) nevű függvényt, ami:
// páros számok felét,
// páratlanok dupláját adja vissza!
function duplazoFelezo(n) {
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return n * 2;
    }
}



// 5. Készíts osztokSzama(n) nevű függvény, amely:
// megadja, hogy hány pozitív osztója van n-nek!
function osztokSzama(n) {
    let db = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            db++;
        }
    }
    return db;
}



// 6. Készíts primE(p) nevű függvényt, amely
// egy számról eldönti, hogy prímszám-e!
// Visszatérési értéke pontosan akkor igaz
// ha prímszám a paraméter!
// Csak 1-nél nagyobb egész számok lehetnek prímek!
function primE(p) {
    db = osztokSzama(p);
    if (db === 2) {
        return true;
    } else {
        return false;
    }
}
// Gond: nem hatékony!



// 7. Készíts szoveg(a, b) néven függvényt, amely
// egy [a, b] intervallumból előállít egy neki
// megfelelő hosszúságú stringet.
// Ha az intervallum egy eleme osztható 2-vel, akkor "2"
// ha osztható 3-mal akkor "3",
// ha 2-vel és 3-mal is osztható akkor "X",
// minden egyéb esetben pedig "-" legyen a neki megfelelő karakter!
// Pl.: szoveg(12, 20) === "X-232-X-2"



