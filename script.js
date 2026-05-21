// Quand on défile la page
window.addEventListener('scroll' , function() {
    const header =document.querySelector('header');
    
    if (window.scrollY > 60) {
        header.style.borderBottomColor = '#c8f060';
    } else {
        header.style.borderBottomColor = '#2a2a2a';
    }

}) ;

// Eléments à animer 
const elements =document.querySelectorAll('section, .carte-competence');

// Créer l'observateur
const observateur =new IntersectionObserver(function(entries)) {
    entries.forEach(function(entry) {
        if (entry.isItersecting) {
            entry.target.style.opacity = '1' ;
            entry.target.style.transform ='translateY(0)' ;
        }
    }

)

}