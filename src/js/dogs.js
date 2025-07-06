const container = document.getElementById("dog-info");
const DOG_API_KEY = "live_cjA6QkPzKEdsSTqAEMKG9TPsjfun1X6pPCrAROsJQSLEdKwrSxu5AWybfQxok1Pi";

let dogHistory = [];
let currentDogIndex = -1;

async function fetchDog() {
  try {
    const res = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1", {
      headers: {
        "x-api-key": DOG_API_KEY
      }
    });
    const data = await res.json();
    const dog = data[0];
    if (!dog || !dog.breeds || dog.breeds.length === 0) return;

    dogHistory.push(dog);
    currentDogIndex = dogHistory.length - 1;
    displayDog(dog);
  } catch (err) {
    console.error("Fel vid hämtning:", err);
  }
}

function displayDog(dog) {
  const breed = dog.breeds[0];

  container.innerHTML = `
    <div class="animal-inner">
      <img src="${dog.url}" alt="Hund" class="animal-img" />
      <h2>${breed.name}</h2>
      <p>Ras: ${breed.name}</p>
      <p>Temperament: ${breed.temperament}</p>
      <p>Ursprung: ${breed.origin || "Okänd"}</p>
      <button id="fav-btn">Spara som favorit</button>
    </div>
  `;

  document.getElementById("fav-btn").addEventListener("click", () => {
    const saved = saveToFavorites("dogs", dog.url);
    if (!saved) {
      Swal.fire("🐾 Redan sparad!", "Den här hunden finns redan i dina favoriter.", "info");
    }
  });
}

document.getElementById("next-dog").addEventListener("click", fetchDog);

document.getElementById("prev-dog").addEventListener("click", () => {
  if (currentDogIndex > 0) {
    currentDogIndex--;
    displayDog(dogHistory[currentDogIndex]);
  }
});

fetchDog();
