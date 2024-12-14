let blink = true
let solver = true

if (solver == true) {
    document.querySelector(".logo").src = "AbsoluteSolverIcon.svg"
    document.querySelector(":root").style.setProperty("--text", "#ffc500")
}
setInterval(() => {
    if (blink == true) {
        document.querySelector(".cursor").style.opacity = "0"
        blink = false
    } else {
        document.querySelector(".cursor").style.opacity = "1"
        blink = true
    }
}, 300)
async function sleep(dur) {
    return new Promise((resolve) => { setTimeout(resolve, dur) })
}
let tty = document.querySelector(".tty")
async function ttyPrint(txt) {
    for (let i = 0; i < txt.length; i++) {
        await sleep(10);
        if (txt[i] == "\n") {
            tty.innerHTML += "<br>"
        } else {
            tty.innerHTML += txt[i]
        }
    }
}
async function ttyNPrint(txt) {
    txt.split("\n").forEach((v) => {
        tty.innerHTML += v + "<br>"
    })
}
async function ttySNPrint(txt, dur) {
    await sleep(dur)
    txt.split("\n").forEach((v) => {
        tty.innerHTML += v + "<br>"
    })
}
function ttyClear() {
    tty.innerHTML = ""
}
function ASe8Encode(inpt){
    let f = ""
    let enc = new TextEncoder().encode(inpt).forEach((e)=>{
        f+=e+"-"
    })
    return f.slice(0,-1)
}
function ASe8Decode(inpt){
    let arr = []
    inpt.split("-").forEach((e)=>{
        arr.push(Number(e))
    })
    let denc = new TextDecoder().decode(new Uint8Array(arr))
    return denc
}
function getCookieValue(name){
    let rt = ""
    document.cookie.split(";").forEach((v)=>{
        let k = v.split("=")
        if(k[0] == name){
            rt = k[1]
        }
    })
    return rt
}
