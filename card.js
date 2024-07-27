const csvUrl = "data.csv";

fetch(csvUrl)
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const headers = lines[0].split(',');
        const cardContainer = document.getElementById('card-container');

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(',');
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            imgs = row[headers.indexOf('image')];
            card.appendChild(image);

            const content = document.createElement('div');
            content.classList.add('card-content');
            //content.textContent = `
            content.innerHTML = `
                <img src="${imgs}>
                <strong>Platform:</strong> ${row[headers.indexOf('platform')]}
                <br>
                <strong>Code:</strong> ${row[headers.indexOf('code')]}
                
            `;
            card.appendChild(content);

            cardContainer.appendChild(card);
        }
    })
    .catch(error => console.error(error));
