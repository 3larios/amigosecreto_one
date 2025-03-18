let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();
    if (amigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    amigos.push(amigo);
    atualizarLista();
    input.value = "";
}
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "Amigo sorteado: " + sorteado;
}
