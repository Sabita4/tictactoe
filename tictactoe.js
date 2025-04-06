let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let messagecontainer=document.querySelector(".message-container");
let mesage=document.querySelector("#message");

// let arr=[["apple","mango"],["potato","mushroom"]];//2d array
// console.log(arr);
let turn0 = true; //playerx,player0  
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    messagecontainer.classList.add("hide");
}


boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clicked");
    if (turn0){
        //player0
        box.innerText="0";
        turn0=false;
    }
    else{
        //playerx
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
})
});
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
// const disableBoxes=()=>{
//     for(let box of boxes){
//         box.disabled=true;
//     }
// }
const showWinner=(winner)=>{
    message.innerText=`CONGRATULATION,Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
}
const checkWinner=()=>{
for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText);
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!=="" &&pos2Val!==""&&pos3Val!==""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
    }
}

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);