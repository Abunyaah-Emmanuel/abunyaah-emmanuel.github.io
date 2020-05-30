//toggle menu
function toggleMenu() { 
    document.getElementsByClassName("main-nav")[0].classList.toggle("responsive");  
}

//footer
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

function changeSize() {
    //Call date function
    var dateInfo = getFullDate();
    
    //Initialize elements
    var friday_banner = document.getElementById('friday-banner');
    var main_header = document.getElementById('main-header');
    var today_Date = document.getElementById('todayDate');
    var current_year = document.getElementById('current-year');

    //Initialize device width
    var device_width = window.innerWidth;

    //Friday Banner
    if (dateInfo.weekDayName == 'Friday') {
        friday_banner.style.display = "block";
        if (device_width < 320) {
            main_header.style.paddingTop = '95px';
        } else if (device_width < 768) {
            main_header.style.paddingTop = '70px';
        } else if (device_width < 960) {
            main_header.style.paddingTop = '50px';
        } else {
            main_header.style.paddingTop = '40px';
        }
    }  
    
   }
