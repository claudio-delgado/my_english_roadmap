window.addEventListener("load",
    (event) => {

        //Translations.
        let icon = document.getElementsByClassName('translation-icon')[0];
        icon.addEventListener("click", 
            () => {
                //Traducir al español?
                if(icon.childNodes[0].classList.contains('fa-arrow-right')){
                    icon.title = 'Quitar traducción';
                    document.getElementsByClassName('p1')[0].innerText = "Mi";
                    document.getElementsByClassName('p2')[0].innerText = "Ruta";
                    document.getElementsByClassName('p3')[0].innerText = "Al inglés!";
                    document.getElementsByClassName('p4')[0].innerText = "Comencemos!";
                } else {
                    icon.title = 'En español por favor!';
                    document.getElementsByClassName('p1')[0].innerText = "My";
                    document.getElementsByClassName('p2')[0].innerText = "English";
                    document.getElementsByClassName('p3')[0].innerText = "Roadmap!";
                    document.getElementsByClassName('p4')[0].innerText = "Let's start!";
                }
                icon.childNodes[0].classList.toggle('fa-arrow-right');
                icon.childNodes[0].classList.toggle('fa-arrow-left');
            }
        )

        let button = document.getElementsByClassName('button')[0];
        button.addEventListener("click", 
            () => { location.href = './home/index.html' }
        )

    }
)