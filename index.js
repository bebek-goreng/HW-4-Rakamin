// HW-4 Rakamin Academy

// 1. Array 1 - 100 dan array ganjil genap

function ganjilGenap(jumlah) {
    const nilaiArray = Array.from({ length: jumlah }, (_, index) => index + 1);

    let ganjil = [];
    let genap = [];

    for (let i = 0; i < nilaiArray.length; i++) {
        nilaiArray[i] % 2 !== 0 ? ganjil.push(nilaiArray[i]) : genap.push(nilaiArray[i]);
    }

    return { nilaiArray, ganjil, genap };
}

const { nilaiArray, ganjil, genap } = ganjilGenap(100);

console.log("Nilai array 1-100:", nilaiArray)
console.log("Nilai ganjil:", ganjil);
console.log("Nilai genap:", genap);


// 2. Nilai min dan max masze

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] < min ? min = arr[i] : max = arr[i];
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
        if (i < arrGanjil.length) {
            totalganjil += arrGanjil[i];
        }

        if (i < arrGenap.length) {
            totalGenap += arrGenap[i];
        }
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