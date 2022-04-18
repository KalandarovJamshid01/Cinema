const { async } = require("regenerator-runtime");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const api = async function () {
  const cinema = await fetch("https://www.omdbapi.com/?apikey=1fd18c03&s=moon");
  console.log(cinema);
  const body = await cinema.json();
  console.log(body);
  // let html = `<div><img src="https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg" alt=""></div>`;
  // document.querySelector("body").insertAdjacentHTML("afterbegin", html);
};

api();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
