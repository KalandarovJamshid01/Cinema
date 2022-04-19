export const state = {
  item: {},
  search: {
    result: [],
    // perPAge: PaginationNum,
    page: 1,
  },
};

export const getApi = async function (inputValue) {
  const cinema = await fetch(
    `https://www.omdbapi.com/?apikey=1fd18c03&s=${inputValue}`
  );
  console.log(cinema);
  const data = await cinema.json();
  state.search.result = data.Search.map(function (val) {
    return {
      year: val.Year,
      img: val.Poster,
      name: val.Title,
    };
  });
  console.log("model");
};
