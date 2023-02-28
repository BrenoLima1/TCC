// Espera o evento "deviceready" para garantir que o dispositivo esteja pronto
// document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("DOMContentLoaded", onDeviceReady, false);

// Função que é chamada quando o dispositivo está pronto
function onDeviceReady() {
    // Adiciona um ouvinte de eventos ao botão "Adicionar"
    document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);
}

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    // Obtém o texto da caixa de texto
    var texto = document.getElementById("txtTarefa").value;

    // Cria um novo elemento "li" para a tarefa
    var li = document.createElement("li");

    // Define o conteúdo do elemento "li" como o texto digitado
    li.appendChild(document.createTextNode(texto));

    // Adiciona o elemento "li" à lista de tarefas
    document.getElementById("listaTarefas").appendChild(li);

    // Limpa o campo de texto para o usuário adicionar outra tarefa
    document.getElementById("txtTarefa").value = "";
}
