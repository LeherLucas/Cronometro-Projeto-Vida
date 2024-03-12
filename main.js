const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){ 
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");

        textos[i].classList.add("ativo");
    }
}
 
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-07-05T00:00:00");
const tempoObjetivo2 = new Date("2024-07-21T00:00:00");
const tempoObjetivo3 = new Date("2024-12-10T00:00:00");
const tempoObjetivo4 = new Date("2025-06-10T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo (tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0){
        return [dias, horas, minutos, segundos];
    }else{
        return [0, 0, 0, 0];
    }   
}

function atualizaCronometro(){
    for(let i = 0; i<contadores.length; i++){
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3]; 
    }
}

function comecaCronometro(){
atualizaCronometro();
setInterval(atualizaCronometro,1000);
}

comecaCronometro();


//contadores[i].textContent = calculaTempo(tempos[i]);

/* Criamos laço de repetição para que todos os botões adicionem a classe ativo
definimos i = 0, para o primeiro elemento da lista, depois colocamos a condção quando i for menor do que
o número de botões na lista, adicionamos 1 a essa variável*/

/*Adicionaremos uma função para que o botão mude a cor quando clicamos sobre ele, para isso adicionamos onclick
a const botoes e utilizamos uma função anônima, que a partir do classList e add, adiciona a class ativo
quando são clicados*/

/*Com os comandos acima, os botões ficam ativados quando precionamos outros botões, agora modificaremos isso
adicionando mais um for, agora com j=0 e com a opção de remover a class*/

/*Após criar uma div com a class contadores, criamos a const contadores e buscamos com o querySelectorAll,
para assim conseguirmos criar um cronômetro pelo JS. Devemos chamar a const contadores e depois adicionar
qual indice da lista queremos acessar, o primeiro item [0], segundo [1] e assim por diante*/

//utilizamos textContent para escrever algo a partir do JS

/*também cria-se a const tempoObjetivo1 para adicioanr a data limite que desejamos concluir os objetivos.
Para acertar na data, colocamos T após o dia seguido de 00:00:00, como nossa data limite, só que precisamos
criar o tempo passando, para isso usamos let, já que é uma variável que muda, para criar a variável
e subtrair com o tempo que falta, criando nosso cronômetro*/

/* O JS da o tempo em milisegundos, precisamos tratar esse dado. Criamos uma função para tratar os dados
então substituimos o tempoobjetivo e tempoatual pela função com os dois valores. Criamos a função calculaTempo
para calcular o tempo e depois tempoObjetivo como um paramêtro geral, que servira para calcular qualquer
tempo. Definimos o tempo final com uma operação matemática e também convertemos ms para s, dividindo
o tempoFinal por 1000. Também colocamos um "retorno" para aparecer na tela. Precisamos arredondar o tempo
pois está com três casas decimais, utilizamos Math.floor na divisão do tempoFinal. A partir do Math.floor
conseguimos retornar todos esse elementos/valores de minutos, s, h, dias, etc. Precisamos organizar o tempo
, ele não está somando corretamente os dias h, m, s com o resto, com o que sobra da divisão, para isso utilizamos
%= 60, pois pega o resto da divisão e arruma direitinho*/

/*Começaremos a adicionar o tempo nos outros botões, mas antes precisamos alterar as datas. Vamos criar mais
três constantes tempoObjetivo. Apos criar as outras const, poderiamos repetir um contador pra cada uma, mas queremos
evitar repetição de códigos. Vamos transformar const objetivo em uma lista, para podermos automatizar, para isso criar
a const tempo. Cria-se também um laço de repetição para melhorar a troca do tempo quando clicamos no botão.
Depois de colocado o tempo em todos os botões, faremos com que o cronômetro atualize sozinho, sem a necessidade
de ficar atualizando a página. Primeiro criamos a function atualiza cronomêtro, depois a chamamos e utilizamos
o comando setInterval, que possui dois parâmetros: setInterval(função(),1000), mas tiramos o () pq queremos
apenas chamar essa função e não retornar seus valores. 
Para organizar criamos a função comecaCronometro.
Criamosa função if para pensar num retorno de informação quando o prazo para alcançar as metas for finalizado
, para isso utilizamos o if e else com o tempoFinal<0 no parâmetro do for.*/

/*Criamos o id para cada digito para facilitar os prazos, ja que acada um representa uma coisa, como dia, horas
, minutos, segundos... . Quando utilizamos a função comecaCronometro toda estilização some e volta o cronometro
pois na função atualizaCronometro o contadores[i] altera todo conteudo que esta dentro da div contadores.*/