let meme=document.getElementById("meme");
let title=document.getElementById("title");
let  btn=document.getElementById("btn");

let url="https://meme-api.com/gimme";


let sub=["catmemes","wholesomemes","dogmemes","me-irl"];

let getmeme=()=>{
    let randomsub=sub[Math.floor(Math.random()*sub.length)];
    //fetching the data
    fetch(url)
    .then((Response)=>Response.json())
    .then((result)=>{
        console.log(result)
    let memeimg=new Image();
    memeimg.onload=()=>{
        meme.src=result.url;
        title.innerHTML=result.title
    };
    memeimg.src=result.url;
    console.log(randomsub);
});

};
btn.addEventListener("click",getmeme);
window.addEventListener("load",getmeme);