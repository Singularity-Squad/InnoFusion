import { cors } from "cors";
var blury= document.getElementById("btn");
var popup = document.getElementById("popup");
function add()
{
    blury.classList.add("blury");
    popup.classList.add("open");

}
function close_popup()
{
    popup.classList.remove("open");
    blury.classList.remove("blury");
    
}   

function sellsub()
{
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
    }
        .catch(error => console.log();(error));