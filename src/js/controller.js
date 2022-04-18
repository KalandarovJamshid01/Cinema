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
  let html = `<div><img src="${body.Search[0].Poster}" alt=""></div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", html);
};

api();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
