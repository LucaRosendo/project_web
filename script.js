let colunaAFazer = [];
let colunaFazendo = [];
let colunaConcluida = [];

var coluna1 = document.getElementById('coluna1');
var coluna2 = document.getElementById('coluna2');
var coluna3 = document.getElementById('coluna3');

var i = 0;

function adicionarcard(id) {
  let coluna = 'coluna' + id;
  let card = document.createElement("div");
  card.setAttribute("id", "card" + i);
  card.setAttribute("class", 'cards');

  let tex = document.createElement("h5")
  let cont = document.createTextNode("Descreva sua tarefa:")
  tex.style.color = "black"
  tex.style.marginLeft = "1vh"
  tex.style.marginTop = "2vh"
  tex.appendChild(cont)
  card.appendChild(tex)

  let inp = document.createElement("input")
  inp.setAttribute("placeholder", "Insira aqui sua tarefa. ");
  inp.setAttribute("id", "input" + i);
  inp.style.width = "35vh";
  inp.style.marginLeft = "1vh";
  inp.style.marginTop = "2vh";
  card.appendChild(inp);

  let but = document.createElement("button")
  let texTag = document.createTextNode("OK")
  but.setAttribute("id", "button" + i)
  but.appendChild(texTag);
  but.style.marginLeft = "1vh"
  but.style.height = "3vh"
  but.style.backgroundColor = "white"
  but.style.border = "white solid 0vh"

  let butExcluir = document.createElement("button");
  butExcluir.style.margin = "1vh"
  butExcluir.textContent = "Excluir";
  butExcluir.style.height = "3vh";
  butExcluir.style.backgroundColor = "white";
  butExcluir.style.border = "white solid 0vh";

  butExcluir.addEventListener("click", function() {
    card.remove();
  })

  but.addEventListener("click", function() {
    let texto = inp.value;
    let tagP = document.createElement("p");
    tagP.style.marginLeft = "1vh";
    tagP.style.color = "darkblue";
    let node = document.createTextNode(texto);
    tagP.appendChild(node)
    tex.remove();
    inp.remove();
    but.remove();
    card.appendChild(tagP);

    let divButColunas = document.createElement("div");
    divButColunas.style.display = "flex";
    divButColunas.style.flexDirection = "row";

    let butAFazer = document.createElement("button");
    butConcluido.setAttribute('class', 'afazer_fazendo_concluido');

    let butFazendo = document.createElement("button");
    butConcluido.setAttribute('class', 'afazer_fazendo_concluido');

    let butConcluido = document.createElement("button");
    butConcluido.setAttribute('class', 'afazer_fazendo_concluido');

    butAFazer.textContent = "Fazer";
    butFazendo.textContent = "Fazendo";
    butConcluido.textContent = "Concluida";

    butAFazer.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaAFazer.push(card)
      coluna1.appendChild(card);
    });

    butFazendo.addEventListener("click", function() {
      card.style.border = "#D8B4AD solid 1vh";
      butAFazer.style.backgroundColor = "#D8B4AD";
      butAFazer.style.border = "#D8B4AD solid 0vh";
      butFazendo.style.backgroundColor = "#D8B4AD";
      butFazendo.style.border = "#D8B4AD solid 0vh";
      butConcluido.style.backgroundColor = "#D8B4AD";
      butConcluido.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.border = "#D8B4AD solid 0vh";
      butExcluir.style.backgroundColor = "#D8B4AD";
      colunaFazendo.push(card)
      coluna2.appendChild(card);
    });

    butConcluido.addEventListener("click", function() {
      card.style.border = "white solid 1vh";
      butAFazer.style.backgroundColor = "white";
      butAFazer.style.border = "white solid 0vh";
      butFazendo.style.backgroundColor = "white";
      butFazendo.style.border = "white solid 0vh";
      butConcluido.style.backgroundColor = "white";
      butConcluido.style.border = "white solid 0vh";
      butExcluir.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";
      colunaConcluida.push(card)
      coluna3.appendChild(card);
    });

    divButColunas.appendChild(butAFazer);
    divButColunas.appendChild(butFazendo);
    divButColunas.appendChild(butConcluido);
    card.appendChild(divButColunas);
    console.log(card);
  });

  card.appendChild(but)
  card.appendChild(butExcluir);

  switch(id){
      case 1:
        coluna1.appendChild(card);
        colunaAFazer.push(card);
        console.log(colunaAFazer);
        break;
      case 2:
        coluna2.appendChild(card);
        colunaFazendo.push(card);
        console.log(colunaFazendo);
        break;
      case 3:   
        coluna3.appendChild(card);
        colunaConcluida.push(card);
        console.log(colunaConcluida);
        break;
  }
  
  ++i;
}