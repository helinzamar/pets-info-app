export function saveToFavorites(type, imageUrl) {
  const key = `favorites-${type}`;
  const current = JSON.parse(localStorage.getItem(key)) || [];

  if (current.includes(imageUrl)) {
    return false; // Redan sparad
  }

  current.push(imageUrl);
  localStorage.setItem(key, JSON.stringify(current));
  return true;
}
