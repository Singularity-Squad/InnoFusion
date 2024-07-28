var blury= document.getElementById("btn");
var popup = document.getElementById("popup");
var code=document.getElementById("ok");
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
