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
                  <link rel="stylesheet" href="index.css">
                  <style>
                    .left {
                      width: 80px;
                      border-right: 2px dashed rgba(0, 0, 0, 0.15);
                    }
 
                    .left div {
                      transform: rotate(-90deg);
                      white-space: nowrap;
                      font-weight: bold;
                    }
 
 .center {
   flex-grow: 1;
   text-align: center;
 }
 
 .right {
   width: 140px;
   background-image: radial-gradient(circle at 100% 50%, transparent 25px, #fff 26px);
   
 }
 
 .right a{
   font-family: 'Libre Barcode 128 Text', cursive;
   font-size: 1rem;
   padding-right:1.5rem;
   cursor: pointer;
 }

 .center h3 {
   font-size: 2.15rem;
 }
 
 .center small {
   font-size: 0.625rem;
   font-weight: 600;
   letter-spacing: 2px;
 }
                  </style>
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
                  </div>`
            `;
            card.appendChild(content);

            cardContainer.appendChild(card);
        }
    })
    .catch(error => console.error(error));