// OR (||) nosso boneco so pode sair se não estiver chovendo OU com guarda chuva

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log("Nosso personagem pode sair ? " + podeSair)
