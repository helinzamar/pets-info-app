const container = document.getElementById("cat-info");
const nextBtn = document.getElementById("next-cat");
const prevBtn = document.getElementById("prev-cat");

const CAT_API_KEY = "live_hiJIGMfkH5E5xtV00HWnwZU8XJpcs7qqAY1Ue5pHD5OWDfb0TXJ5vteVoJORf4IW";

let catHistory = [];
let currentIndex = -1;

async function fetchCat() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1", {
      headers: {
        "x-api-key": CAT_API_KEY
      }
    });
    const data = await res.json();
    const cat = data[0];
    catHistory.push(cat);
    currentIndex++;
    showCat(cat);
  } catch (err) {
    console.error("Kunde inte hämta kattdata:", err);
  }
}

function showCat(cat) {
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

  prevBtn.disabled = currentIndex <= 0;
}

// === Knappar ===
nextBtn.addEventListener("click", fetchCat);

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showCat(catHistory[currentIndex]);
  }
});

// Visa första katten
fetchCat();
