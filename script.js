let iniciado = [];
let concluindo = [];
let concluido = [];

var coluna1 = document.getElementById('coluna1');
var coluna2 = document.getElementById('coluna2');
var coluna3 = document.getElementById('coluna3');

var i = 0;

function adicionarcard(id) {
  let coluna = 'coluna' + id;
  let card = document.createElement("div");
  card.setAttribute("id", "card" + i);
  card.setAttribute("class", 'cards');

  let tex = document.createElement("h4")
  let cont = document.createTextNode("Dê um título a sua tarefa:")
  tex.style.color = "black"
  tex.style.marginLeft = "1vh"
  tex.style.marginTop = "2vh"
  tex.appendChild(cont)
  card.appendChild(tex)

  let inp = document.createElement("input")
  inp.setAttribute("placeholder", "  Insira aqui o nome...");
  inp.setAttribute("id", "input" + i);
  inp.setAttribute("class", "forms");
  inp.style.width = "35vh";
  inp.style.marginLeft = "1vh";
  inp.style.marginTop = "2vh";
  card.appendChild(inp);

  let tex1 = document.createElement("h4")
  let cont1 = document.createTextNode("Descreva sua tarefa:")
  tex1.style.color = "black"
  tex1.style.marginLeft = "1vh"
  tex1.style.marginTop = "2vh"
  tex1.appendChild(cont1)
  card.appendChild(tex1)

  let inp1 = document.createElement("input")
  inp1.setAttribute("placeholder", "  Insira aqui a descriçaõ...");
  inp1.setAttribute("id", "input" + i);
  inp1.setAttribute("class", "forms");
  inp1.style.width = "35vh";
  inp1.style.marginLeft = "1vh";
  inp1.style.marginTop = "2vh";
  card.appendChild(inp1);

  let but = document.createElement("button")
  let texTag = document.createTextNode("OK")
  but.setAttribute('class', 'but_e_o');
  but.setAttribute("id", "button" + i)
  but.appendChild(texTag);

  let butExcluir = document.createElement("button");
  butExcluir.setAttribute('class', 'but_e_o');
  butExcluir.textContent = "Excluir";

  butExcluir.addEventListener("click", function() {
    card.remove();
  })

  but.addEventListener("click", function() {
    let texto = inp.value;
    let tagP = document.createElement("h3");
    tagP.style.marginLeft = "1vh";
    let node = document.createTextNode(texto);
    tagP.appendChild(node)
    tex.remove();
    inp.remove();
    card.appendChild(tagP);
    card.appendChild(document.createElement('br'));
    let texto2 = inp1.value;
    let tagP2 = document.createElement("p");
    tagP2.style.marginLeft = "1vh";
    let node2 = document.createTextNode(texto2);
    tagP2.appendChild(node2)
    tex1.remove();
    inp1.remove();
    but.remove();
    card.appendChild(tagP2);

    let divButColunas = document.createElement("div");
    divButColunas.setAttribute('class', 'divbut')

    let butiniciado = document.createElement("button");
    butiniciado.setAttribute('class', 'afazer_fazendo_concluido');

    let butconcluindo = document.createElement("button");
    butconcluindo.setAttribute('class', 'afazer_fazendo_concluido');

    let butconcluido = document.createElement("button");
    butconcluido.setAttribute('class', 'afazer_fazendo_concluido');

    butiniciado.textContent = "Fazer";
    butconcluindo.textContent = "Fazendo";
    butconcluido.textContent = "Concluida";

    butiniciado.addEventListener("click", function() {
      card.style.border = "white solid 2px";

      butiniciado.style.backgroundColor = "white";

      butconcluindo.style.backgroundColor = "white";

      butconcluido.style.backgroundColor = "white";

      butconcluido.style.border = "white solid 0vh";
      butExcluir.style.backgroundColor = "white";

      iniciado.push(card)
      coluna1.appendChild(card);
    });

    butconcluindo.addEventListener("click", function() {
      card.style.border = "#white solid 2px";

      butiniciado.style.backgroundColor = "#white";

      butconcluindo.style.backgroundColor = "#white";

      butconcluido.style.backgroundColor = "#white";

      butExcluir.style.backgroundColor = "#white";

      concluindo.push(card)
      coluna2.appendChild(card);
    });

    butconcluido.addEventListener("click", function() {
      card.style.border = "white solid 2px";

      butiniciado.style.backgroundColor = "white";

      butconcluindo.style.backgroundColor = "white";

      butconcluido.style.backgroundColor = "white";
      
      butExcluir.style.backgroundColor = "white";

      concluido.push(card)
      coluna3.appendChild(card);
    });

    divButColunas.appendChild(butiniciado);
    divButColunas.appendChild(butconcluindo);
    divButColunas.appendChild(butconcluido);
    card.appendChild(divButColunas);
    console.log(card);
  });

  card.appendChild(but)
  card.appendChild(butExcluir);

  switch(id){
      case 1:
        coluna1.appendChild(card);
        iniciado.push(card);
        console.log(iniciado);
        break;
      case 2:
        coluna2.appendChild(card);
        concluindo.push(card);
        console.log(concluindo);
        break;
      case 3:   
        coluna3.appendChild(card);
        concluido.push(card);
        console.log(concluido);
        break;
  }
  
  ++i;
}