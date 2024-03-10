

console.log("Belajar Fundamental JavaScript");

console.log("Belajar Fundamental JavaScript")
console.log("Belajar Fundamental JavaScript"); console.log("Belajar Fundamental JavaScript 2");


 //ini komentar satu baris

  /*kode ini digunakan untuk 
  komentar yang lebih dari satu baris*/
  
  
  var nilai = 10;
  let nilai2 = 20;
  const nilai3 =30;

  console.log("Nilai :", nilai);
  console.log("Nilai :", nilai2);
  console.log("Nilai :", nilai3);

  let bulat = 10;
  let desimal = 10.5;
  let string = "contoh fundamental";
  let bigInt = 1233445345n
  let boolean = true;

  let x = 10 ;
  let y = 5;


  console.log(x & y);
  console.log(x | y);
  console.log(x ^ y);
  console.log(~x);




function showLoginText(){
    var loginForm = document.getElementById("title");
    loginForm.textContent = "Belajar Fundamental JavaScript"
}
showLoginText();


function pertambahan(){
    let a = parseInt(document.getElementById("angka_tambah1").value);
    let b = parseInt(document.getElementById("angka_tambah2").value);
    let hasil_tambah = a+b;

    document.getElementById("hasil-tambah").textContent="Hasil tambah = " + hasil_tambah;
}
function pengurangan(){
    let a = parseInt(document.getElementById("angka_kurang1").value);
    let b = parseInt(document.getElementById("angka_kurang2").value);
    let hasil_kurang = a-b;

    document.getElementById("hasil-kurang").textContent="Hasil tambah = " + hasil_kurang;
}
function perkalian(){
    let a = parseInt(document.getElementById("angka_kali1").value);
    let b = parseInt(document.getElementById("angka_kali2").value);
    let hasil_kali = a*b;

    document.getElementById("hasil-kali").textContent="Hasil tambah = " + hasil_kali;
}
function pembagian(){
    let a = parseInt(document.getElementById("angka_bagi1").value);
    let b = parseInt(document.getElementById("angka_bagi2").value);
    let hasil_bagi = a/b;

    document.getElementById("hasil-bagi").textContent="Hasil tambah = " + hasil_bagi;
}

function fungsiAlert(){
    alert("Ini adalah contoh untuk alert")
}


function fungsiConfirm(){
    let string= confirm("Apakah kamu dapat memahami fungsi promp ini?")
    string ? alert('Jawaban Anda paham') : alert ('Jawaban Anda tidak paham')
}


function fungsiPrompt(){
    let string= prompt("Apakah kamu dapat memahami fungsi promp ini?")
    alert("Jawaban Anda " + string)
}
