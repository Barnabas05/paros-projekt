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
const audiAr = 2118
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
    let value = money - temp
    if (value <= 0) {
        alert("Nincs elég pénzed, kérlek módosíts a kosár tartalmán!")
    } else {
        alert(value + " Ft-od maradt")
    }
}
const writeout = () => {
    document.getElementById("merci-print").innerHTML = "Neked " + merci.length + " Mercedesed van.";
    document.getElementById("audi-print").innerHTML = "Neked " + audi.length + " Audid van.";
    document.getElementById("bmw-print").innerHTML = "Neked " + bmw.length + " BMW-d van.";
    document.getElementById("ford-print").innerHTML = "Neked " + ford.length + " Fordod van.";
    document.getElementById("ferrari-print").innerHTML = "Neked " + ferrari.length + " Ferrarid van.";
    document.getElementById("porsche-print").innerHTML = "Neked " + porsche.length + " Porschéd van.";
    document.getElementById("fiat-print").innerHTML = "Neked " + fiat.length + " Fiatod van.";
    document.getElementById("dodge-print").innerHTML = "Neked " + dodge.length + " Dodgeod van.";
    document.getElementById("aston-print").innerHTML = "Neked " + aston.length + " Aston Martinod van.";
}
const display = () => {
    writeout()

}

const remove = (list) => {
    list.pop()
    display()

}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    display()
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
