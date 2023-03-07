window.addEventListener("load",
    (event) => {

        //Translations.
        let icon = document.getElementsByClassName('translation-icon')[0];
        icon.addEventListener("click", 
            () => {
                //Traducir al español?
                if(icon.childNodes[0].classList.contains('fa-arrow-right')){
                    icon.title = 'Quitar traducción';
                    document.getElementById('title').innerText = "Capítulo";
                    document.getElementsByClassName('p1')[0].innerText = "Presente";
                    document.getElementsByClassName('p2')[0].innerText = "Unidad 1";
                    document.getElementsByClassName('p3')[0].innerText = "am / is / are";
                    document.getElementsByClassName('p4')[0].innerText = "Unidad 2";
                    document.getElementsByClassName('p5')[0].innerText = "am / is / are (preguntas)";
                    document.getElementsByClassName('p6')[0].innerText = "Unidad 3";
                    document.getElementsByClassName('p7')[0].innerText = "I am doing (presente continuo)";
                    document.getElementsByClassName('p8')[0].innerText = "Unidad 4";
                    document.getElementsByClassName('p9')[0].innerText = "Are you doing? (presente continuo preguntas)";
                    document.getElementsByClassName('p10')[0].innerText = "Unidad 5";
                    document.getElementsByClassName('p11')[0].innerText = "I do / work / like etc. (presente simple)";
                    document.getElementsByClassName('p12')[0].innerText = "Unidad 6";
                    document.getElementsByClassName('p13')[0].innerText = "I don't (presente simple negativo)";
                    document.getElementsByClassName('p14')[0].innerText = "Unidad 7";
                    document.getElementsByClassName('p15')[0].innerText = "Do you? (presente simple preguntas)";
                    document.getElementsByClassName('p16')[0].innerText = "Unidad 8";
                    document.getElementsByClassName('p17')[0].innerText = "I am doing (presente continuo) y I do (presente simple)";
                    document.getElementsByClassName('p18')[0].innerText = "Unidad 9";
                    document.getElementsByClassName('p19')[0].innerText = "I have... y I've got...";
                } else {
                    icon.title = 'En español por favor!';
                    document.getElementById('title').innerText = "Chapter";
                    document.getElementsByClassName('p1')[0].innerText = "Present";
                    document.getElementsByClassName('p2')[0].innerText = "Unit 1";
                    document.getElementsByClassName('p3')[0].innerText = "am / is / are";
                    document.getElementsByClassName('p4')[0].innerText = "Unit 2";
                    document.getElementsByClassName('p5')[0].innerText = "am / is / are (questions)";
                    document.getElementsByClassName('p6')[0].innerText = "Unit 3";
                    document.getElementsByClassName('p7')[0].innerText = "I am doing (present continuo)";
                    document.getElementsByClassName('p8')[0].innerText = "Unit 4";
                    document.getElementsByClassName('p9')[0].innerText = "Are you doing? (present continuous questions)";
                    document.getElementsByClassName('p10')[0].innerText = "Unit 5";
                    document.getElementsByClassName('p11')[0].innerText = "I do / work / like etc. (present simple)";
                    document.getElementsByClassName('p12')[0].innerText = "Unit 6";
                    document.getElementsByClassName('p13')[0].innerText = "I don't (present simple negative)";
                    document.getElementsByClassName('p14')[0].innerText = "Unit 7";
                    document.getElementsByClassName('p15')[0].innerText = "Do you? (present simple questions)";
                    document.getElementsByClassName('p16')[0].innerText = "Unit 8";
                    document.getElementsByClassName('p17')[0].innerText = "I am doing (present continuous) and I do (present simple)";
                    document.getElementsByClassName('p18')[0].innerText = "Unit 9";
                    document.getElementsByClassName('p19')[0].innerText = "I have... and I've got...";
                }
                icon.childNodes[0].classList.toggle('fa-arrow-right');
                icon.childNodes[0].classList.toggle('fa-arrow-left');
            }
        )

        document.getElementsByClassName('home')[0].addEventListener("click", 
            () => { location.href = '../home/index.html' }
        )
        document.getElementsByClassName('button')[0].addEventListener("click", 
            () => { location.href = './unit1/index.html' }
        )

    }
)