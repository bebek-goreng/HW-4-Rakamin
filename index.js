// HW-4 Rakamin Academy

// 1. Array 100 element dengan nilai random 1 - 50 dan array ganjil genap masze

function nilaiRandom() {
    return Math.floor(Math.random() * 50) + 1;
}

let randomArray = Array.from({ length: 100 }, nilaiRandom)

console.log("Nilai array random 1-50 sebanyak 100 element jeng jeng jeng:", randomArray);

function ganjilGenap(arr) {

    let ganjil = [];
    let genap = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 !== 0 ? ganjil.push(arr[i]) : genap.push(arr[i]);
    }

    return { ganjil, genap };
}

const { ganjil, genap } = ganjilGenap(randomArray);

console.log("Nilai ganjil:", ganjil);
console.log("Nilai genap:", genap);


// 2. Nilai min dan max masze

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

const ganjilMinMax = minMax(ganjil);
const genapMinMax = minMax(genap);

console.log("Ganjil:", ganjilMinMax);
console.log("Genap:", genapMinMax);

// 3. Total nilai pada array ganjil dan genap abangkuhh

function totalNilai(arrGanjil, arrGenap) {
    let totalganjil = 0;
    let totalGenap = 0;

    for (let i = 0; i < arrGanjil.length; i++) {
        totalganjil += arrGanjil[i];
    }

    for(let i = 0; i < arrGenap.length; i++){
        totalGenap += arrGenap[i];
    }

    return { totalganjil, totalGenap };
}

const { totalganjil, totalGenap } = totalNilai(ganjil, genap);

console.log("Total nilai ganjil:", totalganjil);
console.log("Total nilai genap:", totalGenap);

// 4. Nilai rata-rata

let averageGanjil = totalganjil / ganjil.length;
let averageGenap = totalGenap / genap.length;

console.log("Nilai average ganjil:", averageGanjil);
console.log("Nilai average genap:", averageGenap);