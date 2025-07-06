function saveToFavorites(type, imageUrl) {
  const key = `favorites-${type}`;
  const current = JSON.parse(localStorage.getItem(key)) || [];

  if (current.includes(imageUrl)) {
    return false;
  }

  current.push(imageUrl);
  localStorage.setItem(key, JSON.stringify(current));
  return true;
}

window.saveToFavorites = saveToFavorites;
