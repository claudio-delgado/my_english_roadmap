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

        //Leer json con datos de respuestas.
        fetch('./data.json')
                /*.then((response) => response.json())
                .then((json) => answers = json);*/
                .then(response => {
                    if (!response.ok) {
                        throw new Error("HTTP error " + response.status);
                    }
                    return response.json();
                })
                .then(answers => {
                    document.querySelector('#evaluate').addEventListener('click', event => {
                        answers.forEach(element => {
                            //Evaluar respuestas ingresadas.
                            document.querySelectorAll('.answer').forEach(function(input) {
                                let exerciseNumber = input.dataset['exercise']//input.parentElement.parentElement.previousElementSibling.children[0].innerText.trim().split(")")[0] * 1;
                                let subExerciseNumber = input.dataset['subexercise']//input.parentElement.firstChild.innerText.trim().split(")")[0] * 1;
                                let inputIndex = input.dataset['input']
                                let canEvaluateAnswer = exerciseNumber != undefined && subExerciseNumber != undefined && inputIndex != undefined && answers != undefined
                                if(canEvaluateAnswer){
                                    if(element.exercise == exerciseNumber){
                                        element.answers.forEach(answer => {
                                            if(answer.sub_exercise == subExerciseNumber && answer.input == inputIndex){
                                                answer.correct_answers.map((value, index) => {
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
                })
                .catch(function () {
                    this.dataError = true;
                })
    }
)