// favorites.js

function getFavorites() {
  const catFavorites = JSON.parse(localStorage.getItem("cats")) || [];
  const dogFavorites = JSON.parse(localStorage.getItem("dogs")) || [];
  return [...catFavorites, ...dogFavorites];
}

function saveToFavorites(type, url) {
  const key = type === "cats" ? "cats" : "dogs";
  const current = JSON.parse(localStorage.getItem(key)) || [];

  if (current.includes(url)) {
    Swal.fire("🐾 Redan sparad!", "Den här bilden finns redan i dina favoriter.", "info");
    return false;
  }

  current.push(url);
  localStorage.setItem(key, JSON.stringify(current));

  // ✅ Ny popup första gången man sparar
  Swal.fire("✅ Sparad!", "Bilden har lagts till i dina favoriter.", "success");

  return true;
}

function removeFromFavorites(url) {
  ["cats", "dogs"].forEach(type => {
    const current = JSON.parse(localStorage.getItem(type)) || [];
    const updated = current.filter(item => item !== url);
    localStorage.setItem(type, JSON.stringify(updated));
  });
  showFavorites(); // uppdaterar sidan direkt
}

function showFavorites() {
  const container = document.getElementById("favorites-container");
  if (!container) return;

  const favorites = getFavorites();
  container.innerHTML = favorites.length
    ? favorites.map(url => `
        <div class="favorite-item">
          <img src="${url}" alt="Favorit" />
          <button onclick="removeFromFavorites('${url}')">🗑️ Ta bort bilden</button>
        </div>
      `).join("")
    : "<p>Inga favoriter sparade ännu.</p>";
}

showFavorites(); // körs när sidan laddas
