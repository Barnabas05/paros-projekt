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
}

const buy = () => {
    let temp = merci.length * merciAr + audi.length * audiAr + bmw.length * bmwAr + skoda.length * skodaAr + ford.length * fordAr + ferrari.length * ferrariAr + porsche.length * porscheAr + fiat.length * fiatAr + dodge.length * dodgeAr + camaro.length * camaroAr + aston.length * astonAr + volvo.length * volvoAr;
    let value = money - temp
    if (value <= 0) {
        alert("nincs elég pénzed, módosíts a kosár tartalmán")
    } else {
        alert(value + " Ft-od maradt")
    }
}
/*
let kosar = document.getElementById("cart")
let bolt = document.getElementById("container")

const chkosar = () => {
    document.getElementById("container").style.display = "none";
    document.getElementById("cart").style.display = "flex";
}

const chbolt = () => {
    document.getElementById("container").style.display = "grid"
    document.getElementById("cart").style.display = "none"
}*/

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
