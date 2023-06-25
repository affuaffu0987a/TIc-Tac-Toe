console.log("Play the TicTocToe game");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let Turn = "X";

// function to change the turn
const changeTurn = () => {
  return Turn === "X" ? "O" : "X";
};

// function to check for win7

const CheckWin = () => {
    let boxes=document.getElementsByClassName('boxText')
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach((e)=>{
        if(boxes[e[0]].innerText===boxes[e[1]].innerText && boxes[e[2]].innerText===boxes[e[1]].innerText && boxes[e[0]].innerText!==""){
            document.getElementsByClassName("turn")[0].innerText=boxes[e[0]].innerText +""+ "Won";
            gameover.play();
            document.querySelector(".imgs").getElementsByTagName('img')[0].style.width="200px";
        }
    })
};

// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = Turn;
      Turn= changeTurn();
      audioturn.play();
      document.getElementsByClassName('turn')[0].innerText="Turn for" + Turn;
      CheckWin();
    
    }
  });
});

//Reset button

// let Resets=document.getElementsByClassName("Reset")
Reset.addEventListener("click",()=>{
  let boxtext = document.querySelectorAll(".boxText");
  Array.from(boxes).forEach((e)=>{
    e.innerText="";    
  })
  Turn="X"
  document.getElementsByClassName('turn')[0].innerText="Turn for" + Turn;
  document.querySelector(".imgs").getElementsByTagName('img')[0].style.width="0";
})