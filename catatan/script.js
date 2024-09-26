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

//Topic Empat Latihan Request Pakai Callback Function
// callback version
// const requestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Error: Connection Timeout");
//     } else {
//       success(`Success: ${url} (${delay}ms)`);
//     }
//   }, delay);
// };

// requestCallback(
//   "movie.com",
//   function (response) {
//     console.log("It worked", response);
//     requestCallback(
//       "movie.com/actors",
//       function (response) {
//         console.log("It worked", response);
//         requestCallback(
//           "movie.com/actors/details",
//           function (response) {
//             console.log("It worked", response);
//             requestCallback(
//               "movie.com/actors/details/movies",
//               function (response) {
//                 console.log("It worked", response);
//                 requestCallback(
//                   "movie.com/actors/details/movies/reviews",
//                   function (response) {
//                     console.log("It worked", response);
//                   },
//                   function (error) {
//                     console.log("Error", error);
//                   }
//                 );
//               },
//               function (error) {
//                 console.log("Error", error);
//               }
//             );
//           },
//           function (error) {
//             console.log("Error", error);
//           }
//         );
//       },
//       function (error) {
//         console.log("Error", error);
//       }
//     );
//   },
//   function (error) {
//     console.log("Error", error);
//   }
// );

//Topic Lima Latihan Request Pakai Promise
// // Promise version
// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 2000) {
//         reject("Error: Connection Timeout");
//       } else {
//         resolve(`Success: ${url} (${delay}ms)`);
//       }
//     }, delay);
//   });
// };

//nampilin secara console
// let request = requestPromise("google.com");
// console.log(request);
//nampilin secara broswer
// requestPromise("movie.com")
//   .then((response) => {
//     console.log("success", response);
//     requestPromise("movie.com")
//       .then((response) => {
//         console.log("success", response);
//         requestPromise("movie.com")
//           .then((response) => {
//             console.log("success", response);
//             requestPromise("movie.com")
//               .then((response) => {
//                 console.log("success", response);
//                 requestPromise("movie.com")
//                   .then((response) => {
//                     console.log("success", response);
//                   })
//                   .catch((error) => {
//                     console.log("error", error);
//                   });
//               })
//               .catch((error) => {
//                 console.log("error", error);
//               });
//           })
//           .catch((error) => {
//             console.log("error", error);
//           });
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

//Topic Cara Benar Menggunakan Fungsi Promise
// Promise version
// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 3000) {
//         reject("Error: Connection Timeout");
//       } else {
//         resolve(`Success: ${url} (${delay}ms)`);
//       }
//     }, delay);
//   });
// };

// requestPromise("movie.com")
//   .then((result) => {
//     console.log("page 1");
//     console.log(result);
//     return requestPromise("movie.com");
//   })
//   .then(() => {
//     console.log("page 2");
//     return requestPromise("movie.com");
//   })
//   .then(() => {
//     console.log("page 3");
//     return requestPromise("movie.com");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Topic Tujuh Cara Membuat Promise
// const contohPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve(() => {
//       "berhasil";
//     });
//     reject(() => {
//       "gagal";
//     });
//   });
// };

// const req = contohPromise();
// console.log(req);

//Topic Delapan Fungsi Async Keyword
const hello = async () => {
  throw "Maaf gak kenal";
  //   return "Hello World";
};

// hello()
//   .then((res) => {
//     console.log("response", res);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const req = hello()
// console.log(req)
