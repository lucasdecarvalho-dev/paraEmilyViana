var qtd = 0;

function trocarTexto() {
    if(qtd%2 == 0){
        document.getElementById('text').innerHTML = "Nem 1 milhão de linhas de código seriam capazes de registrar o amor que sinto por você, linda <3";
        document.getElementById('button').innerHTML = "- Clique neste botão para ler a mensagem inicial -";
    } else {
        document.getElementById('text').innerHTML = "<span>Feliz Dia dos Namorados</br>para o AMOR da minha vida todinha! Emily C. Viana &#10084;";
        document.getElementById('button').innerHTML = "- Clique neste botão para ler a mensagem secreta -";
    }
    qtd++;
}