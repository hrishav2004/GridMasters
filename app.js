const h1=document.querySelector("h1");
let a=1;
setInterval(()=>{
    if(a==1){
        h1.style.color=`rgb(${31}, ${108}, ${98})`;
        h1.style.textShadow=`${2}px ${2}px ${2.5}px rgb(${31}, ${108}, ${98})`;
        a++;
    }
    else{
        h1.style.color=`rgb(${205}, ${199}, ${12})`;
        h1.style.textShadow=`${2}px ${2}px ${2.5}px rgb(${205}, ${199}, ${12})`;
        a--;
    }
    
}, 1000)

let player=1;
let isComplete=false;

//initially disabled all buttons, will be enabled when the "play" button is pressed
for(let p=1; p<=3; p++){
    for(let q=1; q<=3; q++){
            document.querySelector(`#o${p}${q}`).disabled=true;
    }
}

function terminate(){
    changePlayer();
    if(player==1)
    document.querySelector("span").innerText=`${s1} has won the game!`;
    else
    document.querySelector("span").innerText=`${s2} has won the game!`;
        for(let p=1; p<=3; p++){
            for(let q=1; q<=3; q++){
                    document.querySelector(`#o${p}${q}`).disabled=true;
            }
        }
        isComplete=true;
        document.querySelector(".play-button").innerText="Replay"
        document.querySelector(".play-button").addEventListener("click", () =>{
            window.location.href = 'index.html';
        })
}

function changePlayer(){
    if(player==1){
        player=2;
        document.querySelector("span").innerText=s2+" goes";
    }
    else{
        player=1;
        document.querySelector("span").innerText=s1+" goes";
    }
}

const isDraw = ()=>{
    let draw=true;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(v[i][j]==-1)
                draw=false;
        }
    }
    //if the game ends in a draw
    if(draw){
        for(let p=1; p<=3; p++){
            for(let q=1; q<=3; q++){
                    document.querySelector(`#o${p}${q}`).disabled=true;
            }
        }
        document.querySelector(".badge.rounded-pill.text-bg-warning").innerText="The game has ended in a draw. Click Replay to play again.";
        document.querySelector(".play-button").innerText="Replay";
        isComplete=true;
        document.querySelector(".play-button").addEventListener("click", () =>{
            window.location.href = 'index.html';
        })
    }
}

function check(i, j, val){
    i--, j--;
    if(i==j){
        if(v[0][0]==v[1][1] && v[1][1]==v[2][2]){
            for(let p=1; p<=3; p++)
            document.querySelector(`#o${p}${p}`).style.backgroundColor="green";
        terminate();                                                            //to end the game if any of the player finishes the game
        }
    }
    if(v[i][0]==v[i][1] && v[i][1]==v[i][2]){
        for(let p=1; p<=3; p++)
            document.querySelector(`#o${i+1}${p}`).style.backgroundColor="green";
        terminate();                                                            //to end the game if any of the player finishes the game
    }
    else if(v[0][j]==v[1][j] && v[1][j]==v[2][j]){
        for(let p=1; p<=3; p++)
            document.querySelector(`#o${p}${j+1}`).style.backgroundColor="green";
        terminate();                                                            //to end the game if any of the player finishes the game
    }
    else if(v[2][0]==v[1][1] && v[1][1]==v[0][2] && v[1][1]!=-1){
        let q=3;
        for(let p=1; p<=3; p++){
            document.querySelector(`#o${p}${q}`).style.backgroundColor="green";
            q--;
        }
        terminate();                                                            //to end the game if any of the player finishes the game
    }
    else
    isDraw();
}

const pl11=document.querySelector("#o11");
const pl12=document.querySelector("#o12");
const pl13=document.querySelector("#o13");
const pl21=document.querySelector("#o21");
const pl22=document.querySelector("#o22");
const pl23=document.querySelector("#o23");
const pl31=document.querySelector("#o31");
const pl32=document.querySelector("#o32");
const pl33=document.querySelector("#o33");

let v=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];    //value is 0 if corresponding block is O, value is 1 if corresponding block is X
//button 11
pl11.addEventListener("click", ()=>{
    if(v[0][0]==-1){
    if(player==1){
        pl11.innerHTML="<big>O</big>"
        v[0][0]=0;
        changePlayer();
        check(1, 1, 0);
    }
    else{
        pl11.innerHTML="<big>X</big>"
        v[0][0]=1;
        changePlayer();
        check(1, 1, 1);
    }
}
})

