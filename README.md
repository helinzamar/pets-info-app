# Pets Info App

Detta är en webbapplikation som visar information om olika hund- och kattraser. Användaren kan bläddra mellan djur, läsa fakta som ras, temperament och ursprung samt spara favoriter. Favoriter lagras lokalt i webbläsaren.

## Funktioner

- Visa fakta om hundar och katter
- Möjlighet att bläddra mellan olika raser
- Spara favoriter med lokal lagring
- Ta bort sparade favoriter
- Responsiv design för mobil, tablet och desktop

## Projektstruktur

```
src/
│
├── index.html
├── cats.html
├── dogs.html
├── favorites.html
├── js/
│   ├── cats.js
│   ├── dogs.js
│   └── favorites.js
└── style.css
```

## Teknik som används

- HTML
- CSS (responsiv med media queries)
- JavaScript
- localStorage
- SweetAlert2 (för varningsmeddelanden)

## Instruktioner

1. Klona projektet:
   ```bash
   git clone git@github.com:helinzamar/pets-info-app.git
   ```
2. Öppna valfri HTML-fil (`index.html`, `cats.html` eller `dogs.html`) i webbläsare via t.ex. genom Live Server.

erktyg och bibliotek som använts
SweetAlert2 – används för att visa varningar vid dubblett i favoriter.

localStorage – sparar favoriter lokalt i webbläsaren så de finns kvar vid omladdning.

Fetch API – används för att hämta data från:

TheCatAPI

TheDogAPI

Helin Zamar/
