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
                "exercise" : "3.1",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["she's eating", "she`s eating", "she´s eating", "she is eating"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["'s waiting", "`s waiting", "´s waiting", "is waiting"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["'re playing", "`re playing", "´re playing", "are playing"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["he's lying", "he`s lying", "he´s lying", "he is lying"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["they're having", "they`re having", "they´re having", "they are having"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["she's sitting", "she`s sitting", "she´s sitting", "she is sitting"]
                    }
                ]
            },
            {
                "exercise" : "3.2",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["'m working", "´m working", "`m working", "am working"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["'s cooking", "´s cooking", "`s cooking", "is cooking"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["are standing", "'re standing", "´re standing", "`re standing"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["is swimming", "'s swimming", "´s swimming", "`s swimming"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["are staying", "'re staying", "´re staying", "`re staying"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["is having", "'s having", "´s having", "`s having"]
                    },
                    {
                        "sub_exercise" : 7,
                        "correct_answers" : ["are building", "'re building", "´re building", "`re building"]
                    },
                    {
                        "sub_exercise" : 8,
                        "correct_answers" : ["'m going", "´m going", "`m going", "am going"]
                    }
                ]
            },
            {
                "exercise" : "3.3",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["Jane isn't having dinner", "Jane isn´t having dinner", "Jane isn`t having dinner", "Jane is not having dinner"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["she's watching television", "she´s watching television", "she`s watching television", "she is watching television"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["'s sitting on the floor", "´s sitting on the floor", "`s sitting on the floor", "is sitting on the floor"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["she isn't reading a book", "she isn´t reading a book", "she isn`t reading a book", "she is not reading a book"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["she isn't playing the piano", "she isn´t playing the piano", "she isn`t playing the piano", "she is not playing the piano"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["she's laughing", "she´s laughing", "she`s laughing", "she is laughing"]
                    },
                    {
                        "sub_exercise" : 7,
                        "correct_answers" : ["she's wearing a hat", "she´s wearing a hat", "she`s wearing a hat", "she is wearing a hat"]
                    },
                    {
                        "sub_exercise" : 8,
                        "correct_answers" : ["she isn't writing a letter", "she isn´t writing a letter", "she isn`t writing a letter", "she is not writing a letter"]
                    }
                ]
            },
            {
                "exercise" : "3.4",
                "answers" : [
                    {
                        "sub_exercise" : 1,
                        "correct_answers" : ["i'm washing my hair", "i´m washing my hair", "i`m washing my hair", "i am washing my hair",
                                             "i'm not washing my hair", "i´m not washing my hair", "i`m not washing my hair", "i am not washing my hair"]
                    },
                    {
                        "sub_exercise" : 2,
                        "correct_answers" : ["it's snowing", "it´s snowing", "it`s snowing", "it is snowing"]
                    },
                    {
                        "sub_exercise" : 3,
                        "correct_answers" : ["it's not snowing", "it´s not snowing", "it`s not snowing", "it is not snowing",
                                             "it isn't snowing", "it isn´t snowing", "it isn`t snowing"]
                    },
                    {
                        "sub_exercise" : 4,
                        "correct_answers" : ["i'm sitting on a chair", "i´m sitting on a chair", "i`m sitting on a chair", "i am sitting on a chair",
                                             "i'm not sitting on a chair", "i´m not sitting on a chair", "i`m not sitting on a chair", "i am not sitting on a chair"]
                    },
                    {
                        "sub_exercise" : 5,
                        "correct_answers" : ["i'm eating", "i´m eating", "i`m eating", "i am eating",
                                             "i'm not eating", "i´m not eating", "i`m not eating", "i am not eating"]
                    },
                    {
                        "sub_exercise" : 6,
                        "correct_answers" : ["it's raining", "it´s raining", "it`s raining", "it is raining",
                                             "it's not raining", "it´s not raining", "it`s not raining", "it is not raining",
                                             "it isn't raining", "it isn´t raining", "it isn`t raining"]
                    },
                    {
                        "sub_exercise" : 7,
                        "correct_answers" : ["i'm learning english", "i´m learning english", "i`m learning english", "i am learning english",
                                             "i'm not learning english", "i´m not learning english", "i`m not learning english", "i am not learning english"]
                    },
                    {
                        "sub_exercise" : 8,
                        "correct_answers" : ["i'm listening to music", "i´m listening to music", "i`m listening to music", "i am listening to music",
                                             "i'm not listening to music", "i´m not listening to music", "i`m not listening to music", "i am not listening to music"]
                    },
                    {
                        "sub_exercise" : 9,
                        "correct_answers" : ["the sun's shining", "the sun´s shining", "the sun`s shining", "the sun is shining",
                                             "the sun's not shining", "the sun´s not shining", "the sun`s not shining", "the sun is not shining",
                                             "the sun isn't shining", "the sun isn´t shining", "the sun isn`t shining"]
                    },
                    {
                        "sub_exercise" : 10,
                        "correct_answers" : ["i'm wearing shoes", "i´m wearing shoes", "i`m wearing shoes", "i am wearing shoes",
                                             "i'm not wearing shoes", "i´m not wearing shoes", "i`m not wearing shoes", "i am not wearing shoes"]
                    },
                    {
                        "sub_exercise" : 11,
                        "correct_answers" : ["i'm reading a newspaper", "i´m reading a newspaper", "i`m reading a newspaper", "i am reading a newspaper",
                                             "i'm not reading a newspaper", "i´m not reading a newspaper", "i`m not reading a newspaper", "i am not reading a newspaper"]
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
        
    }
)