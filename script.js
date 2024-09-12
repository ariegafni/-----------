let currentPlayer =1;//שחקן נוכחי
let currentScore =[0,0];//ציון נוכחי
let totalWins =[0,0];//נשמר בלוקאל סטורג
let timer =10;//טיימר
let winningScor=0;//זה היעד שצריך להגיע אליו מתקבל מהינפוט
let gameActive = false;
//---------------------------------------------------------
let gameGtatus = document.querySelector('#game-status')
let turnIndicator = document.querySelector('.turn-indicator')//עיגול של1
let turnIndicator2 = document.querySelector('.turn-indicator2')//עיגול של2
let score1 = document.querySelector('#score-1')//ניצחון 1
let total1 = document.querySelector('#total-1')//טוטל 2
let timer1 = document.querySelector('#timer-1')//טיימר 1

let score2 = document.querySelector('#score-2')//ניצחון 2
let total2 = document.querySelector('#total-2')//טוטאל 2
let timer2 = document.querySelector('#timer-2')//טיימר 2

let winningScore = document.querySelector('#winning-score')//ניקוד ניצחון
let dice1 = document.querySelector('#dice-1')//קוביה 1
let dice2 = document.querySelector('#dice-2')//קוביה 2
let rollDiceBTN = document.querySelector('#roll-dice')//כפתור זרוק קוביה
let newGameBTN = document.querySelector('#new-game')//כפתור משחק חדש

let playercolor1 =document.querySelector('#player player-1')
let playercolor2 =document.querySelector('#player player-2')

let sumDice1 = 0;
let sumDice2 = 0;

let stam1 =0//מחזיק זמני לצבירה של 
let stam2 =0

let countTime1 =10;
let countTime2 =10;


function timerfun1(){
    const timefunc = setInterval(()=>{
        if(countTime1 >=0){
            timer1.textContent = countTime1;
            countTime1--;
        }
        else{
            clearTimeout(timefunc);
            timer1.textContent= 'time\'s up!  ';
            countTime1 =10
            
        }
    },1000)
}
function timerfun2(){
    const timefunc1 = setInterval(()=>{
        if(countTime2 >=0){
            timer2.textContent = countTime2;
            countTime2--;
        }
        else{
            clearTimeout(timefunc1);
            timer2.textContent= 'time\'s up!  ';
            countTime2 =10;
        }
    },1000)
}




rollDiceBTN.addEventListener('click',function(){
    diceFun();
    if(currentPlayer===1)
        {
            timerfun1()
            score1.textContent = sumDice1;
            turnIndicator.style.display='block';
            turnIndicator2.style.display='none';
            currentPlayer=2 
                    
        }
    else 
        {
            timerfun2()
            score2.textContent = sumDice2;
            turnIndicator2.style.display='block';
            turnIndicator.style.display='none';
            currentPlayer=1;
             
        }
    addVictory();
     

})

function diceFun(){
    x=Math.floor(Math.random() * 6) + 1;
    y=Math.floor(Math.random() * 6) + 1;

    dice1.textContent = x;
    dice2.textContent = y;

    if(currentPlayer===1){sumDice1 += (x+y);}
    else sumDice2 +=(x+y);

     
     

}

function addVictory()
{
    if(sumDice1>=winningScore.value){
        stam1+=1;
        total1.textContent= stam1;
        sumDice1=0;
        sumDice2=0;

    }
    
      if(sumDice2>=winningScore.value){
        stam2+=1;
        total2.textContent= stam2;
        sumDice2=0;
        sumDice1=0;
    }

}

function checkScore() {
    let inputScore = document.getElementById("winning-score").value;    
    inputScore = Number(inputScore);

}

newGameBTN.addEventListener('click',function(){

    location.reload(); 
    
})


// const userArr =['yosef',25]//מכריז על משתנה שמחזיק מערך
// localStorage.setItem('user',JSON.stringify(userArr));//שולח אותו עם השם יוזר ללוקאל סטוראז
// const userData =JSON.parse(localStorage.getItem('user'));//מכריז על משתנה חדש שמקבל את אותו יוזר מהלוקאל סטוראז
// console.log(userData)//סתם הדפסתי אותו
// localStorage.removeItem('user');//מוחק אותו
// localStorage.clear();//מוחק את כל הלוקאל סטורז
// const userWin =['total win:',total1.value]
// localStorage.setItem('total1',JSON.stringify(total1));