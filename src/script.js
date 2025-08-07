import axios from 'axios';
import Swal from 'sweetalert2';

const catBtn = document.getElementById('catBtn');
const dogBtn = document.getElementById('dogBtn');

catBtn.addEventListener('click', async () => {
  try {
    const res = await axios.get('https://catfact.ninja/fact');
    Swal.fire({
      title: 'Kattfakta 🐱',
      text: res.data.fact,
      icon: 'info',
    });
  } catch (error) {
    Swal.fire('Fel', 'Kunde inte hämta kattfakta', 'error');
  }
});

dogBtn.addEventListener('click', async () => {
  try {
    const res = await axios.get('https://dogapi.dog/api/v2/facts');
    const fact = res.data.data[0]?.attributes?.body;
    Swal.fire({
      title: 'Hundfakta 🐶',
      text: fact || 'Inget fakta hittades',
      icon: 'info',
    });
  } catch (error) {
    Swal.fire('Fel', 'Kunde inte hämta hundfakta', 'error');
  }
});
