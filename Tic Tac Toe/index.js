//take all the boxes
let turn = "X";
let c=0;
let gameover=false;
let click=new Audio('click_sound.mp3');
let gmusic=new Audio('gamemusic.mp3');
let draw = new Audio('draw.mp3');
let gwin = new Audio('gwin.mp3');

gmusic.play();

console.log("HI Welcome to the game");
//change the turn
const changeTurn = ()=>{
    return turn==="X"?"O":"X";
}

const checkforwin = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let boxes = document.querySelectorAll('.boxtext');

    wins.forEach(win => {
        if(boxes[win[0]].innerHTML===boxes[win[1]].innerHTML && boxes[win[2]].innerHTML===boxes[win[1]].innerHTML && boxes[win[0]].innerHTML!=="")
        {
        
            
            gameover = true;
            document.querySelector('.turninfo').style.color = "Green";
            document.querySelector('.turninfo').innerHTML = boxes[win[0]].innerHTML + " Won";
            document.querySelector('.winig').getElementsByTagName('img')[0].style.width="560px";
            gmusic.pause();
            gwin.play();
            return true;
        }
    });
    return false;

}

let btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    gwin.pause();
    draw.pause();
    click.play();
    gmusic.play();
    let boxes = document.querySelectorAll('.boxtext');
    Array.from(boxes).forEach( element => {
        element.innerHTML="";
        gameover=false;
        c=0;
        document.querySelector('.turninfo').innerHTML = "Turn for X"
        turn ="X";
        document.querySelector('.winig').getElementsByTagName('img')[0].style.width = "0px";
        document.querySelector('.turninfo').style.color = "Black";

    })
})

let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerHTML=== "")
    {
        
        if(gameover===false)
        {
        boxtext.innerHTML=turn;
        click.play();
        c+=1;
        
        turn = changeTurn();
        let x = document.querySelector('.turninfo');
        
        x.innerHTML="Turn for " + turn;
        checkforwin();
        
        if(c==9 && gameover==false)
        {
            document.querySelector('.turninfo').innerHTML="Draw";
            gmusic.pause();
            draw.play();
        }
    }
   
    }     
    })
    
})
