import searchView from "./view.js/searchView";
import * as model from "./model.js";
import resultView from "./view.js/resultView";
import paginationView from "./paginationView";

const { async } = require("regenerator-runtime");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const searchController = async function () {
  try {
    const inputValue = searchView.getValue();
    console.log(inputValue);
    await model.getApi(inputValue);
    resultView.render(model.state.search.result);
    console.log("result");
  } catch (error) {}
};
const paginationController = async function (page = model.state.search.page) {
  const data = await model.paginationResult(page);
  resultView.render(data);
  paginationView.render(model.state.search);
};
const init = function () {
  searchView.addHandleEvent(searchController);
};
init();
