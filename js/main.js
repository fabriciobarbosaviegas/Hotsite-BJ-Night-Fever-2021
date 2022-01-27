var sections = document.querySelectorAll("section");

onscroll = function () {

var scrollPosition = document.documentElement.scrollTop;

sections.forEach((section) => {
    if (
    scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
    scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
    var currentId = section.attributes.id.value;
    removeAllActiveClasses();
    addActiveClass(currentId);
    }
});
};

var removeAllActiveClasses = function () {
document.querySelectorAll("a").forEach((el) => {
    el.classList.remove("active");
});
};

var addActiveClass = function (id) {
var selector = `a[href="#${id}"]`;

if(document.querySelector(selector)){
    document.querySelector(selector).classList.add("active");
}

};

var navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach((link) => {
link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;

    window.scroll({
    top: sectionPos,
    behavior: "smooth",
    });
});
});

let collapse = false;

document.querySelector(".navbar-toggler").addEventListener("click", function(){

    hamburguerMenu();

});

function hamburguerMenu(){
    
    if (collapse == false){
        collapse = true;
        document.querySelector("header").classList.add("bg-dark");
        document.querySelector("#navbarNavDropdown").classList.remove("collapse");        
    }

    else{
        collapse = false;
        document.querySelector("header").classList.remove("bg-dark");
        document.querySelector("#navbarNavDropdown").classList.add("collapse");        
    }

}

document.addEventListener("scroll", function(){

    if (window.scrollY > 0) {
        document.querySelector("header").style.position = "fixed"
        document.querySelector("header").classList.add("bg-dark");
    }

    else if(collapse != true){
        document.querySelector("header").style.position = ""
        document.querySelector("header").classList.remove("bg-dark");
    }
    
})

currentCarouselItem = 1;

window.onload = function() {

    document.querySelector("#carrosel-img img").addEventListener('swiped-left', function(e) {
        currentCarouselItem++;

        if(currentCarouselItem > 51){

            currentCarouselItem = 1;

        }

        moveCarouselTo(currentCarouselItem);
    });

    document.querySelector("#carrosel-img img").addEventListener('swiped-right', function(e) {
        currentCarouselItem--;

        if(currentCarouselItem < 1){

            currentCarouselItem = 51;

        }

        moveCarouselTo(currentCarouselItem);
        
        });

}

document.querySelector("#next").addEventListener("click", function(){

    currentCarouselItem++;

    if(currentCarouselItem > 51){

        currentCarouselItem = 1;

    }

    moveCarouselTo(currentCarouselItem);

})

document.querySelector("#return").addEventListener("click", function(){

    currentCarouselItem--;

    if(currentCarouselItem < 1){

        currentCarouselItem = 51;

    }

    moveCarouselTo(currentCarouselItem);

})

function moveCarouselTo(position){

    document.querySelector("#carrosel-img").querySelector("img").src = `../../images/galeria/283/img_`+ currentCarouselItem +`.jpg`;

}

document.querySelector("#sugestao-btn").addEventListener("click", function(){

    window.open('https://forms.gle/acKCU1qAzRwbmf3n6', '_blank');

});

prevent = 0;

document.addEventListener("scroll", function(){

    prevent++;

    if(prevent <= 1){

        let map = L.map('ingressos-mapa').setView([-30.8535808,-51.8070439], 21);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(map);
        
        let pinMap = L.icon({
            iconUrl: 'img/loja-pin.png',
            shadowUrl: '',
        
            iconSize:     [60, 70],
            shadowSize:   [38, 95],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        });
        
        L.marker([-30.8536994,-51.8068635], {icon: pinMap}).addTo(map)
            .bindPopup('Blog do Juares')
            .openPopup();

        map = L.map('map').setView([-30.851776, -51.8286713], 21);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '<a href="https://www.google.com/maps/place/Sal%C3%A3o+de+Festas+Jardim+do+Forte/@-30.8512572,-51.8292054,19z/data=!4m5!3m4!1s0x951a77b7bad6de75:0x889efc973243993c!8m2!3d-30.8517153!4d-51.8286652" target="_blank">Ver no Google Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        pinMap = L.icon({
            iconUrl: 'img/pin-map.png',
            shadowUrl: '',
        
            iconSize:     [38, 70],
            shadowSize:   [38, 95],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        });
        
        L.marker([-30.851776, -51.8286713], {icon: pinMap}).addTo(map)
            .bindPopup('A festa vai ocorrer aqui!.')
            .openPopup();

    }

});

var scroll = window.requestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
        element.classList.add('is-visible');
    } else {
        element.classList.remove('is-visible');
    }
    });

    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}

var rect = el.getBoundingClientRect();
return (
    (rect.top <= 0
    && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
