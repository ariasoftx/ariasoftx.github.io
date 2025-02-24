const body = document.body;
const image = body.querySelector('#coin');
const h1 = body.querySelector('h1');

let coins = localStorage.getItem('coins');
let total = localStorage.getItem('total');
let power = localStorage.getItem('power');
let count = localStorage.getItem('count')

if(coins == null){
    localStorage.setItem('coins' , '0');
    h1.textContent = '0';
}else{
    h1.textContent = Number(coins).toLocaleString();
}

if(total == null){
    localStorage.setItem('total' , '500')
    body.querySelector('#total').textContent = '/500';
}else {
    body.querySelector('#total').textContent = `/${total}`;
}


if(power == null){
    localStorage.setItem('power' , '500');
    body.querySelector('#power').textContent = '500';
}else{
    body.querySelector('#power').textContent = power;
}


if(count == null){
    localStorage.setItem('count' , '1')
}
if(!localStorage.getItem("mul")){
    localStorage.setItem("mul","1")
}
if(localStorage.getItem("mul") == "5"){
    document.querySelector(":root").style.setProperty("--bgcolor","purple")
    document.querySelector(".adder").innerHTML="+5"
    setTimeout(()=>{
        localStorage.setItem("mul","1")
        document.querySelector(":root").style.setProperty("--bgcolor","aqua")
        document.querySelector(".adder").innerHTML="+1"
    },20000)
}
if(localStorage.getItem("mul") == "23234"){
    document.querySelector(":root").style.setProperty("--bgcolor","red")
    document.querySelector(".adder").innerHTML="+23234"
    setTimeout(()=>{
        localStorage.setItem("mul","1")
        document.querySelector(":root").style.setProperty("--bgcolor","aqua")
        document.querySelector(".adder").innerHTML="+1"
    },20000)
}
image.addEventListener('click' , (e)=> {

    let x = e.offsetX;
    let y = e.offsetY;


    navigator.vibrate(5);

    coins = localStorage.getItem('coins');
    power = localStorage.getItem('power');
    
    if(Number(power) > 0){
        localStorage.setItem('coins' , `${Number(coins) + 1 + parseInt(localStorage.getItem("mul"))}`);
        h1.textContent = `${(Number(coins) + 1).toLocaleString()}`;
        document.querySelector(".adder").style.display = "block"
        setTimeout(()=>{
            document.querySelector(".adder").style.display = "none"
        },250)
        localStorage.setItem('power' , `${Number(power) - 1}`);
        body.querySelector('#power').textContent = `${Number(power) - 1}`;
    } 

    if(x < 150 & y < 150){
        image.style.transform = 'translate(-0.25rem, -0.25rem) skewY(-10deg) skewX(5deg)';
    }
    else if (x < 150 & y > 150){
        image.style.transform = 'translate(-0.25rem, 0.25rem) skewY(-10deg) skewX(5deg)';
    }
    else if (x > 150 & y > 150){
        image.style.transform = 'translate(0.25rem, 0.25rem) skewY(10deg) skewX(-5deg)';
    }
    else if (x > 150 & y < 150){
        image.style.transform = 'translate(0.25rem, -0.25rem) skewY(10deg) skewX(-5deg)';
    }


    setTimeout(()=>{
        image.style.transform = 'translate(0px, 0px)';
    }, 100);

    body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
});

setInterval(()=> {
    count = localStorage.getItem('count')
    power = localStorage.getItem('power');
    if(Number(total) > power){
        localStorage.setItem('power' , `${Number(power) + Number(count)}`);
        body.querySelector('#power').textContent = `${Number(power) + Number(count)}`;
        body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
    }
}, 1000);

document.body.addEventListener("mousemove",(a)=>{
    let adder = document.querySelector(".adder")
    adder.style.top = a.clientY-70+"px"
    adder.style.left = a.clientX+0+"px"
})