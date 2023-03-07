window.addEventListener("load",
    (event) => {

        //Translations.
        let icon = document.getElementsByClassName('translation-icon')[0];
        icon.addEventListener("click", 
            () => {
                //Traducir al español?
                if(icon.childNodes[0].classList.contains('fa-arrow-right')){
                    icon.title = 'Quitar traducción';
                    document.getElementsByClassName('p1')[0].innerText = "Contenidos";
                    document.getElementsByClassName('p2')[0].innerText = "Presente";
                    document.getElementsByClassName('p3')[0].innerText = "Unidades 1 a 9";
                    document.getElementsByClassName('p4')[0].innerText = "Pasado";
                    document.getElementsByClassName('p5')[0].innerText = "Unidades 10 a 14";
                    document.getElementsByClassName('p6')[0].innerText = "Presente Perfecto";
                    document.getElementsByClassName('p7')[0].innerText = "Unidades 15 a 20";
                    document.getElementsByClassName('p8')[0].innerText = "Voz pasiva";
                    document.getElementsByClassName('p9')[0].innerText = "Unidades 21 a 22";
                    document.getElementsByClassName('p10')[0].innerText = "Formas verbales";
                    document.getElementsByClassName('p11')[0].innerText = "Unidades 23 a 24";
                    document.getElementsByClassName('p12')[0].innerText = "Futuro";
                    document.getElementsByClassName('p13')[0].innerText = "Unidades 25 a 28";
                    document.getElementsByClassName('p14')[0].innerText = "Verbos modales & Imperativo";
                    document.getElementsByClassName('p15')[0].innerText = "Unidades 29 a 36";
                    document.getElementsByClassName('p16')[0].innerText = "There & it";
                    document.getElementsByClassName('p17')[0].innerText = "Unidades 37 a 39";
                    document.getElementsByClassName('p18')[0].innerText = "Verbos auxiliares";
                    document.getElementsByClassName('p19')[0].innerText = "Unidades 40 a 43";
                    document.getElementsByClassName('p20')[0].innerText = "Preguntas";
                    document.getElementsByClassName('p21')[0].innerText = "Unidades 44 a 49";
                    document.getElementsByClassName('p22')[0].innerText = "Reportes";
                    document.getElementsByClassName('p23')[0].innerText = "Unidades 50";
                    document.getElementsByClassName('p24')[0].innerText = "-ing & to...";
                    document.getElementsByClassName('p25')[0].innerText = "Unidades 51 a 54";
                    document.getElementsByClassName('p26')[0].innerText = "Go, get, do, make & have";
                    document.getElementsByClassName('p27')[0].innerText = "Unidades 55 a 58";
                    document.getElementsByClassName('p28')[0].innerText = "Pronombres & posesivos";
                    document.getElementsByClassName('p29')[0].innerText = "Unidades 59 a 64";
                    document.getElementsByClassName('p30')[0].innerText = "A & the";
                    document.getElementsByClassName('p31')[0].innerText = "Unidades 65 a 73";
                    document.getElementsByClassName('p32')[0].innerText = "Determinadores & pronombres";
                    document.getElementsByClassName('p33')[0].innerText = "Unidades 74 a 84";
                    document.getElementsByClassName('p34')[0].innerText = "Adjetivos & adverbios";
                    document.getElementsByClassName('p35')[0].innerText = "Unidades 85 a 92";
                    document.getElementsByClassName('p36')[0].innerText = "Orden de palabras";
                    document.getElementsByClassName('p37')[0].innerText = "Unidades 93 a 96";
                    document.getElementsByClassName('p38')[0].innerText = "Conjunciones & cláusulas";
                    document.getElementsByClassName('p39')[0].innerText = "Unidades 97 a 102";
                    document.getElementsByClassName('p40')[0].innerText = "Preposiciones";
                    document.getElementsByClassName('p41')[0].innerText = "Unidades 103 a 113";
                    document.getElementsByClassName('p42')[0].innerText = "Frases verbales";
                    document.getElementsByClassName('p43')[0].innerText = "Unidades 114 a 115";
                    document.getElementsByClassName('p44')[0].innerText = "Apéndice 1";
                    document.getElementsByClassName('p45')[0].innerText = "Voz activa & pasiva";
                    document.getElementsByClassName('p46')[0].innerText = "Apéndice 2";
                    document.getElementsByClassName('p47')[0].innerText = "Lista de verbos irregulares";
                    document.getElementsByClassName('p48')[0].innerText = "Apéndice 3";
                    document.getElementsByClassName('p49')[0].innerText = "Verbos irregulares en grupos";
                    document.getElementsByClassName('p50')[0].innerText = "Apéndice 4";
                    document.getElementsByClassName('p51')[0].innerText = "Formas abreviadas (he's / I'd / don't)";
                    document.getElementsByClassName('p52')[0].innerText = "Apéndice 5";
                    document.getElementsByClassName('p53')[0].innerText = "Deletreo";
                    document.getElementsByClassName('p54')[0].innerText = "Apéndice 6";
                    document.getElementsByClassName('p55')[0].innerText = "Frases verbales (take off / give up)";
                    document.getElementsByClassName('p56')[0].innerText = "Apéndice 7";
                    document.getElementsByClassName('p57')[0].innerText = "Frases verbales + objeto";
                } else {
                    icon.title = 'En español por favor!';
                    document.getElementsByClassName('p1')[0].innerText = "Contents";
                    document.getElementsByClassName('p2')[0].innerText = "Present";
                    document.getElementsByClassName('p3')[0].innerText = "Units 1 to 9";
                    document.getElementsByClassName('p4')[0].innerText = "Past";
                    document.getElementsByClassName('p5')[0].innerText = "Units 10 to 14";
                    document.getElementsByClassName('p6')[0].innerText = "Present Perfect";
                    document.getElementsByClassName('p7')[0].innerText = "Units 15 to 20";
                    document.getElementsByClassName('p8')[0].innerText = "Passive";
                    document.getElementsByClassName('p9')[0].innerText = "Units 21 to 22";
                    document.getElementsByClassName('p10')[0].innerText = "Verb forms";
                    document.getElementsByClassName('p11')[0].innerText = "Units 23 to 24";
                    document.getElementsByClassName('p12')[0].innerText = "Future";
                    document.getElementsByClassName('p13')[0].innerText = "Units 25 to 28";
                    document.getElementsByClassName('p14')[0].innerText = "Modals & Imperative";
                    document.getElementsByClassName('p15')[0].innerText = "Units 29 to 36";
                    document.getElementsByClassName('p16')[0].innerText = "There & it";
                    document.getElementsByClassName('p17')[0].innerText = "Units 37 to 39";
                    document.getElementsByClassName('p18')[0].innerText = "Auxiliary verbs";
                    document.getElementsByClassName('p19')[0].innerText = "Units 40 to 43";
                    document.getElementsByClassName('p20')[0].innerText = "Questions";
                    document.getElementsByClassName('p21')[0].innerText = "Units 44 to 49";
                    document.getElementsByClassName('p22')[0].innerText = "Reported speech";
                    document.getElementsByClassName('p23')[0].innerText = "Unit 50";
                    document.getElementsByClassName('p24')[0].innerText = "-ing & to...";
                    document.getElementsByClassName('p25')[0].innerText = "Units 51 to 54";
                    document.getElementsByClassName('p26')[0].innerText = "Go, get, do, make & have";
                    document.getElementsByClassName('p27')[0].innerText = "Units 55 to 58";
                    document.getElementsByClassName('p28')[0].innerText = "Pronouns & possessives";
                    document.getElementsByClassName('p29')[0].innerText = "Units 59 to 64";
                    document.getElementsByClassName('p30')[0].innerText = "A & the";
                    document.getElementsByClassName('p31')[0].innerText = "Units 65 to 73";
                    document.getElementsByClassName('p32')[0].innerText = "Determiners & pronouns";
                    document.getElementsByClassName('p33')[0].innerText = "Units 74 to 84";
                    document.getElementsByClassName('p34')[0].innerText = "Adjectives & adverbs";
                    document.getElementsByClassName('p35')[0].innerText = "Units 85 to 92";
                    document.getElementsByClassName('p36')[0].innerText = "Word order";
                    document.getElementsByClassName('p37')[0].innerText = "Units 93 to 96";
                    document.getElementsByClassName('p38')[0].innerText = "Conjunctions & clauses";
                    document.getElementsByClassName('p39')[0].innerText = "Units 97 to 102";
                    document.getElementsByClassName('p40')[0].innerText = "Prepositions";
                    document.getElementsByClassName('p41')[0].innerText = "Units 103 to 113";
                    document.getElementsByClassName('p42')[0].innerText = "Phrasal verbs";
                    document.getElementsByClassName('p43')[0].innerText = "Units 114 to 115";
                    document.getElementsByClassName('p44')[0].innerText = "Appendix 1";
                    document.getElementsByClassName('p45')[0].innerText = "Active & passive";
                    document.getElementsByClassName('p46')[0].innerText = "Appendix 2";
                    document.getElementsByClassName('p47')[0].innerText = "List of irregular verbs";
                    document.getElementsByClassName('p48')[0].innerText = "Appendix 3";
                    document.getElementsByClassName('p49')[0].innerText = "Irregular verbs in groups";
                    document.getElementsByClassName('p50')[0].innerText = "Appendix 4";
                    document.getElementsByClassName('p51')[0].innerText = "Short forms (he's / I'd / don't)";
                    document.getElementsByClassName('p52')[0].innerText = "Appendix 5";
                    document.getElementsByClassName('p53')[0].innerText = "Spelling";
                    document.getElementsByClassName('p54')[0].innerText = "Appendix 6";
                    document.getElementsByClassName('p55')[0].innerText = "Phrasal verbs (take off / give up)";
                    document.getElementsByClassName('p56')[0].innerText = "Appendix 7";
                    document.getElementsByClassName('p57')[0].innerText = "Phrasal verbs + object";
                }
                icon.childNodes[0].classList.toggle('fa-arrow-right');
                icon.childNodes[0].classList.toggle('fa-arrow-left');
            }
        )

        document.getElementsByClassName('button')[0].addEventListener("click", 
            () => { location.href = '../chapter1/index.html' }
        )

    }
)