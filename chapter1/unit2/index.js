var answers;

window.addEventListener("load",
    (event) => {

        //Traducciones.
        let icon = document.getElementsByClassName('translation-icon')[0];
        icon.addEventListener("click", 
            () => {
                //Traducir al español?
                if(icon.childNodes[0].classList.contains('fa-arrow-right')){
                    icon.title = 'Quitar traducción';
                    document.getElementById('title').innerText = "Unidad";
                    document.getElementsByClassName('p1')[0].innerText = "am / is / are (preguntas)";
                    document.getElementsByClassName('p2')[0].innerText = "Preguntas y respuestas";
                    document.getElementsByClassName('p3')[0].innerText = "Positivo";
                    document.getElementsByClassName('p4')[0].innerText = "Yo";
                    document.getElementsByClassName('p5')[0].innerText = "soy/estoy";
                    document.getElementsByClassName('p6')[0].innerHTML = "el<br>ella<br>eso";
                    document.getElementsByClassName('p7')[0].innerText = "es/está";
                    document.getElementsByClassName('p8')[0].innerHTML = "nosotros<br>ustedes<br>ellos/as";
                    document.getElementsByClassName('p9')[0].innerText = "somos/son / estamos/están";
                    document.getElementsByClassName('p10')[0].innerText = "Pregunta";
                    document.getElementsByClassName('p11')[0].innerText = "soy/estoy";
                    document.getElementsByClassName('p12')[0].innerText = "yo ?";
                    document.getElementsByClassName('p13')[0].innerText = "es/está";
                    document.getElementsByClassName('p14')[0].innerHTML = "el ?<br>ella ?<br>eso ?";
                    document.getElementsByClassName('p15')[0].innerHTML = "somos/son / <br>estamos/están";
                    document.getElementsByClassName('p16')[0].innerHTML = "nosotros ?<br>ustedes ?<br>ellos/as ?";
                    document.getElementsByClassName('p17')[0].innerHTML = "'<strong>¿Estoy yo</strong> tarde?'  'No, <strong>vos estás</strong> a tiempo.'";
                    document.getElementsByClassName('p18')[0].innerHTML = "'<strong>¿Está tu madre</strong> en casa?'  'No, <strong>ella está</strong> afuera.'";
                    document.getElementsByClassName('p19')[0].innerHTML = "'<strong>¿Están tus padres</strong> en casa?'  'No, <strong>ellos están</strong> afuera.'";
                    document.getElementsByClassName('p20')[0].innerHTML = "'<strong>Está</strong> frío en tu habitación?'  'Sí, un poco.'";
                    document.getElementsByClassName('p21')[0].innerHTML = "Tus zapatos son</strong> lindos. <strong>Son ellos</strong> nuevos?";
                    document.getElementsByClassName('p22')[0].innerHTML = "<strong>Está ella</strong> en casa? / <strong>Está tu madre</strong> en casa? (no: ¿Está en tu casa tu madre?)";
                    document.getElementsByClassName('p23')[0].innerHTML = "<strong>Son ellos</strong> nuevos? / <strong>Son tus zapatos</strong> nuevos? (no: ¿Son nuevos tus zapatos?)";
                    document.getElementsByClassName('p24')[0].innerText = "Preguntas-WH";
                    document.getElementsByClassName('p25')[0].innerText = "¿Dónde ... ? / ¿Qué/Cuál ... ? / ¿Quién ... ? / ¿Cómo ... ? / ¿Por qué ... ?";
                    document.getElementsByClassName('p26')[0].innerHTML = "¿<strong>Dónde está</strong> tu madre?  ¿Está ella en casa?";
                    document.getElementsByClassName('p27')[0].innerHTML = "'¿<strong>(De)Dónde sos</strong> vos?'  'Canadá.'";
                    document.getElementsByClassName('p28')[0].innerHTML = "'¿<strong>¿(De)Qué color es</strong> tu auto?'  'Eso(El) es rojo.'";
                    document.getElementsByClassName('p29')[0].innerHTML = "'¿<strong>Cómo de viejo es (Qué edad tiene)</strong> Joe?'  'El es (tiene) 24.'";
                    document.getElementsByClassName('p30')[0].innerHTML = "¿<strong>Cómo están</strong> tus padres? <strong>Están ellos</strong> bien?";
                    document.getElementsByClassName('p31')[0].innerHTML = "Estas postales son lindas. ¿<strong>Cuánto cuestan</strong> ellas?";
                    document.getElementsByClassName('p32')[0].innerHTML = "Este hotel no es muy bueno. ¿<strong>Porqué es</strong> eso(el) tan caro?";
                    document.getElementsByClassName('p33')[0].innerHTML = "what<strong>'s</strong> = qué <strong>es/está</strong>, who<strong>'s</strong> = quién <strong>es/está</strong>, how<strong>'s</strong> = cómo <strong>es/está</strong>, where<strong>'s</strong> = dónde <strong>es/está</strong>";
                    document.getElementsByClassName('p34')[0].innerHTML = "¿<strong>Cuál es</strong> la hora?";
                    document.getElementsByClassName('p35')[0].innerHTML = "¿<strong>Quién es</strong> aquel hombre?";
                    document.getElementsByClassName('p36')[0].innerHTML = "¿<strong>Dónde está</strong> Lucy?";
                    document.getElementsByClassName('p37')[0].innerHTML = "¿<strong>Cómo está</strong> tu padre?";
                    document.getElementsByClassName('p38')[0].innerText = "Respuestas cortas";
                    document.getElementsByClassName('p39')[0].innerText = "Respuesta positiva";
                    document.getElementsByClassName('p40')[0].innerText = "Respuesta negativa";
                    document.getElementsByClassName('p41')[0].innerText = "o";
                    document.getElementsByClassName('p42')[0].innerText = "Otras formas abreviadas:";
                    document.getElementsByClassName('p43')[0].innerHTML = "'¿<strong>Estás vos</strong> cansada?'  '<strong>Sí, Yo lo estoy</strong>.'";
                    document.getElementsByClassName('p44')[0].innerHTML = "'¿<strong>Estás vos</strong> hambrienta? (¿Tenés hambre?)'  '<strong>No, Yo no (lo) estoy</strong>, pero yo estoy sedienta.'";
                    document.getElementsByClassName('p45')[0].innerHTML = "'¿<strong>Es tu amigo</strong> inglés?'  '<strong>Sí, el (lo) es</strong>.'";
                    document.getElementsByClassName('p46')[0].innerHTML = "'¿<strong>Son</strong> estas <strong>tus llaves</strong>?'  '<strong>Sí, ellas (lo) son</strong>.'";
                    document.getElementsByClassName('p47')[0].innerHTML = "'¿<strong>Ese es</strong> mi asiento.'  '<strong>No, ese no (lo) es</strong>.'";
                    document.getElementsByClassName('p48')[0].innerText = "Ejercicios";
                    document.getElementsByClassName('p49')[0].innerText = "2.1) Encuentra las respuestas correctas para las preguntas.";
                    document.getElementsByClassName('p50')[0].innerText = "1) ¿Dónde está la cámara?";
                    document.getElementsByClassName('p51')[0].innerText = "Decimos:";
                    document.getElementsByClassName('p52')[0].innerText = "2) ¿Es tu auto azul?";
                    document.getElementsByClassName('p53')[0].innerText = "3) ¿Es Linda de Londres?";
                    document.getElementsByClassName('p54')[0].innerText = "4) ¿Estoy yo tarde?";
                    document.getElementsByClassName('p55')[0].innerText = "5) ¿De dónde es Anna?";
                    document.getElementsByClassName('p56')[0].innerText = "6) ¿De qué color es tu bolsa?";
                    document.getElementsByClassName('p57')[0].innerText = "7) ¿Estás hambriento?";
                    document.getElementsByClassName('p58')[0].innerText = "8) ¿Cómo está Jorge?";
                    document.getElementsByClassName('p59')[0].innerText = "9) ¿Quién es esa mujer?";
                    document.getElementsByClassName('p60')[0].innerText = "A) Londres.";
                    document.getElementsByClassName('p61')[0].innerText = "B) No, no lo estoy.";
                    document.getElementsByClassName('p62')[0].innerText = "C) Sí, tu lo estás.";
                    document.getElementsByClassName('p63')[0].innerText = "D) Mi hermana.";
                    document.getElementsByClassName('p64')[0].innerText = "E) Negra.";
                    document.getElementsByClassName('p65')[0].innerText = "F) No, es negro.";
                    document.getElementsByClassName('p66')[0].innerText = "G) En tu bolsa.";
                    document.getElementsByClassName('p67')[0].innerText = "H) No, ella es americana.";
                    document.getElementsByClassName('p68')[0].innerText = "I) Muy bien.";
                    document.getElementsByClassName('p69')[0].innerText = "2.2) Crear oraciones con estas palabras:";
                    document.getElementsByClassName('p70')[0].innerText = " 1) (está / en casa / tu madre) ";
                    document.getElementsByClassName('p71')[0].innerText = " 2) (tus padres / están / bien) ";
                    document.getElementsByClassName('p72')[0].innerText = " 3) (interesante / es / tu trabajo) ";
                    document.getElementsByClassName('p73')[0].innerText = " 4) (los negocios / están / abiertos hou) ";
                    document.getElementsByClassName('p74')[0].innerText = " 5) (de / dónde / vos / sos) ";
                    document.getElementsByClassName('p75')[0].innerText = " 6) (interesado en deportes/ vos / estás) ";
                    document.getElementsByClassName('p76')[0].innerText = " 7) (está / cerca de aquí / la oficina de correos) ";
                    document.getElementsByClassName('p77')[0].innerText = " 8) (en la escuela / están / tus chicos) ";
                    document.getElementsByClassName('p78')[0].innerText = " 9) (tu / estás / tarde / por qué) ";
                    document.getElementsByClassName('p79')[0].innerText = "2.3) Completar las preguntas. Usar Qué ... / Quién ... / Dónde ... / Cómo ...";
                    document.getElementsByClassName('p80')[0].innerText = "tus padres?";
                    document.getElementsByClassName('p81')[0].innerText = "la parada del bus?";
                    document.getElementsByClassName('p82')[0].innerText = "tus hijos?";
                    document.getElementsByClassName('p83')[0].innerText = "estas naranjas?";
                    document.getElementsByClassName('p84')[0].innerText = "tu deporte favorito?";
                    document.getElementsByClassName('p85')[0].innerText = "el hombre en esta fotografía?";
                    document.getElementsByClassName('p86')[0].innerText = "tus nuevos zapatos?";
                    document.getElementsByClassName('p87')[0].innerText = "Ellos están muy bien.";
                    document.getElementsByClassName('p88')[0].innerText = "Al final de la calle.";
                    document.getElementsByClassName('p89')[0].innerText = "Cinco, seis y diez.";
                    document.getElementsByClassName('p90')[0].innerText = "$1.50 el kilo";
                    document.getElementsByClassName('p91')[0].innerText = "Esquiar.";
                    document.getElementsByClassName('p92')[0].innerText = "Ese es mi padre.";
                    document.getElementsByClassName('p93')[0].innerText = "Negro.";
                    document.getElementsByClassName('p94')[0].innerText = "2.4) Escribir preguntas.";
                    document.getElementsByClassName('p95')[0].innerText = "1) (nombre?) ";
                    document.getElementsByClassName('p96')[0].innerText = "2) (americano?) ";
                    document.getElementsByClassName('p97')[0].innerText = "3) (qué edad?) ";
                    document.getElementsByClassName('p98')[0].innerText = "4) (un maestro?) ";
                    document.getElementsByClassName('p99')[0].innerText = "5) (casado?) ";
                    document.getElementsByClassName('p100')[0].innerText = "6) (esposa es abogada?) ";
                    document.getElementsByClassName('p101')[0].innerText = "7) (de dónde?) ";
                    document.getElementsByClassName('p102')[0].innerText = "8) (su nombre?) ";
                    document.getElementsByClassName('p103')[0].innerText = "9) (qué edad?) ";
                    document.getElementsByClassName('p104')[0].innerText = "Pablo.";
                    document.getElementsByClassName('p105')[0].innerText = "No, yo soy australiano.";
                    document.getElementsByClassName('p106')[0].innerText = "Tengo 30.";
                    document.getElementsByClassName('p107')[0].innerText = "No, yo soy abogado.";
                    document.getElementsByClassName('p108')[0].innerText = "Yes, lo soy.";
                    document.getElementsByClassName('p109')[0].innerText = "No, ella es una diseñadora.";
                    document.getElementsByClassName('p110')[0].innerText = "Ella es italiana.";
                    document.getElementsByClassName('p111')[0].innerText = "Ella tiene 27.";
                    document.getElementsByClassName('p112')[0].innerText = "2.5) Escribe respuestas cortas (Sí, lo soy/estoy. / No, el no es/está. etc.)";
                    document.getElementsByClassName('p113')[0].innerText = " 1) ¿Estás casado? ";
                    document.getElementsByClassName('p114')[0].innerText = " 2) ¿Estás con hambre? ";
                    document.getElementsByClassName('p115')[0].innerText = " 3) ¿Está frío? ";
                    document.getElementsByClassName('p116')[0].innerText = " 4) ¿Están tus manos frías? ";
                    document.getElementsByClassName('p117')[0].innerText = " 5) ¿Está oscuro ahora? ";
                    document.getElementsByClassName('p118')[0].innerText = " 6) ¿Sos un maestro? ";
                    document.getElementsByClassName('p119')[0].innerText = "Evaluar respuestas";
                    document.getElementsByClassName('p120')[0].innerText = "¿Más sobre esto?";
                    document.getElementsByClassName('p121')[0].innerText = "Ejercicios aditionales 1-2";
                } else {
                    icon.title = 'En español por favor!';
                    document.getElementById('title').innerText = "Unit";
                    document.getElementsByClassName('p1')[0].innerText = "am / is / are (questions)";
                    document.getElementsByClassName('p2')[0].innerText = "Questions and answers";
                    document.getElementsByClassName('p3')[0].innerText = "Positive";
                    document.getElementsByClassName('p4')[0].innerText = "I";
                    document.getElementsByClassName('p5')[0].innerText = "am";
                    document.getElementsByClassName('p6')[0].innerHTML = "he<br>she<br>it";
                    document.getElementsByClassName('p7')[0].innerText = "is";
                    document.getElementsByClassName('p8')[0].innerHTML = "we<br>you<br>they";
                    document.getElementsByClassName('p9')[0].innerText = "are";
                    document.getElementsByClassName('p10')[0].innerText = "Question";
                    document.getElementsByClassName('p11')[0].innerText = "am";
                    document.getElementsByClassName('p12')[0].innerText = "I ?";
                    document.getElementsByClassName('p13')[0].innerText = "is";
                    document.getElementsByClassName('p14')[0].innerHTML = "he ?<br>she ?<br>it ?";
                    document.getElementsByClassName('p15')[0].innerHTML = "are";
                    document.getElementsByClassName('p16')[0].innerHTML = "we ?<br>you ?<br>they ?";
                    document.getElementsByClassName('p17')[0].innerHTML = "'<strong>Am I</strong> late?'  'No, <strong>you're</strong> on time.'";
                    document.getElementsByClassName('p18')[0].innerHTML = "'<strong>Is your mother</strong> at home?'  'No, <strong>she's</strong> out.'";
                    document.getElementsByClassName('p19')[0].innerHTML = "'<strong>Are your parents</strong> at home?'  'No, <strong>they're</strong> out.'";
                    document.getElementsByClassName('p20')[0].innerHTML = "'<strong>Is it</strong> cold in your room?'  'Yes, a little.'";
                    document.getElementsByClassName('p21')[0].innerHTML = "Your shoes are</strong> nice. <strong>Are they</strong> new?";
                    document.getElementsByClassName('p22')[0].innerHTML = "<strong>Is she</strong> at home? / <strong>Is your mother</strong> at home? (not: Is at home your mother?)";
                    document.getElementsByClassName('p23')[0].innerHTML = "<strong>Are they</strong> new? / <strong>Are your shoes</strong> new? (not: Are new your shoes?)";
                    document.getElementsByClassName('p24')[0].innerText = "WH-questions";
                    document.getElementsByClassName('p25')[0].innerText = "Where ... ? / What ... ? / Who ... ? / How ... ? / Why ... ?";
                    document.getElementsByClassName('p26')[0].innerHTML = "<strong>Where is</strong> your mother?  Is she at home?";
                    document.getElementsByClassName('p27')[0].innerHTML = "'<strong>Where are</strong> you from?'  'Canada.'";
                    document.getElementsByClassName('p28')[0].innerHTML = "'<strong>What colour is</strong> your car?'  'It's red.'";
                    document.getElementsByClassName('p29')[0].innerHTML = "'<strong>How old is</strong> Joe?'  'He's 24.'";
                    document.getElementsByClassName('p30')[0].innerHTML = "<strong>How are</strong> your parents? <strong>Are they</strong> well?";
                    document.getElementsByClassName('p31')[0].innerHTML = "These postcards are nice. <strong>How much are</strong> they?";
                    document.getElementsByClassName('p32')[0].innerHTML = "This hotel isn't very good. <strong>Why is</strong> it so expensive?";
                    document.getElementsByClassName('p33')[0].innerHTML = "what<strong>'s</strong> = what <strong>is</strong>, who<strong>'s</strong> = who <strong>is</strong>, how<strong>'s</strong> = how <strong>is</strong>, where<strong>'s</strong> = where <strong>is</strong>";
                    document.getElementsByClassName('p34')[0].innerHTML = "<strong>What's</strong> the time?";
                    document.getElementsByClassName('p35')[0].innerHTML = "<strong>Who's</strong> that man?";
                    document.getElementsByClassName('p36')[0].innerHTML = "<strong>Where's</strong> Lucy?";
                    document.getElementsByClassName('p37')[0].innerHTML = "<strong>How's</strong> your father?";
                    document.getElementsByClassName('p38')[0].innerText = "Short answers";
                    document.getElementsByClassName('p39')[0].innerText = "Positive answer";
                    document.getElementsByClassName('p40')[0].innerText = "Negative answer";
                    document.getElementsByClassName('p41')[0].innerText = "or";
                    document.getElementsByClassName('p42')[0].innerText = "Other short form:";
                    document.getElementsByClassName('p43')[0].innerHTML = "'<strong>Are you</strong> tired?'  '<strong>Yes, I am</strong>.'";
                    document.getElementsByClassName('p44')[0].innerHTML = "'<strong>Are you</strong> hungry?'  '<strong>No, I'm not</strong>, but I'm thirsty.'";
                    document.getElementsByClassName('p45')[0].innerHTML = "'<strong>Is your friend</strong> English?'  '<strong>Yes, he is</strong>.'";
                    document.getElementsByClassName('p46')[0].innerHTML = "'<strong>Are</strong> these <strong>your keys</strong>?'  '<strong>Yes, they are</strong>.'";
                    document.getElementsByClassName('p47')[0].innerHTML = "'<strong>That's</strong> my seat.'  '<strong>No, it isn't</strong>.'";
                    document.getElementsByClassName('p48')[0].innerText = "Exercises";
                    document.getElementsByClassName('p49')[0].innerText = "2.1) Find the right answers for the questions.";
                    document.getElementsByClassName('p50')[0].innerText = "1) Where's the camera?";
                    document.getElementsByClassName('p51')[0].innerText = "We say:";
                    document.getElementsByClassName('p52')[0].innerText = "2) Is your car blue?";
                    document.getElementsByClassName('p53')[0].innerText = "3) Is Linda from London?";
                    document.getElementsByClassName('p54')[0].innerText = "4) Am I late?";
                    document.getElementsByClassName('p55')[0].innerText = "5) Where's Ann from?";
                    document.getElementsByClassName('p56')[0].innerText = "6) What colour is you bag?";
                    document.getElementsByClassName('p57')[0].innerText = "7) Are you hungry?";
                    document.getElementsByClassName('p58')[0].innerText = "8) How is George?";
                    document.getElementsByClassName('p59')[0].innerText = "9) Who's that woman?";
                    document.getElementsByClassName('p60')[0].innerText = "A) London.";
                    document.getElementsByClassName('p61')[0].innerText = "B) No, I'm not.";
                    document.getElementsByClassName('p62')[0].innerText = "C) Yes, you are.";
                    document.getElementsByClassName('p63')[0].innerText = "D) My sister.";
                    document.getElementsByClassName('p64')[0].innerText = "E) Black.";
                    document.getElementsByClassName('p65')[0].innerText = "F) No, it's black.";
                    document.getElementsByClassName('p66')[0].innerText = "G) In your bag.";
                    document.getElementsByClassName('p67')[0].innerText = "H) No, she's American.";
                    document.getElementsByClassName('p68')[0].innerText = "I) Very well.";
                    document.getElementsByClassName('p69')[0].innerText = "2.2) Make questions with these words.";
                    document.getElementsByClassName('p70')[0].innerText = " 1) (is / at home / your mother) ";
                    document.getElementsByClassName('p71')[0].innerText = " 2) (your parents / are / well) ";
                    document.getElementsByClassName('p72')[0].innerText = " 3) (interesting / is / your job) ";
                    document.getElementsByClassName('p73')[0].innerText = " 4) (the shops / are / open today) ";
                    document.getElementsByClassName('p74')[0].innerText = " 5) (from / where / you / are) ";
                    document.getElementsByClassName('p75')[0].innerText = " 6) (interested in sport/ you / are) ";
                    document.getElementsByClassName('p76')[0].innerText = " 7) (is / near here / the post office) ";
                    document.getElementsByClassName('p77')[0].innerText = " 8) (at school / are / your children) ";
                    document.getElementsByClassName('p78')[0].innerText = " 9) (you / are / late / why) ";
                    document.getElementsByClassName('p79')[0].innerText = "2.3) Complete the questions. Use What ... / Who ... / Where ... / How ...";
                    document.getElementsByClassName('p80')[0].innerText = "your parents?";
                    document.getElementsByClassName('p81')[0].innerText = "the bus stop?";
                    document.getElementsByClassName('p82')[0].innerText = "your children?";
                    document.getElementsByClassName('p83')[0].innerText = "these oranges?";
                    document.getElementsByClassName('p84')[0].innerText = "your favourite sport?<";
                    document.getElementsByClassName('p85')[0].innerText = "the man in this photograph?";
                    document.getElementsByClassName('p86')[0].innerText = "your new shoes?";
                    document.getElementsByClassName('p87')[0].innerText = "They're very well.";
                    document.getElementsByClassName('p88')[0].innerText = "At the end of the street.";
                    document.getElementsByClassName('p89')[0].innerText = "Five, six and ten.";
                    document.getElementsByClassName('p90')[0].innerText = "$1.50 a kilo";
                    document.getElementsByClassName('p91')[0].innerText = "Skiing.";
                    document.getElementsByClassName('p92')[0].innerText = "That's my father.";
                    document.getElementsByClassName('p93')[0].innerText = "Black.";
                    document.getElementsByClassName('p94')[0].innerText = "2.4) Write questions.";
                    document.getElementsByClassName('p95')[0].innerText = "1) (name?) ";
                    document.getElementsByClassName('p96')[0].innerText = "2) (American?) ";
                    document.getElementsByClassName('p97')[0].innerText = "3) (how old?) ";
                    document.getElementsByClassName('p98')[0].innerText = "4) (a teacher?) ";
                    document.getElementsByClassName('p99')[0].innerText = "5) (married?) ";
                    document.getElementsByClassName('p100')[0].innerText = "6) (wife a lawyer?) ";
                    document.getElementsByClassName('p101')[0].innerText = "7) (from?) ";
                    document.getElementsByClassName('p102')[0].innerText = "8) (her name?) ";
                    document.getElementsByClassName('p103')[0].innerText = "9) (how old?) ";
                    document.getElementsByClassName('p104')[0].innerText = "Paul.";
                    document.getElementsByClassName('p105')[0].innerText = "No, I'm Australian.";
                    document.getElementsByClassName('p106')[0].innerText = "I'm 30.";
                    document.getElementsByClassName('p107')[0].innerText = "No, I'm a lawyer.";
                    document.getElementsByClassName('p108')[0].innerText = "Yes, I am.";
                    document.getElementsByClassName('p109')[0].innerText = "No, she's a designer.";
                    document.getElementsByClassName('p110')[0].innerText = "She's Italian.";
                    document.getElementsByClassName('p111')[0].innerText = "She's 27.";
                    document.getElementsByClassName('p112')[0].innerText = "2.5) Write short answers (Yes, I am. / No, he isn't. etc.)";
                    document.getElementsByClassName('p113')[0].innerText = " 1) Are you married? ";
                    document.getElementsByClassName('p114')[0].innerText = " 2) Are you thirsty? ";
                    document.getElementsByClassName('p115')[0].innerText = " 3) Is it cold? ";
                    document.getElementsByClassName('p116')[0].innerText = " 4) Are your hands cold? ";
                    document.getElementsByClassName('p117')[0].innerText = " 5) Is it dark now? ";
                    document.getElementsByClassName('p118')[0].innerText = " 6) Are you a teacher? ";
                    document.getElementsByClassName('p119')[0].innerText = "Evaluate answers";
                    document.getElementsByClassName('p120')[0].innerText = "More on this?";
                    document.getElementsByClassName('p121')[0].innerText = "Aditional exercises 1-2";
                }
                icon.childNodes[0].classList.toggle('fa-arrow-right');
                icon.childNodes[0].classList.toggle('fa-arrow-left');
            }
        )

        //Retorno al home.
        document.getElementsByClassName('home')[0].addEventListener("click", 
            () => { location.href = '../../home/index.html' }
        )

        //Quitar formatos de validación en inputs al editarlos.
        document.querySelectorAll('input').forEach(element => element.addEventListener('click', event => {
            event.target.classList.remove('alert-danger')
            event.target.classList.remove('border-danger')
            if(!event.target.classList.contains('alert-success')){
                event.target.classList.remove('border')
            }
        }))

        //Datos de respuestas.
        let answers = [
            {
                "exercise" : "1.1",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "input" : 1,
                        "correct_answers" : ["she's", "she`s", "she´s"]
                    },
                    {
                        "sub_exercise" : 2,
                        "input" : 1,
                        "correct_answers" : ["they're", "they`re", "they´re"]
                    },
                    {
                        "sub_exercise" : 3,
                        "input" : 1,
                        "correct_answers" : ["it's not", "it`s not", "it´s not", "it isn't", "it isn`t", "it isn´t"]
                    },
                    {
                        "sub_exercise" : 4,
                        "input" : 1,
                        "correct_answers" : ["that's", "that`s", "that"]
                    },
                    {
                        "sub_exercise" : 5,
                        "input" : 1,
                        "correct_answers" : ["I'm not", "I`m not", "I´m not"]
                    },
                    {
                        "sub_exercise" : 6,
                        "input" : 1,
                        "correct_answers" : ["you're not", "you`re not", "you´re not", "you aren't", "you aren`t", "you aren´t"]
                    }
                ]
            },
            {
                "exercise" : "1.2",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "input" : 1,
                        "correct_answers" : ["is"]
                    },
                    {
                        "sub_exercise" : 2,
                        "input" : 1,
                        "correct_answers" : ["am"]
                    },
                    {
                        "sub_exercise" : 3,
                        "input" : 1,
                        "correct_answers" : ["is"]
                    },
                    {
                        "sub_exercise" : 4,
                        "input" : 1,
                        "correct_answers" : ["are"]
                    },
                    {
                        "sub_exercise" : 5,
                        "input" : 1,
                        "correct_answers" : ["is"]
                    },
                    {
                        "sub_exercise" : 6,
                        "input" : 1,
                        "correct_answers" : ["are"]
                    },
                    {
                        "sub_exercise" : 7,
                        "input" : 1,
                        "correct_answers" : ["is"]
                    },
                    {
                        "sub_exercise" : 7,
                        "input" : 2,
                        "correct_answers" : ["are"]
                    },
                    {
                        "sub_exercise" : 8,
                        "input" : 1,
                        "correct_answers" : ["am"]
                    },
                    {
                        "sub_exercise" : 8,
                        "input" : 2,
                        "correct_answers" : ["is"]
                    }
                ]
            },
            {
                "exercise" : "1.3",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "input" : 1,
                        "correct_answers" : ["He's", "He´s", "He`s", "He is"]
                    },
                    {
                        "sub_exercise" : 2,
                        "input" : 1,
                        "correct_answers" : ["I am", "I'm"]
                    },
                    {
                        "sub_exercise" : 3,
                        "input" : 1,
                        "correct_answers" : ["He's", "He´s", "He`s", "He is"]
                    },
                    {
                        "sub_exercise" : 4,
                        "input" : 1,
                        "correct_answers" : ["They're", "They´re", "They`re", "They are"]
                    },
                    {
                        "sub_exercise" : 5,
                        "input" : 1,
                        "correct_answers" : ["It's", "It´s", "It`s", "It is"]
                    },
                    {
                        "sub_exercise" : 6,
                        "input" : 1,
                        "correct_answers" : ["You're", "You´re", "You`re", "You are"]
                    },
                    {
                        "sub_exercise" : 7,
                        "input" : 1,
                        "correct_answers" : ["She's", "She´s", "She`s", "She is"]
                    },
                    {
                        "sub_exercise" : 8,
                        "input" : 1,
                        "correct_answers" : ["Here's", "Here´s", "Here`s", "Here is"]
                    }
                ]
            },
            {
                "exercise" : "1.5",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "input" : 1,
                        "correct_answers" : ["She's thirsty", "She´s thirsty", "She`s thirsty", "She is thirsty"]
                    },
                    {
                        "sub_exercise" : 2,
                        "input" : 1,
                        "correct_answers" : ["'re cold", "´re cold", "`re cold", "are cold"]
                    },
                    {
                        "sub_exercise" : 3,
                        "input" : 1,
                        "correct_answers" : ["'s hot", "´s hot", "`s hot", "is hot"]
                    },
                    {
                        "sub_exercise" : 4,
                        "input" : 1,
                        "correct_answers" : ["He's afraid", "He´s afraid", "He`s afraid", "He is afraid"]
                    },
                    {
                        "sub_exercise" : 5,
                        "input" : 1,
                        "correct_answers" : ["They're hungry", "They´re hungry", "They`re hungry", "They are hungry"]
                    },
                    {
                        "sub_exercise" : 6,
                        "input" : 1,
                        "correct_answers" : ["She's angry", "She´s angry", "She`s angry", "She is angry"]
                    }
                ]
            },
            {
                "exercise" : "1.6",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "input" : 1,
                        "correct_answers" : ["It's hot today", "It´s hot today", "It`s hot today", "It is hot today"]
                    },
                    {
                        "sub_exercise" : 1,
                        "input" : 2,
                        "correct_answers" : ["It's not hot today", "It´s not hot today", "It`s not hot today", "It is not hot today"]
                    },
                    {
                        "sub_exercise" : 2,
                        "input" : 1,
                        "correct_answers" : ["'s windy today", "´s windy today", "`s windy today", "is windy today"]
                    },
                    {
                        "sub_exercise" : 2,
                        "input" : 2,
                        "correct_answers" : ["'s not windy today", "´s not windy today", "`s not windy today", "is not windy today","isn't windy today", "isn´t windy today", "isn`t windy today"]
                    },
                    {
                        "sub_exercise" : 3,
                        "input" : 1,
                        "correct_answers" : ["hands are cold"]
                    },
                    {
                        "sub_exercise" : 3,
                        "input" : 2,
                        "correct_answers" : ["hands are not cold", "hands aren't cold", "hands aren´t cold", "hands aren`t cold"]
                    },
                    {
                        "sub_exercise" : 4,
                        "input" : 1,
                        "correct_answers" : ["Brazil's a very big country", "Brazil´s a very big country", "Brazil`s a very big country", "Brazil is a very big country"]
                    },
                    {
                        "sub_exercise" : 4,
                        "input" : 2,
                        "correct_answers" : ["Brazil isn't a very big country", "Brazil isn´t a very big country", "Brazil isn`t a very big country", "Brazil is not a very big country"]
                    },
                    {
                        "sub_exercise" : 5,
                        "input" : 1,
                        "correct_answers" : ["Diamonds are cheap"]
                    },
                    {
                        "sub_exercise" : 5,
                        "input" : 2,
                        "correct_answers" : ["Diamonds aren't cheap", "Diamonds aren´t cheap", "Diamonds aren`t cheap", "Diamonds are not cheap"]
                    },
                    {
                        "sub_exercise" : 6,
                        "input" : 1,
                        "correct_answers" : ["Toronto's in the US", "Toronto´s in the US", "Toronto`s in the US", "Toronto is in the US"]
                    },
                    {
                        "sub_exercise" : 6,
                        "input" : 2,
                        "correct_answers" : ["Toronto isn't in the US", "Toronto isn´t in the US", "Toronto isn`t in the US", "Toronto is not in the US"]
                    },
                    {
                        "sub_exercise" : 7,
                        "input" : 1,
                        "correct_answers" : ["I'm tired", "I´m tired", "I`m tired"]
                    },
                    {
                        "sub_exercise" : 7,
                        "input" : 2,
                        "correct_answers" : ["I'm not tired", "I´m not tired", "I`m not tired"]
                    },
                    {
                        "sub_exercise" : 8,
                        "input" : 1,
                        "correct_answers" : ["I'm hungry", "I´m hungry", "I`m hungry"]
                    },
                    {
                        "sub_exercise" : 8,
                        "input" : 2,
                        "correct_answers" : ["I'm not hungry", "I´m not hungry", "I`m not hungry"]
                    },
                    {
                        "sub_exercise" : 9,
                        "input" : 1,
                        "correct_answers" : ["I'm a good swimmer", "I´m a good swimmer", "I`m a good swimmer"]
                    },
                    {
                        "sub_exercise" : 9,
                        "input" : 2,
                        "correct_answers" : ["I'm not a good swimmer", "I´m not a good swimmer", "I`m not a good swimmer"]
                    },
                    {
                        "sub_exercise" : 10,
                        "input" : 1,
                        "correct_answers" : ["I'm interested in football", "I´m interested in football", "I`m interested in football"]
                    },
                    {
                        "sub_exercise" : 10,
                        "input" : 2,
                        "correct_answers" : ["I'm not interested in football", "I´m not interested in football", "I`m not interested in football"]
                    }
                ]
            }
        ]
        document.querySelector('#evaluate').addEventListener('click', event => {
            answers.forEach(json_element => {
                //Evaluar respuestas ingresadas.
                document.querySelectorAll('.answer').forEach(function(input) {
                    let inputExercise = input.dataset['exercise']//input.parentElement.parentElement.previousElementSibling.children[0].innerText.trim().split(")")[0] * 1;
                    let inputSubExercise = input.dataset['subexercise']//input.parentElement.firstChild.innerText.trim().split(")")[0] * 1;
                    let inputIndex = input.dataset['input']
                    let canEvaluateAnswer = inputExercise != undefined && inputSubExercise != undefined && inputIndex != undefined && answers != undefined
                    
                    if(canEvaluateAnswer){
                        if(json_element.exercise == inputExercise){
                            json_element.answers.forEach(answer => {
                                if(answer.sub_exercise == inputSubExercise && answer.input == inputIndex){
                                    answer.correct_answers = answer.correct_answers.map((value, index) => {
                                        return value.toLowerCase()
                                    })
                                    if(answer.correct_answers.includes(input.value.toLowerCase())){
                                        //Bien respondida.
                                        input.classList.remove('border')
                                        input.classList.remove('border-danger')
                                        input.classList.remove('alert-danger')
                                        input.classList.add('border')
                                        input.classList.add('border-success')
                                        input.classList.add('alert-success');
                                        input.setAttribute('readonly', true)
                                    } else {
                                        //Mal respondida.
                                        input.classList.remove('border')
                                        input.classList.remove('border-success')
                                        input.classList.remove('alert-success');
                                        input.classList.add('border')
                                        input.classList.add('border-danger')
                                        input.classList.add('alert-danger');
                                    }
                                }
                            })
                        }
                    } else {
                        debugger;
                    }
                })
            })
        });

    }
)