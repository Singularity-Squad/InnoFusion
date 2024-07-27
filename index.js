var blur= document.getElementById("btn");
var blur1= document.getElementById("btn1");
var blur2= document.getElementById("btn2");
var popup = document.getElementById("popup");

function add()
{
    blur.classList.add("blury");
    blur1.classList.add("blury");
    blur2.classList.add("blury");
    popup.classList.add("open");
}
function close_popup()
{
    popup.classList.remove("open");
    blur.classList.remove("blury");
    blur1.classList.remove("blury");
    blur2.classList.remove("blury");
}   
document.querySelector("#buy").addEventListener("click",()=> {
    window.scrollTo(0,document.scrollHeight);
})

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
      card.innerHTML = `
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
      card.innerHTML = `
        <h3><b><big>Available Coupons</big></b></h3>
        <div class="container" id="btn">
              <div class="coupon">
                <div class="left">
                  <div>Flipkart</div>
                </div>
                <div class="center">
                  <div>
                   <img src=${imgs} id="resize">
                    <h3>50% OFF</h3>
                    <small>Valid until May 2023</small>
                  </div>
                </div>
                <div class="right">
                  <a id="code" onclick="add()">Get Code</a>
                </div>
              </div>  
                <div class="coupon">
                  <div class="left">
                    <div>Flipkart</div>
                  </div>
                  <div class="center">
                    <div>
                      <h2>50% off</h2>
                      <h3>Coupon</h3>
                      <small>Valid until May 2023</small>
                    </div>
                  </div>
                  <div class="right">
                    <a id="code" onclick="add()">Get Code</a>
                  </div>
                </div>
                <div class="coupon">
                  <div class="left">
                    <div>Flipkart</div>
                  </div>
                  <div class="center">
                    <div>
                      <h2>50% off</h2>
                      <h3>Coupon</h3>
                      <small>Valid until May 2023</small>
                    </div>
                  </div>
                  <div class="right">
                    <a id="code" onclick="add()">Get Code</a>
                  </div>
                </div>
          </div>
               <div class="container2" id="btn1" >
                <div class="coupon">
                  <div class="left">
                    <div>Flipkart</div>
                  </div>
                  <div class="center">
                    <div>
                      <h2>50% off</h2>
                      <h3>Coupon</h3>
                      <small>Valid until May 2023</small>
                    </div>
                  </div>
                  <div class="right">
                    <a id="code" onclick="add()">Get Code</a>
                  </div>
                </div>
                <div class="coupon">
                  <div class="left">
                    <div>Flipkart</div>
                  </div>
                  <div class="center">
                    <div>
                      <h2>50% off</h2>
                      <h3>Coupon</h3>
                      <small>Valid until May 2023</small>
                    </div>
                  </div>
                  <div class="right">
                    <a id="code" onclick="add()">Get Code</a>
                  </div>
                </div>
                <div class="coupon">
                  <div class="left">
                    <div>Flipkart</div>
                  </div>
                  <div class="center">
                    <div>
                      <h2>50% off</h2>
                      <h3>Coupon</h3>
                      <small>Valid until May 2023</small>
                    </div>
                  </div>
                  <div class="right">
                    <a id="code" onclick="add()">Get Code</a>
                  </div>
                </div>
              </div>
                 <div class="container3" id="btn2">
                  <div class="coupon">
                      <div class="left">
                        <div>Flipkart</div>
                      </div>
                      <div class="center">
                        <div>
                          <h2>50% off</h2>
                          <h3>Coupon</h3>
                          <small>Valid until May 2023</small>
                        </div>
                      </div>
                      <div class="right">
                        <a id="code" onclick="add()">Get Code</a>
                      </div>
                    </div>
                    <div class="coupon">
                      <div class="left">
                        <div>Flipkart</div>
                      </div>
                      <div class="center">
                        <div>
                          <h2>50% off</h2>
                          <h3>Coupon</h3>
                          <small>Valid until May 2023</small>
                        </div>
                      </div>
                      <div class="right">
                        <a id="code" onclick="add()">Get Code</a>
                      </div>
                    </div>
                    <div class="coupon">
                      <div class="left">
                        <div>Flipkart</div>
                      </div>
                      <div class="center">
                        <div>
                          <h2>50% off</h2>
                          <h3>Coupon</h3>
                          <small>Valid until May 2023</small>
                        </div>
                      </div>
                      <div class="right">
                        <a id="code" onclick="add()">Get Code</a>
                      </div>
                    </div>
                  </div>
      `;
      cardContainer.appendChild(card);

    }
  })

  .catch(error => console.error('Error:', error));

      `;
      cardContainer.appendChild(card);
    }
  })

  .catch(error => console.error('Error:', error));
