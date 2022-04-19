class SearchView {
  #parentElement = document.querySelector(".form");
  #data;
  getValue() {
    const val = document.querySelector(".start").value;
    return val;
  }
  addHandleEvent(handle) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("hello");
      handle();
    });
  }
}
export default new SearchView();
