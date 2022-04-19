const container = document.querySelector(".container");

const { async } = require("regenerator-runtime");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const getApi = async function () {
  const cinema = await fetch("https://www.omdbapi.com/?apikey=1fd18c03&s=moon");
  console.log(cinema);
  const data = await cinema.json();
  console.log(data);
};

getApi();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
