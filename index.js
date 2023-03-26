document.getElementById("navigation").addEventListener("click", function()
{
    document.getElementById("navigation").classList.toggle("active");
});
if(!document.getElementById("social_media").classList.contains("active"))
{
    document.getElementsByClassName("fa-xmark")[0].style.display = "none";
}
document.getElementById("social_media").addEventListener("click",function()
{
    document.getElementById("social_media").classList.toggle("active");
    if(this.classList.contains("active"))
    {
        document.getElementsByClassName("fa-xmark")[0].style.display = "block";
        document.getElementsByClassName("fa-heart")[0].style.display = "none";
        document.getElementById("social_media_overlay").style.display = "flex";
    }
    else{
        document.getElementsByClassName("fa-xmark")[0].style.display = "none";
        document.getElementsByClassName("fa-heart")[0].style.display = "block";
        document.getElementById("social_media_overlay").style.display = "none";
    }
});