//button 12
pl12.addEventListener("click", ()=>{
    if(v[0][1]==-1){
    if(player==1){
        pl12.innerHTML="<big>O</big>"
        v[0][1]=0
        changePlayer();
        check(1, 2, 0);
    }
    else{
        pl12.innerHTML="<big>X</big>"
        v[0][1]=1
        changePlayer();
        check(1, 2, 1);
    }
}
})

//button 13
pl13.addEventListener("click", ()=>{
    if(v[0][2]==-1){
    if(player==1){
        pl13.innerHTML="<big>O</big>"
        v[0][2]=0
        changePlayer();
        check(1, 3, 0);
    }
    else{
        pl13.innerHTML="<big>X</big>"
        v[0][2]=1
        changePlayer();
        check(1, 3, 1);
    }
}
})

//button 21
pl21.addEventListener("click", ()=>{
    if(v[1][0]==-1){
    if(player==1){
        pl21.innerHTML="<big>O</big>"
        v[1][0]=0
        changePlayer();
        check(2, 1, 0);
    }
    else{
        pl21.innerHTML="<big>X</big>"
        v[1][0]=1
        changePlayer();
        check(2, 1, 1);
    }
}
})

//button 22
pl22.addEventListener("click", ()=>{
    if(v[1][1]==-1){
    if(player==1){
        pl22.innerHTML="<big>O</big>"
        v[1][1]=0
        changePlayer();
        check(2, 2, 0);
    }
    else{
        pl22.innerHTML="<big>X</big>"
        v[1][1]=1
        changePlayer();
        check(2, 2, 1);
    }
}
})

//button 23
pl23.addEventListener("click", ()=>{
    if(v[1][2]==-1){
    if(player==1){
        pl23.innerHTML="<big>O</big>"
        v[1][2]=0
        changePlayer();
        check(2, 3, 0);
    }
    else{
        pl23.innerHTML="<big>X</big>"
        v[1][2]=1
        changePlayer();
        check(2, 3, 1);
    }
}
})

//button 31
pl31.addEventListener("click", ()=>{
    if(v[2][0]==-1){
    if(player==1){
        pl31.innerHTML="<big>O</big>"
        v[2][0]=0
        changePlayer();
        check(3, 1, 0);
    }
    else{
        pl31.innerHTML="<big>X</big>"
        v[2][0]=1
        changePlayer();
        check(3, 1, 1);
    }
}
})

//button 32
pl32.addEventListener("click", ()=>{
    if(v[2][1]==-1){
    if(player==1){
        pl32.innerHTML="<big>O</big>"
        v[2][1]=0
        changePlayer();
        check(3, 2, 0);
    }
    else{
        pl32.innerHTML="<big>X</big>"
        v[2][1]=1
        changePlayer();
        check(3, 2, 1);
    }
}
})

//button 33
pl33.addEventListener("click", ()=>{
    if(v[2][2]==-1){
    if(player==1){
        pl33.innerHTML="<big>O</big>"
        v[2][2]=0
        changePlayer();
        check(3, 3, 0);
    }
    else{
        pl33.innerHTML="<big>X</big>"
        v[2][2]=1
        changePlayer();
        check(3, 3, 1);
    }
}
})

let s1='', s2='';
const x=document.querySelector("#floatingInput")
// document.querySelector(".form-control").addEventListener("input", ()=>{s1=x.value; console.log(s1)})

x.addEventListener("input", () =>{
    s1=x.value;
})

const y=document.querySelector("#floatingPassword")

y.addEventListener("input", ()=>{
    s2=y.value;
})

const playBut=document.querySelector(".play-button")
playBut.addEventListener("click", ()=>{
    if(s1=='' || s2=='')    alert("Please enter both the player names!")

    else{
        if(!isComplete){
        for(let p=1; p<=3; p++){
            for(let q=1; q<=3; q++){
                    document.querySelector(`#o${p}${q}`).disabled=false;                             //buttons re-enabled on clicking play
            }
        }
        document.querySelector(".badge.rounded-pill.text-bg-warning").innerText=s1+" goes";
    }
    }
})