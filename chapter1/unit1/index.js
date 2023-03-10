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
                    document.getElementsByClassName('p1')[0].innerText = "soy(estoy) / es(está) / son(están)/somos(estamos)";
                    document.getElementsByClassName('p2')[0].innerText = "Presentarte";
                    document.getElementsByClassName('p3')[0].innerText = "El verbo SER/ESTAR. Positivo y negativo.";
                    document.getElementsByClassName('p4')[0].innerText = "Positivo";
                    document.getElementsByClassName('p5')[0].innerText = "Yo";
                    document.getElementsByClassName('p5')[1].innerText = "Yo";
                    document.getElementsByClassName('p6')[0].innerText = "soy/estoy";
                    document.getElementsByClassName('p7')[0].innerText = "(Yo soy/estoy)";
                    document.getElementsByClassName('p8')[0].innerHTML = "el<br>ella<br>eso";
                    document.getElementsByClassName('p8')[1].innerHTML = "el<br>ella<br>eso";
                    document.getElementsByClassName('p9')[0].innerText = "es/está";
                    document.getElementsByClassName('p10')[0].innerHTML = "(el <strong>es/está</strong>)<br>(ella <strong>es/está</strong>)<br>(eso <strong>es/está</strong>)";
                    document.getElementsByClassName('p11')[0].innerHTML = "nosotros<br>ustedes<br>ellos/as";
                    document.getElementsByClassName('p11')[1].innerHTML = "nosotros<br>ustedes<br>ellos/as";
                    document.getElementsByClassName('p12')[0].innerHTML = "somos/estamos<br>son/están";
                    document.getElementsByClassName('p13')[0].innerHTML = "(nosotros <strong>somos/estamos</strong>)<br>(ustedes <strong>son/están</strong>)<br>(ellos/as <strong>son/están</strong>)";
                    document.getElementsByClassName('p14')[0].innerText = "Formas abreviadas";
                    document.getElementsByClassName('p14')[1].innerText = "Formas abreviadas";
                    document.getElementsByClassName('p15')[0].innerText = "Negativo";
                    document.getElementsByClassName('p16')[0].innerText = "no soy/estoy";
                    document.getElementsByClassName('p17')[0].innerText = "(No soy/estoy))";
                    document.getElementsByClassName('p18')[0].innerText = "no es/está";
                    document.getElementsByClassName('p19')[0].innerHTML = "(el <strong>no es/está</strong>)<br>(ella <strong>no es/está</strong>)<br>(eso <strong>no es/está</strong>)";
                    document.getElementsByClassName('p20')[0].innerHTML = "no somos/estamos<br>no estamos/están";
                    document.getElementsByClassName('p21')[0].innerHTML = "(nosotros <strong>no somos/estamos</strong>)<br>(ustedes <strong>no son/están</strong>)<br>(ellos/as <strong>no son/están</strong>)";
                    document.getElementsByClassName('p22')[0].innerHTML = "<strong>Yo estoy</strong> frío (con frío). ¿Podes cerrar la ventana, por favor?";
                    document.getElementsByClassName('p23')[0].innerHTML = "<strong>Yo soy</strong> 32 años viejo (tengo 32 años). Mi hermana <strong>es</strong> 29 (tiene 29).";
                    document.getElementsByClassName('p24')[0].innerHTML = "Steve <strong>está</strong> enfermo. <strong>El está</strong> en cama.";
                    document.getElementsByClassName('p25')[0].innerHTML = "Mi hermano <strong>está</strong> atemorizado de los perros (le tiene miedo a los perros).";
                    document.getElementsByClassName('p26')[0].innerHTML = "<strong>Son</strong> las diez en punto. <strong>Vos estás</strong> tarde de nuevo.";
                    document.getElementsByClassName('p27')[0].innerHTML = "Ann y yo <strong>somos</strong> buenos amigos.";
                    document.getElementsByClassName('p28')[0].innerHTML = "Tus llaves <strong>están</strong> en la mesa.";
                    document.getElementsByClassName('p29')[0].innerHTML = "<strong>Yo estoy</strong> cansado, pero <strong>yo</strong> no estoy hambriento. (no tengo hambre)";
                    document.getElementsByClassName('p30')[0].innerHTML = "Tom <strong>no está</strong> interesado en política. <strong>El está</strong> interesado en la música.";
                    document.getElementsByClassName('p31')[0].innerHTML = "Jane <strong>no es</strong> una maestra. <strong>Ella es</strong> una estudiante.";
                    document.getElementsByClassName('p32')[0].innerHTML = "Aquellas personas (gente) <strong>no son</strong> ingleses. <strong>Ellos son</strong> australianos.";
                    document.getElementsByClassName('p33')[0].innerHTML = "<strong>Está</strong> soleado hoy, pero <strong>no está</strong> cálido.";
                    document.getElementsByClassName('p34')[0].innerText = "Otros usos";
                    document.getElementsByClassName('p35')[0].innerHTML = "Eso <strong>es</strong>, allí <strong>está</strong>, aquí <strong>está</strong>";
                    document.getElementsByClassName('p36')[0].innerHTML = "Gracias. Eso <strong>es</strong> muy amable de vos. (de tu parte)";
                    document.getElementsByClassName('p37')[0].innerHTML = "¡Mirá! Allá <strong>está</strong> Chris";
                    document.getElementsByClassName('p38')[0].innerHTML = "'Aquí <strong>está</strong> su llave.'. 'Gracias'";
                    document.getElementsByClassName('p39')[0].innerText = "¿Más sobre esto?";
                    document.getElementsByClassName('p39')[1].innerText = "¿Más sobre esto?";
                    document.getElementsByClassName('p40')[0].innerText = "Ejercicios";
                    document.getElementsByClassName('p41')[0].innerText = "1.1) Escribir la forma abreviada (she's / we aren't, etc.)";
                    document.getElementsByClassName('p42')[0].innerText = "1.2) Escribir: am, is o are";
                    document.getElementsByClassName('p43')[0].innerText = "1.3) Completar las oraciones";
                    document.getElementsByClassName('p44')[0].innerText = "1.4) Mirar las oraciones de Lisa en 1A. Ahora escribir oraciones acerca de vos.";
                    document.getElementsByClassName('p45')[0].innerText = "1.5) Escribir oraciones para las imágenes. Usar:";
                    document.getElementsByClassName('p46')[0].innerHTML = "atemorizado, enojado, frío, acalorado, hambriento, <s>sediento</s>";
                    document.getElementsByClassName('p47')[0].innerText = "1.6) Escribir oraciones, positivas y negativas. Usar is/isn't o are/aren't.";
                    document.getElementsByClassName('p48')[0].innerText = "Escribir oraciones, positivas y negativas. Usar I'm/I'm not.";
                    document.getElementsByClassName('p49')[0].innerText = "Ejercicio adicional";
                    document.getElementsByClassName('p50')[0].innerText = "Evaluar respuestas";
                } else {
                    icon.title = 'En español por favor!';
                    document.getElementById('title').innerText = "Unit";
                    document.getElementsByClassName('p1')[0].innerText = "am / is / are";
                    document.getElementsByClassName('p2')[0].innerText = "Introducing yourself";
                    document.getElementsByClassName('p3')[0].innerText = "The verb TO BE. Positive and negative.";
                    document.getElementsByClassName('p4')[0].innerText = "Positive";
                    document.getElementsByClassName('p5')[0].innerText = "I";
                    document.getElementsByClassName('p5')[1].innerText = "I";
                    document.getElementsByClassName('p6')[0].innerText = "am";
                    document.getElementsByClassName('p7')[0].innerText = "(I'm)";
                    document.getElementsByClassName('p8')[0].innerHTML = "he<br>she<br>it";
                    document.getElementsByClassName('p8')[1].innerHTML = "he<br>she<br>it";
                    document.getElementsByClassName('p9')[0].innerText = "is";
                    document.getElementsByClassName('p10')[0].innerHTML = "(he<strong>'s</strong>)<br>(she<strong>'s</strong>)<br>(it<strong>'s</strong>)";
                    document.getElementsByClassName('p11')[0].innerHTML = "we<br>you<br>they";
                    document.getElementsByClassName('p11')[1].innerHTML = "we<br>you<br>they";
                    document.getElementsByClassName('p12')[0].innerHTML = "are";
                    document.getElementsByClassName('p13')[0].innerHTML = "(we<strong>'re</strong>)<br>(you<strong>'re</strong>)<br>(they<strong>'re</strong>)";
                    document.getElementsByClassName('p14')[0].innerText = "short forms";
                    document.getElementsByClassName('p14')[1].innerText = "short forms";
                    document.getElementsByClassName('p15')[0].innerText = "Negative";
                    document.getElementsByClassName('p16')[0].innerText = "am not";
                    document.getElementsByClassName('p17')[0].innerText = "(I'm not)";
                    document.getElementsByClassName('p18')[0].innerText = "is not";
                    document.getElementsByClassName('p19')[0].innerHTML = "(he<strong>'s not</strong>) (he<strong> isn't</strong>)<br>(she<strong>'s not</strong>) (she<strong> isn't</strong>)<br>(it<strong>'s not</strong>) (it<strong> isn't</strong>)";
                    document.getElementsByClassName('p20')[0].innerHTML = "are not";
                    document.getElementsByClassName('p21')[0].innerHTML = "(we<strong>'re not</strong>) (we<strong> aren't</strong>)<br>(you<strong>'re not</strong>) (you<strong> aren't</strong>)<br>(they<strong>'re not</strong>) (they<strong> aren't</strong>)";
                    document.getElementsByClassName('p22')[0].innerHTML = "<strong>I'm</strong> cold. Can you close the window, please?";
                    document.getElementsByClassName('p23')[0].innerHTML = "<strong>I'm</strong> 32 years old. My sister <strong>is</strong> 29.";
                    document.getElementsByClassName('p24')[0].innerHTML = "Steve <strong>is</strong> ill. <strong>He's</strong> in bed.";
                    document.getElementsByClassName('p25')[0].innerHTML = "My brother <strong>is</strong> afraid of dogs.";
                    document.getElementsByClassName('p26')[0].innerHTML = "<strong>It's</strong> ten o'clock. <strong>You're</strong> late again.";
                    document.getElementsByClassName('p27')[0].innerHTML = "Ann and I <strong>are</strong> good friends.";
                    document.getElementsByClassName('p28')[0].innerHTML = "Your keys <strong>are</strong> on the table.";
                    document.getElementsByClassName('p29')[0].innerHTML = "<strong>I'm</strong> tired, but <strong>I'm</strong> not hungry.";
                    document.getElementsByClassName('p30')[0].innerHTML = "Tom <strong>isn't</strong> interested in politics. <strong>He's</strong> interested in music.";
                    document.getElementsByClassName('p31')[0].innerHTML = "Jane <strong>isn't</strong> a teacher. <strong>She's</strong> a student.";
                    document.getElementsByClassName('p32')[0].innerHTML = "Those people <strong>aren't</strong> English. <strong>They're</strong> australian.";
                    document.getElementsByClassName('p33')[0].innerHTML = "<strong>It's</strong> sunny today, but it <strong>isn't</strong> warm.";
                    document.getElementsByClassName('p34')[0].innerText = "Other uses";
                    document.getElementsByClassName('p35')[0].innerHTML = "that<strong>'s</strong> = that <strong>is</strong>, there<strong>'s</strong> = there <strong>is</strong>, here<strong>'s</strong> = here <strong>is</strong>";
                    document.getElementsByClassName('p36')[0].innerHTML = "Thank you. That<strong>'s</strong> very kind of you.";
                    document.getElementsByClassName('p37')[0].innerHTML = "Look! There<strong>'s</strong> Chris";
                    document.getElementsByClassName('p38')[0].innerHTML = "'Here<strong>'s</strong> your key.'. 'Thank you'";                
                    document.getElementsByClassName('p39')[0].innerText = "More on this?";
                    document.getElementsByClassName('p39')[1].innerText = "More on this?";
                    document.getElementsByClassName('p40')[0].innerText = "Exercises";
                    document.getElementsByClassName('p41')[0].innerText = "1.1) Write the short form (she's / we aren't, etc.)";
                    document.getElementsByClassName('p42')[0].innerText = "1.2) Write am, is or are";
                    document.getElementsByClassName('p43')[0].innerText = "1.3) Complete the sentences";
                    document.getElementsByClassName('p44')[0].innerText = "1.4) Look at Lisa's sentences in 1A. Now write sentences about yourself.";
                    document.getElementsByClassName('p45')[0].innerText = "1.5) Write sentences for the pictures. Use:";
                    document.getElementsByClassName('p46')[0].innerHTML = "afraid, angry, cold, hot, hungry, <s>thirsty</s>";
                    document.getElementsByClassName('p47')[0].innerText = "1.6) Write sentences, positive and negative. Use is/isn't or are/aren't.";
                    document.getElementsByClassName('p48')[0].innerText = "Write sentences, positive and negative. Use I'm/I'm not.";
                    document.getElementsByClassName('p49')[0].innerText = "Aditional exercise";
                    document.getElementsByClassName('p50')[0].innerText = "Evaluate answers";
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