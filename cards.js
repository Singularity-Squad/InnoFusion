//const csvFile = "https://raw.githubusercontent.com/Singularity-Squad/InnoFusion/site/cards/data.csv"; //for localhost
const csvFile = "data.csv"; //for server

fetch(csvFile)
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    const headers = rows[0].split(',');
    const titleIndex = headers.indexOf('title');
    const descriptionIndex = headers.indexOf('description');
    const imgIndex = headers.indexOf('image');
    const cardContainer = document.getElementById('card-container');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      const title = row[titleIndex];
      const description = row[descriptionIndex];
      const imgs = row[imgIndex];
      const card = document.createElement('div');
      card.classList.add('card');
      /*card.innerHTML = `
        <!-- <h3>${title}</h3> -->
        <h3>${description}</h3>
        <img src=${imgs}></img>
      `;*/
      card.innerHTML = "cards/cards.html";
      cardContainer.appendChild(card);

    }
  })

  .catch(error => console.error('Error:', error));
