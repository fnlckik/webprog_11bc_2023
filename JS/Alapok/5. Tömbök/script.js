// Tömb (js) ~ Lista (python)
// - Méretezhető
// - Indexelés 0-tól
// - Többféle típusú elem (felesleges)

// Tömb megadása, hossza, elem hozzáadása
// x.push(elem) ~ x.Add(elem) ~ x.append(elem)
// 7, 2, -3, 8, 0, 5, 2
let x = [7, 2, -3, 8, 0, 5, 2];
console.log("x[0]:", x[0]);
x.push(404);
console.log(x);
console.log("Tomb hossza:", x.length);
console.clear();

// Kitekintés: hézagos tömb
let tomb = [2, 5, , 7, , , , 11];



// -------------------------------------

// 0. nemnulla
// Készíts függvényt, amely megadja, hogy
// hány 0-tól különböző eleme van egy tömbnek!

// if (a[i] !== 0 && a[i] !== undefined)
function nemnulla(a) {
    let db = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] && a[i] !== 0) {
            db++;
        }
    }
    return db;
}

function nemnulla(szamok) {
    let db = 0;
    for (const elem of szamok) {
        if (elem && elem !== 0) {
            db++;
        }
    }
    return db;
}



// -------------------------------------

// 1. legnagyobb
// Készíts függvényt, amely megadja
// egy tömb legnagyobb elemét!




// 2. paratlanok
// Készíts függvényt, amely kiválogatja
// egy tömb páratlan elemeit!




// 3. egyezoParitas
// Készíts függvényt, amely megadja, hogy
// a kapott listában van-e két egymás melletti
// azonos paritású elem! (Vagyis amelyek
// egyformán párosak vagy páratlanok.)




// 4. szoroz
// Készíts függvényt, ami kap egy tömböt és két számot,
// és megadja a tömb azon elemeinek szorzatát,
// melyek a két szám közé esnek!
// Vigyázat: szoroz([1, 2, 3, 4], 4, 2) === 24
// Mi történik több vagy kevesebb paraméter esetén?



