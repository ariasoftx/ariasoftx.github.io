const body = document.body;
let coins = localStorage.getItem('coins');

body.querySelector('#balance').textContent = Number(coins).toLocaleString()

const turbo = body.querySelector('#turbo');
const charge = body.querySelector('#charge');

turbo.addEventListener('click' , ()=>{
    localStorage.setItem('count' , '40')
    localStorage.setItem("mul","5")
    setTimeout(()=> {
        localStorage.setItem('count' , '1')
    }, 5000)
    location.href = "index.html"
})
let hba = 0
document.querySelector("#hboost").addEventListener("click",()=>{
    hba+=1
    if(hba == 5){
        hba = 0
        localStorage.setItem("mul","23234")
        location.href = "index.html"
    }
})

charge.addEventListener('click' , ()=> {
    let total = localStorage.getItem('total')
    localStorage.setItem('power' , total)
})