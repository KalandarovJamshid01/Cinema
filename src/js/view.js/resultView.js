import searchView from "./searchView";
class ResultView {
  #parentElement = document.querySelector(".container");
  #data;
  #clearHtml() {
    this.#parentElement.innerHTML = "";
  }

  render(data) {
    this.#data = data;
    this.#clearHtml();
    this.#renderHtml();
    console.log(data);
  }
  #renderHtml() {
    const item = this.#data;
    console.log(item);
    for (let i = 0; i < item.length; i++) {
      const html = ` <div class="cart">
      <img class="image" src="${item[i].img}" alt="" />
      <div class="info">
        <p class="title">Name:</p>
        <p class="title">${item[i].name}</p>
        <p class="title">Year:</p>
        <p class="title year">${item[i].year}</p>
      </div>
      <a href="#" class="view">Start View</a>`;
      this.#parentElement.insertAdjacentHTML("beforeEnd", html);
    }
  }
}
export default new ResultView();
