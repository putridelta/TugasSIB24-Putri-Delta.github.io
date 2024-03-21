let baseUrl = "https://reqres.in/api/";

    let dataProduk= [{
    image : "src/image/product/angkasa.svg",
    nama_produk : "Angkasa dan 56 Hari",
    harga : 10000,
    Deskripsi : "Novel yang mengisahkan tentang perjalanan kisah cinta Nadine Jedvanna."
},
{
    image : "src/image/product/ayah.svg",
    nama_produk : "Ayah",
    harga : 10000,
    Deskripsi : "Novel ini berkisah tentang perjuangan serta perasaan sayang seorang ayah kepada anaknya, tanpa mengenal ikatan darah sekalipun."
},
{
    image : "src/image/product/dear.svg",
    nama_produk : "Dear Hyunnam",
    harga : 12000,
    Deskripsi : "Tujuh cerita tentang kehidupan perempuan yang memilih untuk percaya kepada dirinya sendiri "
},
{
    image : "src/image/product/guruku.svg",
    nama_produk : "Guruku Sahabatku",
    harga : 10000,
    Deskripsi : " novel yang mengangkat cerita berdasarkan kisah nyata yang menjelaskan lika-liku kehidupan anak muda yang bernama Iyas."
},
{
    image : "src/image/product/hujan.svg",
    nama_produk : "Hujan Bulan Juni",
    harga : 15000,
    Deskripsi : "Novel grafis Hujan Bulan Juni karya Sapardi Djoko Damono berkisah tentang sepasang kekasih yang saling mencintai namun terhalang oleh perbedaan budaya dan keyakinan."
},
{
    image : "src/image/product/love.svg",
    nama_produk : "Love From A to Z",
    harga : 12000,
    Deskripsi : "mengikuti tokoh protagonis Zayneb dan Adam, yang melakukan perjalanan ke Doha, Qatar – masing-masing dari AS dan Inggris – dan terus-menerus."
},
{
    image : "src/image/product/umbrerella.svg",
    nama_produk : "Paper Umbrellera",
    harga : 15000,
    Deskripsi : "mengisahkan pertemuan antara dua orang di masa lalu yang dipertemukan kembali di masa kini. "
},
{
    image : "src/image/product/pulang.svg",
    nama_produk : "Pulang Pergi",
    harga : 10000,
    Deskripsi : "Buku ini bercerita tentang Bujang yang kembali harus berpetualang setelah pergi dan pulang."
},

]


    let fetcOptions ={
    "method" : "POST",
    headers: {
 
        "Content-Type": "application/json"
    },
    body : JSON.stringify({dataProduk : dataProduk})
}

let view = document.getElementById('listProduk')
fetch(baseUrl+"productbuku", fetcOptions)
.then((res)=>res.json())
.then((response) => {
    if (response.dataProduk) {
        response.dataProduk.forEach(element => {
                        view.innerHTML += 
                        `<div class="card" >
                        <div class = "card-image">
                        <img src=${element.image} class="card-img" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${element.nama_produk} </h5>
                          <p class="card-title">Rp. ${element.harga}</p>
                          <p class="card-text">${element.Deskripsi}</p>
                          <a href="#" class="btn-buy">Beli Sekarang</a>
                        </div>
                        </div>
                      </div>`
                    })
                    console.log(response)
                
                }
            })

