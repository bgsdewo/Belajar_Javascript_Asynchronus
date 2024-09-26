//Topic Satu Mengenal Call Stack Function
// const perkalian = (x, y) => x * y;
// const akar = (x) => perkalian(x, x);

// const pythagoras = (a, b, c) => {
//   return akar(a) + akar(b) == akar(c);
// };

// console.log(pythagoras(3, 4, 5));

//Topic Dua Faktanya Javascript Itu Single Thread
// console.log("Bakal muncul pertama");
// setTimeout(() => {
//   console.log(
//     "ini udah masuk memory tapi baru dijalankan setelah 3 detik kedepan"
//   );
// }, 3000);
// console.log("Bakal muncul kedua");

//Topic Tiga Callback Hell Di Javascript Bikin Serem Dibacanya
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "green";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "purple";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//             // Tambahkan lebih banyak warna atau loop lagi jika ingin
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
