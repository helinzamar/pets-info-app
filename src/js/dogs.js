import Swal from "sweetalert2";
import { saveToFavorites } from "./favorites.js";

const container = document.getElementById("dog-info");

async function fetchDog() {
  const res = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1");
  const data = await res.json();
  const dog = data[0];
  const breed = dog.breeds[0];

  container.innerHTML = `
    <img src="${dog.url}" alt="Hund" class="animal-img" />
    <h2>${breed.name}</h2>
    <p>Ras: ${breed.name}</p>
    <p>Temperament: ${breed.temperament}</p>
    <p>Ursprung: ${breed.origin}</p>
    <button id="fav-btn">Spara som favorit</button>
  `;

  document.getElementById("fav-btn").addEventListener("click", () => {
    const saved = saveToFavorites("dogs", dog.url);
    if (!saved) {
      Swal.fire("🐶 Redan sparad!", "Den här hunden finns redan i dina favoriter.", "info");
    }
  });
}

fetchDog();
