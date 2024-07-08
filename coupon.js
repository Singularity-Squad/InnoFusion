 
const searchInput = document.getElementById('search-input');  
const searchButton = document.getElementById('search-button');  
const couponCodeList = document.getElementById('coupon-code-list');  
const sellForm = document.getElementById('sell-form');  
const sellButton = document.getElementById('sell-button');  
  
searchButton.addEventListener('click',{})
  
sellButton.addEventListener('click', async ()=> {  
    const code = document.getElementById('code').value;  
    const value = document.getElementById('value').value;  
    
})  
  
function renderCouponCodeList(couponCodes) {  
    couponCodeList.innerHTML = '';  
    couponCodes.forEach((couponCode) => {  
        const couponCodeHTML = `  
            <li>  
                <h2>${couponCode.code}</h2>  
                <p>Value: ${couponCode.value}</p>  
                <p>Expiration Date: ${couponCode.expirationDate}</p>  
                <p>Product: ${couponCode.product}</p>  
                <button class="buy-button">Buy</button>  
            </li>  
        `;  
        couponCodeList.innerHTML += couponCodeHTML;  
    });  
}  
