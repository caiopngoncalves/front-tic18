function insertTravelPackage() {
    const destination = document.getElementById('destination').value;
    const course = document.getElementById('course').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const imageURL = document.getElementById('imageURL').value;
  
    const newTravelPackage = document.createElement('div');
    newTravelPackage.className = 'roteiros-viagens';
  
    newTravelPackage.innerHTML = `
      <img src="${imageURL}" alt="${destination}">
      <div class="roteiro-destino">${destination}</div>
      <ul class="roteiro-incluso">
        <li>${course}</li>
        <li>${duration}</li>
        <li>Café da Manhã</li>
      </ul>
      <div class="roteiro-preco">${price}</div>
      <button class="roteiro-comprar">Comprar</button>
    `;
  
    const containerDestinos = document.querySelector('.container-destinos');
    containerDestinos.appendChild(newTravelPackage);
  }

document.addEventListener('DOMContentLoaded', function () {
    const insertButton = document.querySelector('#travelForm button');
    insertButton.addEventListener('click', insertTravelPackage);
  
  });
