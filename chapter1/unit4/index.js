var answers;

window.addEventListener("load",
    (event) => {

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
                "exercise" : "4.1",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["are you watching it?"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["are you going now?"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["is it raining?"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["are you enjoying the film?"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["is that clock working?"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["are you waiting for a bus?"]
                    }
                ]
            },
            {
                "exercise" : "4.2",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["are you reading?"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["is"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["going"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["are you eating"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["are you crying"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["are they looking at", "are they looking"]
                    },
                    {
                        "sub_exercise" : 7,
                        "correct_answers" : ["is he laughing"]
                    }
                ]
            },
            {
                "exercise" : "4.3",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["is paul working today"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["what are the children doing"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["are you listening to me"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["where are your friends going"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["are your parents watching television"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["what is jessica cooking"]
                    },
                    {
                        "sub_exercise" : 7,
                        "correct_answers" : ["why are you looking at me"]
                    },
                    {
                        "sub_exercise" : 8,
                        "correct_answers" : ["is the bus coming"]
                    }
                ]
            },
            {
                "exercise" : "4.4",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["no, i'm not", "no, i´m not", "no, i`m not", "no, i am not"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["no, i'm not", "no, i´m not", "no, i`m not", "no, i am not",
                                             "yes, i'm", "yes, i´m", "yes, i`m", "yes, i am"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["no, i'm not", "no, i´m not", "no, i`m not", "no, i am not",
                                             "yes, i'm", "yes, i´m", "yes, i`m", "yes, i am"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["no, it isn't", "no, it isn´t", "no, it isn`t", "no, it is not",
                                             "no, it's not", "no, it´s not", "no, it`s not",
                                             "yes, it's", "yes, it´s", "yes, it`s", "yes, it is"]                    
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["no, i'm not", "no, i´m not", "no, i`m not", "no, i am not",
                                             "yes, i'm", "yes, i´m", "yes, i`m", "yes, i am"]                    
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["no, i'm not", "no, i´m not", "no, i`m not", "no, i am not",
                                             "yes, i'm", "yes, i´m", "yes, i`m", "yes, i am"]                    
                    }
                ]
            }
        ]

        let game_selected_tile, game_tile_translation

        document.querySelector('#evaluate').addEventListener('click', event => {
            answers.forEach(json_element => {
                //Evaluar respuestas ingresadas.
                document.querySelectorAll('.answer').forEach(function(input) {
                    let inputExercise = input.dataset['exercise']//input.parentElement.parentElement.previousElementSibling.children[0].innerText.trim().split(")")[0] * 1;
                    let inputSubExercise = input.dataset['subexercise']//input.parentElement.firstChild.innerText.trim().split(")")[0] * 1;
                    let canEvaluateAnswer = inputExercise != undefined && inputSubExercise != undefined && answers != undefined
                    
                    if(canEvaluateAnswer){
                        if(json_element.exercise == inputExercise){
                            json_element.answers.forEach(answer => {
                                if(answer.sub_exercise == inputSubExercise){
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

        document.getElementById('nouns').innerText = document.querySelectorAll('.ficha.noun').length / 2;
        document.getElementById('verbs').innerText = document.querySelectorAll('.ficha.verb').length / 2;
        document.getElementById('words').innerText = document.querySelectorAll('.ficha.word').length / 2;
        document.querySelectorAll('.ficha').forEach(element => {
            element.addEventListener('click', event => {
                //Evaluar si la ficha elegida anteriormente es la pareja de la actual.
                if(game_selected_tile == event.target.dataset.pair || game_tile_translation == event.target.innerText){
                    //Buscar ambas fichas y eliminarlas.
                    document.querySelectorAll('.ficha.elegida').forEach(elementToRemove => {
                        elementToRemove.remove()
                    })
                    element.remove();
                    //Decrementar contador de fichas.
                    if(element.classList.contains('noun')){
                        document.getElementById('nouns').innerText = document.getElementById('nouns').innerText*1 - 1;
                        if(document.getElementById('nouns').innerText == "0"){
                            document.getElementById('nouns').parentElement.parentElement.parentElement.classList.remove('alert-danger')
                            document.getElementById('nouns').parentElement.parentElement.parentElement.classList.add('alert-success')
                        }
                    }
                    if(element.classList.contains('verb')){
                        document.getElementById('verbs').innerText = document.getElementById('verbs').innerText*1 - 1;
                        if(document.getElementById('verbs').innerText == "0"){
                            document.getElementById('verbs').parentElement.parentElement.parentElement.classList.remove('alert-danger')
                            document.getElementById('verbs').parentElement.parentElement.parentElement.classList.add('alert-success')
                        }
                    }
                    if(element.classList.contains('word')){
                        document.getElementById('words').innerText = document.getElementById('words').innerText*1 - 1;
                        if(document.getElementById('words').innerText == "0"){
                            document.getElementById('words').parentElement.parentElement.parentElement.classList.remove('alert-danger')
                            document.getElementById('words').parentElement.parentElement.parentElement.classList.add('alert-success')
                        }
                    }
                } else {
                    //Obtener datos de la ficha y su correspondiente traducción, o viceversa.
                    game_selected_tile = event.target.innerText
                    game_tile_translation = event.target.dataset.pair
                    //Quitar clase elegida a la ficha que la tenga.
                    document.querySelectorAll('.ficha.elegida').forEach(element => {
                        element.classList.remove('elegida')
                    })
                    //Agregar clase elegida a la actual clickeada.
                    event.target.classList.add('elegida')
                }
            })
        })

    }
)