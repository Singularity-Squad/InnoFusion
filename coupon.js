 
const searchInput = document.getElementById('search-input');  
const searchButton = document.getElementById('search-button');  
const couponCodeList = document.getElementById('coupon-code-list');  
const sellForm = document.getElementById('sell-form');  
const sellButton = document.getElementById('sell-button');  
  
searchButton.addEventListener('click', async () => {  
    const searchTerm = searchInput.value.trim();  
    const response = await fetch(`/api/couponcodes?search=${searchTerm}`);  
    const couponCodes = await response.json();  
    renderCouponCodeList(couponCodes);  
});  
  
sellButton.addEventListener('click', async ()=> {  
    const code = document.getElementById('code').value;  
    const value = document.getElementById('value').value;  
    const expirationDate = document.getElementById('expiration-date').value;  
    const product = document.getElementById('product').value;  
    const response = await fetch('/api/couponcodes', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ code, value, expirationDate, product })  
    });  
    const newCouponCode = await response.json();  
    renderCouponCodeList([newCouponCode]);  
});  
  
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
