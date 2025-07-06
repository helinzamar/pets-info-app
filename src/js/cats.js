import Swal from "sweetalert2";
import { saveToFavorites } from "./favorites.js";

const container = document.getElementById("cat-info");

async function fetchCat() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1");
  const data = await res.json();
  const cat = data[0];
  const breed = cat.breeds[0];

  container.innerHTML = `
    <img src="${cat.url}" alt="Katt" class="animal-img" />
    <h2>${breed.name}</h2>
    <p>Ras: ${breed.name}</p>
    <p>Temperament: ${breed.temperament}</p>
    <p>Ursprung: ${breed.origin}</p>
    <button id="fav-btn">Spara som favorit</button>
  `;

  document.getElementById("fav-btn").addEventListener("click", () => {
    const saved = saveToFavorites("cats", cat.url);
    if (!saved) {
      Swal.fire("🐾 Redan sparad!", "Den här katten finns redan i dina favoriter.", "info");
    }
  });
}

fetchCat();
