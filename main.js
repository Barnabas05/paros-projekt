//atok
let merci = []
let audi = []
let bmw = []
let skoda = []
let ford = []
let ferrari = []
let porsche = []
let fiat = []
let dodge = []
let camaro = []
let aston = []
let volvo = []

//pénz
let money = 10000

//arak

const merciAr = 2000
const audiAr = 2000
const bmwAr = 2000
const skodaAr = 2000
const fordAr = 2000
const ferrariAr = 2000
const porscheAr = 2000
const fiatAr = 2000
const dodgeAr = 2000
const camaroAr = 2000
const astonAr = 2000
const volvoAr = 2000

const hozzaad = (value, list) => {
    list.push(value)
    display()
}

const buy = () => {
    let temp = merci.length * merciAr + audi.length * audiAr + bmw.length * bmwAr + skoda.length * skodaAr + ford.length * fordAr + ferrari.length * ferrariAr + porsche.length * porscheAr + fiat.length * fiatAr + dodge.length * dodgeAr + camaro.length * camaroAr + aston.length * astonAr + volvo.length * volvoAr;
    money = money - temp
    if (money <= 0) {
        alert("Nincs elég pénzed, kérlek módosíts a kosár tartalmán!")
        egyenleg()

    } else {
        alert("siekres vásárlás " + temp + "-t költöttél")
        merci = []
        audi = []
        bmw = []
        skoda = []
        ford = []
        ferrari = []
        porsche = []
        fiat = []
        dodge = []
        camaro = []
        aston = []
        volvo = []
        egyenleg()
        display()
    }
}
const egyenleg = () => {
    document.getElementById("money").innerHTML = "egyenleg:" + money
}

const writeout = () => {
    document.getElementById("merci-print").innerHTML = "Neked " + merci.length + " Mercedesed van. (2000Ft/db)";
    document.getElementById("audi-print").innerHTML = "Neked " + audi.length + " Audid van. (2000Ft/db)";
    document.getElementById("bmw-print").innerHTML = "Neked " + bmw.length + " BMW-d van. (2000Ft/db)";
    document.getElementById("ford-print").innerHTML = "Neked " + ford.length + " Fordod van. (2000Ft/db)";
    document.getElementById("ferrari-print").innerHTML = "Neked " + ferrari.length + " Ferrarid van. (2000Ft/db)";
    document.getElementById("porsche-print").innerHTML = "Neked " + porsche.length + " Porschéd van. (2000Ft/db)";
    document.getElementById("fiat-print").innerHTML = "Neked " + fiat.length + " Fiatod van. (2000Ft/db)";
    document.getElementById("dodge-print").innerHTML = "Neked " + dodge.length + " Dodgeod van. (2000Ft/db)";
    document.getElementById("aston-print").innerHTML = "Neked " + aston.length + " Aston Martinod van. (2000Ft/db)";
}

const display = () => {
    writeout()
}

const remove = (list) => {
    list.pop()
    display()
}

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    display()
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}