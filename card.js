const csvUrl = "https://raw.githubusercontent.com/Singularity-Squad/InnoFusion/master/data.csv";

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
            //card.appendChild(image);
            plats=row[headers.indexOf('platform')];
            codeds=row[headers.indexOf('code')];

            const content = document.createElement('div');
            content.classList.add('card-content');
            //content.textContent = `
            content.innerHTML = `
                <img src=${imgs}>
                <br>
                <strong>Platform:</strong> ${plats}
                <br>
                <strong>Code:</strong> ${codeds}
            `;
            card.appendChild(content);

            cardContainer.appendChild(card);
        }
    })
    .catch(error => console.error(error));
