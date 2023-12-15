  
  const fetchData = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error('Erro na requisição:', error));
  };
  
  const noticiasSection = document.getElementById('noticiasSection');
  const noticiasQuadro = noticiasSection.querySelector('#noticias');

  const servicoSection = document.getElementById('servicosSection');
  const servicoQuadro = servicoSection.querySelector('#servicos');
  

  fetchData('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((data) => {
        const li = document.createElement('li');
        const piada = "Ditado do dia: " + data.joke
        li.textContent = piada;
        noticiasQuadro.appendChild(li);
    });
  
    fetchData('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((data) => {
        const li = document.createElement('li');
        const piada = "Está na boca do povo: " + data.joke
        li.textContent = piada;
        noticiasQuadro.appendChild(li);
    });
    fetchData('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((data) => {
        const li = document.createElement('li');
        const piada = "A piada do momento: " + data.joke
        li.textContent = piada;
        noticiasQuadro.appendChild(li);
    });

    fetchData('https://restcountries.com/v3.1/name/brazil')
    .then((data) => {
        console.log(data[0].flags.alt)
        const p = document.createElement('p');
        const texto =  "Aulas de inglês, aprenda: " + data[0].flags.alt
        p.textContent = texto;
        servicoQuadro.appendChild(p);
    });
