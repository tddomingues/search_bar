const inputText = document.querySelector("#inputText");
const searchFilter = document.querySelector("#searchFilter");

//busca e imprimi na tela os filmes do Json
const getMovies = async () => {
  const jsonData = await fetch("./db/film.json");
  const response = await jsonData.json();
  return response.forEach((movie) => {
    searchFilter.innerHTML += `<li> 
        <h2>${movie.Title} </h2>
        <div class="img"><img src=${movie.Images[1]} alt="" width="200px"/></div>
        <p>${movie.Plot}</p>   
    </li>`;
  });
};
getMovies();

//busca o filme desejado
const search = () => {
  const valueInput = inputText.value.toLowerCase();
  const list = document.querySelectorAll("#searchFilter li");

  list.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(valueInput)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
inputText.addEventListener("input", search);
