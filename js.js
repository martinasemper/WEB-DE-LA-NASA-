 let key = "ODpC2hzlukHNuJrBnBF022adtR8fP1F9jX81e0qO";


    document.querySelector('#btnDia').onclick = () => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(res => res.json())
        .then(data => {
          document.querySelector('#imgDia').src = data.url;
          document.querySelector('#tituloDia').textContent = data.title;
        });
    };


    document.querySelector('#btnFecha').onclick = () => {
      const fecha = document.querySelector('#fecha').value;
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fecha}`)
        .then(res => res.json())
        .then(data => {
          document.querySelector('#imgFecha').src = data.url;
          document.querySelector('#tituloFecha').textContent = data.title;
        });
    };

  
    document.querySelector('#btnCantidad').onclick = () => {
      const cantidad = document.querySelector('#cantidad').value;
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${cantidad}`)
        .then(res => res.json())
        .then(data => {
          const contenedor = document.querySelector('#contenedor');
          contenedor.innerHTML = "";
          data.forEach(foto => {
            contenedor.innerHTML += `<img src="${foto.url}" alt="${foto.title}" width="250"> `;
          });
        });
    };




