var blury= document.getElementById("btn");
// var blur1= document.getElementById("btn1");
// var blur2= document.getElementById("btn2");
var popup = document.getElementById("popup");
function add()
{
    blury.classList.add("blury");
    // blur1.classList.add("blury");
    // blur2.classList.add("blury");
    popup.classList.add("open");

}
function close_popup()
{
    popup.classList.remove("open");
    blury.classList.remove("blury");
    // blur1.classList.remove("blury");
    // blur2.classList.remove("blury");
    
}   

const form = document.getElementById('sell-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const platform = document.getElementById('platform').value;
            const code = document.getElementById('code').value;
            const price = document.getElementById('price').value;

            // Create a CSV string
            const csvData = `${code},${price},${platform},${expd},${email}\n`;

            // Append to local storage (not ideal for production)
            const existingData = localStorage.getItem("data.csv") || '';
            localStorage.setItem("data.csv", existingData + csvData);

            // Display a success message or clear form fields
            alert('Data saved successfully!');
            form.reset();
        });