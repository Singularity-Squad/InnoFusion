const couponList = document.getElementById('coupon-list');
const checkoutForm = document.getElementById('checkout-form');

// Function to display coupons
function fetchCoupons() {
    // Fetch coupons from the server
    const coupons = ['SAVE10', 'FREESHIP', 'HALFOFF'];

    // Display coupons in the list
    coupons.forEach(coupon => {
        const li = document.createElement('li');
        li.textContent = coupon;
        couponList.appendChild(li);
    });
}

// Apply coupon when form is submitted
checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const couponCode = document.getElementById('coupon-code').value;
    // Apply coupon logic here
    alert(`Coupon code ${couponCode} applied successfully!`);
});

// Fetch coupons when the page loads
fetchCoupons();
