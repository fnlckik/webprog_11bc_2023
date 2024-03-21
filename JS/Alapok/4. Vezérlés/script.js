// Vezérlési szerkezetek
// if, for, while, switch => C# szintaxis
// function

// 1. Függvények
// A "return" sor végén mindig van egy
// automatikus pontosvessző!
function atlag(a, b) {
    let atl = (a + b) / 2;
    return atl;
}


// 2. Ciklusok, láthatóság (var, let)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// console.log(i);


// 3. If, "truthy, falsy"
// Falsy: hamisra kiértékelődő
// Nekünk: false, 0, "", null, undefined, NaN
// if (2 < 3) {
//     console.log("Kisebb!")
// } else if (2 === 3) {
//     console.log("Egyenlő!")
// } else {
//     console.log("Nagyobb!")
// }
if (1 / 0) {
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

function osztokSzamaJav(n) {
    let alapok = [];
    let kitevok = [];
    let oszto = 2;
    let kitevo = 0;
    while (n !== 1) {
        if (n % oszto === 0) {
            n = n / oszto;
            kitevo++;
        } else {
            alapok.push(oszto);
            kitevok.push(kitevo);
            kitevo = 0;
            oszto++;
        }
    }
    alapok.push(oszto);
    kitevok.push(kitevo);

    // Matek:
    // Prímtényezős felbontásból osztók száma:
    // Kitevőkhöz hozzáadunk egyet és összeszorozzuk
    let szorzat = 1;
    for (let i = 0; i < kitevok.length; i++) {
        szorzat *= kitevok[i] + 1;
    }
    return szorzat;
}


// 6. Készíts primE(p) nevű függvényt, amely
// egy számról eldönti, hogy prímszám-e!
// Visszatérési értéke pontosan akkor igaz
// ha prímszám a paraméter!
// Csak 1-nél nagyobb egész számok lehetnek prímek!
function primE(p) {
    return osztokSzamaJav(p) === 2;
}

function primE(p) {
    let i = 2;
    while (i < p && !(p % i === 0)) {
        i++;
    }
    return !(i < p);
    // if (i < p) {
    //     return true;
    // } else {
    //     return false;
    // }
}


// 7. Készíts szoveg(a, b) néven függvényt, amely
// egy [a, b] intervallumból előállít egy neki
// megfelelő hosszúságú stringet.
// Ha az intervallum egy eleme osztható 2-vel, akkor "2"
// ha osztható 3-mal akkor "3",
// ha 2-vel és 3-mal is osztható akkor "X",
// minden egyéb esetben pedig "-" legyen a neki megfelelő karakter!
// Pl.: szoveg(12, 20) === "X-232-X-2"



