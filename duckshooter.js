let duck1 = document.querySelector('#duck1');
let blood = document.querySelector('#blood');
let mainscene = document.querySelector('#mainscene');
let body =document.querySelector('body');
let check =0;
let ps = document.querySelector('#ps');
let hs = document.querySelector('#hs');
console.log(ps,hs)
let timer = document.querySelector('#timer');
let score = document.querySelector('#score');
let life = document.querySelector('#life');
let hscore = document.querySelector('#hscore');
let gs2 = document.querySelector('#gs2');
let gs1 = document.querySelector('#gs1');
let gs3 = document.querySelector('#gs3');
let simg = document.querySelector('#simg');
let rimg = document.querySelector('#rimg');
mainscene.addEventListener('click',()=>{ // bg1
    console.log(typeof(life.innerHTML) , score ,hscore);
    if(check ==0){
    score.innerHTML = eval(score.innerHTML)-1;
    body.style.backgroundColor = 'red';
    check=0;
    life.innerHTML = eval(life.innerHTML) -1;
    setTimeout(()=>{
    body.style.backgroundColor ="cornflowerblue"
    },500)}
})
duck1.addEventListener('click', () => { //duck
    console.log(life.innerHTML , score.innerHTML, hscore.innerHTML);
    score.innerHTML = eval(score.innerHTML)+1;
    body.style.backgroundColor = "green";
    blood.style.top = duck1.style.top;
    blood.style.left = duck1.style.left;
    blood.style.display = 'block';
    blood.style.opacity = 1;
    check=1;
    let top = Math.floor(Math.random() * 80);
    let left = Math.floor(Math.random() * 80);
    console.log("clicked");
    duck1.src = "duck1death-png-20129-removebg-preview.png";
    setTimeout(() => {
        duck1.style.top = top + "%";
        duck1.style.left = left + "%";
        duck1.src = "duck-png-20129.png";
        blood.style.opacity = 0;
        blood.style.display = 'none';
        body.style.backgroundColor ="cornflowerblue";
        check=0;
    }, 500);
});
setInterval(()=>{timer.innerHTML-=1},1000);
setInterval(()=>{ // timer here with condition of stoping
    if(life.innerHTML=='0' || timer.innerHTML=='0'){
    if( eval(hscore.innerHTML) < eval(score.innerHTML))
    {hscore.innerHTML =score.innerHTML;};
     hs.innerHTML =hscore.innerHTML;
     console.log(hscore.innerHTML);
     ps.innerHTML= score.innerHTML;
     console.log(score.innerHTML);
     gs2.style.display = 'none';
     gs3.style.display = 'block';
     
     score.innerHTML=0;
     life.innerHTML=3;
     timer.innerHTML=100;
    }
},100);
simg.addEventListener('click',()=>{
    gs1.style.display ='none';
    gs2.style.display ='block';
});
rimg.addEventListener('click',()=>{
    gs1.style.display='block';
    gs3.style.display='none';
})