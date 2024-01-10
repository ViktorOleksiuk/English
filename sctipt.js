// Zmienne dla true oraz false licznika i dla Math random:
let tr = 0;
let fl = 0;
let c;

// Główna tablica zapytań:

const questionArrMain = [
    {
        questionArr: "Vegetables",
        options: ["Кімната", "Ванна кімната", "Спальня", "Овочі"],
        correctAnswer: "Овочі"
    },

    {
        questionArr: "Choose",
        options: ["Пропустити", "Працювати", "Танцювати", "Обирати"],
        correctAnswer: "Обирати"
    },
    {
        questionArr: 'Nice to meet you',
        options: ['Радий з вами познайомитися', 'Будь ласка', 'Нема за що', 'Вибачте'],
        correctAnswer: 'Радий з вами познайомитися'
    },
    {
        questionArr: 'Please speak more slowly',
        options: ['Говоріть будь ласка повільніше', 'Мене звати', 'Радий знайомству', 'Не розумію'],
        correctAnswer: 'Говоріть будь ласка повільніше'
    },
    {
        questionArr: 'Could you repeat that',
        options: ['Я шукаю', 'Радий знайомству', 'Як вас звати', 'Не могли б ви повторити'],
        correctAnswer: 'Не могли б ви повторити'
    },
    {
        questionArr: 'What is your name',
        options: ['Говоріть будь ласка повільніше', 'Не могли б ви повторити', 'Радий знайомству', 'Як вас звати'],
        correctAnswer: 'Як вас звати'
    },
    {
        questionArr: 'My name is',
        options: ['Радий знайомству', 'Не могли б ви повторити', 'Як вас звати', 'Мене звати'],
        correctAnswer: 'Мене звати'
    },
    {
        questionArr: 'Nice to meet you',
        options: ['Де', ' Я шукаю', 'Давай підемо в', 'Радий знайомству'],
        correctAnswer: 'Радий знайомству'
    },
    {
        questionArr: 'How are you doing',
        options: ['Радий знайомству', 'Давай підемо в', 'Не могли б ви повторити', 'Як справи'],
        correctAnswer: 'Як справи'
    },
    {
        questionArr: 'Can you help me',
        options: ['Я шукаю', 'Не могли б ви повторити', 'Давай підемо в', 'Не могли б ви мені допомогти'],
        correctAnswer: 'Не могли б ви мені допомогти'
    },
    {
        questionArr: 'Let’s go to ',
        options: ['Радий знайомству', 'Я шукаю', 'Не могли б ви повторити', 'Давай підемо в'],
        correctAnswer: 'Давай підемо в'
    },

    
]


    
// Pobieram wszystkie HTML elementy:

let question = document.querySelector('.question');
 let but1 = document.querySelector('#but1');
 let but2 = document.querySelector('#but2');
 let but3 = document.querySelector('#but3');
 let but4 = document.querySelector('#but4'); 
 let trueAnswer = document.querySelector('.trueAnswer'); 
 let falseAnswer = document.querySelector('.falseAnswer');    
 let bt = document.querySelectorAll('.but'); 
 
// Funkcja dla startu oraz restartu randomnego licznika:

function stRest() {

 let restartRandom = () => {
    let lengthMainArr = questionArrMain.length;
    return Math.floor(Math.random() * lengthMainArr)
 }
 
  c = restartRandom();
 


// Podmiana zawartości głównego pytania:
    question.innerHTML = questionArrMain[c].questionArr;

// Random dla podmiany zawartości wyboru odpowiedzi:
 let randomForButtons = Math.floor(Math.random() * 4) +1;

//  Podmiana zawartości odpowiedzi przy wyborze 1:
if(randomForButtons == 1){
     but1.innerHTML = questionArrMain[c].options[0];
     but2.innerHTML = questionArrMain[c].options[1];
     but3.innerHTML = questionArrMain[c].options[2];
     but4.innerHTML = questionArrMain[c].options[3];
}
//  Podmiana zawartości odpowiedzi przy wyborze 2:
if(randomForButtons == 2){
    but2.innerHTML = questionArrMain[c].options[0];
     but1.innerHTML = questionArrMain[c].options[1];
     but4.innerHTML = questionArrMain[c].options[2];
     but3.innerHTML = questionArrMain[c].options[3];
}
//  Podmiana zawartości odpowiedzi przy wyborze 3:
if(randomForButtons == 3){
    but4.innerHTML = questionArrMain[c].options[0];
     but2.innerHTML = questionArrMain[c].options[1];
     but3.innerHTML = questionArrMain[c].options[2];
     but1.innerHTML = questionArrMain[c].options[3];
}
//  Podmiana zawartości odpowiedzi przy wyborze 4:
if(randomForButtons == 4){
    but3.innerHTML = questionArrMain[c].options[0];
     but1.innerHTML = questionArrMain[c].options[1];
     but4.innerHTML = questionArrMain[c].options[2];
     but2.innerHTML = questionArrMain[c].options[3];
}


}
// Koniec funkcji startu:

stRest()
// Wywołanie funkce startu:


// Przeliczam wszystke przełączniky:
bt.forEach((item) => {
    item.addEventListener('click', function(event)  {

        // Prawdziwa odpowiedż:
        if(event.target.innerHTML == questionArrMain[c].correctAnswer){
            let m = event.target.id
            let t = document.querySelector('#'+ m);
            t.style.backgroundColor = 'green';
            tr++;
            trueAnswer.innerHTML = tr;
            setTimeout(()=> {
                but1.style.backgroundColor = 'unset';
                but2.style.backgroundColor = 'unset';
                but3.style.backgroundColor = 'unset';
                but4.style.backgroundColor = 'unset';
                stRest()
            }, 600)
            
            
        }
        // Zły wybór
        else{
            fl++;
            falseAnswer.innerHTML = fl;
           

            let m = event.target.id
            let t = document.querySelector('#'+ m);
            t.style.backgroundColor = 'red';
            
        }
    })

})



