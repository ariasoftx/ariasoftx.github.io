function lp(node,page){
    let p = document.querySelector(node)
    fetch(page).then(e=>e.text()).then(v=>p.innerHTML = v)
}
let motd = [
    "easy game, easy life.",
    "hello world!",
    "BITE ME",
    "and yet. i still feel nothing...",
    "CALLBACK PING",
    "Deus Vult",
    "RIP Tessa",
    "smd",
    "dont tell me what to do!",
    "my crazed ramblings GET OUT MY ROOM!",
    ":3",
    "how did V survive the sentinels???"
]
document.querySelector("#motd").innerHTML = motd[Math.floor(Math.random()*10 % motd.length)]
lp("#body","pages/home.html")
document.querySelectorAll("a").forEach((n)=>{
    if(n.hasAttribute("page") && n.getAttribute("page") != ""){
        n.addEventListener("click",()=>{
            lp("#body",n.getAttribute("page"))
        })
    }
})