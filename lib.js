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