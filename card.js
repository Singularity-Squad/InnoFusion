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

            plats=row[headers.indexOf('platform')];
            codeds=row[headers.indexOf('code')];
            exp=row[headers.indexOf('expd')];
            dsc=row[headers.indexOf('desc')];

            const content = document.createElement('div');
            content.classList.add('card-content');
            content.innerHTML = `
                <div class="coupon">
                  <div class="left">
                    <div>Flipkart</div>
                  </div>
                  <div class="center">
                    <div>
                      <img src="logo12.png" id="resize">
                      <h3>Flat 40% OFF</h3>
                      <small>Valid until May 2023</small>
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

