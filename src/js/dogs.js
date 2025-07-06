const container = document.getElementById("dog-info");

const DOG_API_KEY = "live_cjA6QkPzKEdsSTqAEMKG9TPsjfun1X6pPCrAROsJQSLEdKwrSxu5AWybfQxok1Pi";

async function fetchDog() {
  try {
    const res = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1", {
      headers: {
        "x-api-key": DOG_API_KEY
      }
    });

    const data = await res.json();
    const dog = data[0];

    if (!dog || !dog.breeds || dog.breeds.length === 0) {
      container.innerHTML = "<p>🐶 Ingen hundinformation kunde hämtas.</p>";
      return;
    }

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
        Swal.fire("🐾 Redan sparad!", "Den här hunden finns redan i dina favoriter.", "info");
      }
    });
  } catch (err) {
    container.innerHTML = "<p>🐶 Något gick fel vid hämtning.</p>";
    console.error("Fel vid hund-API:", err);
  }
}

fetchDog();
