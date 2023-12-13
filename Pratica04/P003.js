document.addEventListener('DOMContentLoaded', function () {
    function captureInformation(event) {
      const destination = event.target.closest('.roteiros-viagens').querySelector('.roteiro-destino').innerText;
      const course = event.target.closest('.roteiros-viagens').querySelector('.roteiro-incluso li:first-child').innerText;
      const duration = event.target.closest('.roteiros-viagens').querySelector('.roteiro-incluso li:nth-child(2)').innerText;
      const price = event.target.closest('.roteiros-viagens').querySelector('.roteiro-preco').innerText;
  
      const travelPackage = {
        destination: destination,
        course: course,
        duration: duration,
        price: price,
      };
  
      console.log(travelPackage);
    }

    const buyButtons = document.querySelectorAll('.roteiro-comprar');
    buyButtons.forEach(function (button) {
      button.addEventListener('click', captureInformation);
    });
  });
  