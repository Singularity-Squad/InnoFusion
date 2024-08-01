const csvUrl = "https://raw.githubusercontent.com/Singularity-Squad/InnoFusion/xpert0-fix/data.csv";
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

            plats=row[headers.indexOf('platform')];
            codeds=row[headers.indexOf('code')];
            exp=row[headers.indexOf('expd')];
            dsc=row[headers.indexOf('desc')];

            const content = document.createElement('div');
            content.classList.add('container');
            content.innerHTML =`
              <div class="card-content">
                <div class="left">
                  <div>${plats}</div>
                </div>
                <div class="center">
                  <div>
                    <h3>${dsc}</h3>
                    <small>Valid until ${exp}</small>
                  </div>
                </div>
                <div class="right">
                  <a id="code" onclick="add()">Get Code</a>
                </div>
              </div>
            `;
            card.appendChild(content);

            cardContainer.appendChild(card);
        }
    })
    .catch(error => console.error(error));
