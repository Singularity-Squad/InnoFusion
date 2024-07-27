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
