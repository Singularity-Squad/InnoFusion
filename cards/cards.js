const csvFile = "https://raw.githubusercontent.com/Singularity-Squad/InnoFusion/site/cards/data.csv"; // Replace with your CSV file path

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
      card.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <img src=${imgs}></img>
      `;
      cardContainer.appendChild(card);
    }
  })
  .catch(error => console.error('Error:', error));
