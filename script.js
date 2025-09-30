
function verassing() {
    const berichten = [
        "✨ Je bent geweldig!",
    "🚀 De toekomst is van jou!",
    "🔥 Jij kan alles bereiken!",
    "🌟 Blijf altijd jezelf!"
    ];

    let randomIndex = Math.floor(Math.random() * berichten.length);
    document.getElementById("bericht").innerText = berichten[randomIndex];
}