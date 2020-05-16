//toggle menu
function toggleMenu() { 
    document.getElementsByClassName("main-nav")[0].classList.toggle("responsive");  
}

// footer
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

document.getElementById("lastUpdate").innerHTML = document.lastModified;

var accordion = document.getElementsByClassName('accordion');
for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("accordion-active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}