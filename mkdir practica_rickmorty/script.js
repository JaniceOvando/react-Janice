const grid = document.getElementById("grid");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.results.forEach((character) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
        <p class="status ${character.status.toLowerCase()}">${character.status}</p>
        <p class="species">${character.species}</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch((error) => {
    grid.innerHTML = `<p style="color:white;">Error: ${error.message}</p>`;
  });