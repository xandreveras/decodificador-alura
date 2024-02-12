function exibirTelaInicial() {
  document.getElementById("janelaResultado").setAttribute("hidden", true);
  document.getElementById("janelaApresentacao").removeAttribute("hidden");
}

function exibirTelaFinal() {
  document.getElementById("janelaApresentacao").setAttribute("hidden", true);
  document.getElementById("janelaResultado").removeAttribute("hidden");
}


function criptografar() {
  let mensagemOriginal = document.querySelector("textarea").value;
  let mensagemArray = mensagemOriginal.split("");
  let mensagemFinal = "";
  for (let i = 0; i < mensagemArray.length; i++) {
    let letra = mensagemArray[i];
    switch (letra) {
      case "a":
        letra = "ai";
        break;
      case "e":
        letra = "enter";
        break;
      case "i":
        letra = "imes";
        break;
      case "o":
        letra = 'ober';
        break;
      case 'u':
        letra = 'ufat';
        break;
      default:
        letra;
        break;
    }
    mensagemFinal = mensagemFinal + letra;
  }
  exibirTelaFinal();
  document.getElementById('resultado').innerText = mensagemFinal;
}

function descriptografar() {
  let mensagemOriginal = document.querySelector("textarea").value;
  let mensagemFinal = mensagemOriginal.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
  exibirTelaFinal();
  document.getElementById("resultado").innerText = mensagemFinal;
}

function copiarTexto() {
  let texto = document.getElementById("resultado");
  navigator.clipboard.writeText(texto.innerText);
}


//desabilita o botão no início
document.getElementById("criptografar").disabled = true;
document.getElementById("descriptografar").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("mensagem").addEventListener("input", function (event) {
  //busca conteúdo do input
  let conteudo = document.getElementById("mensagem").value;

  //valida conteudo do input
  if (conteudo !== null && conteudo !== "") {
    //habilita o botão
    document.getElementById("criptografar").disabled = false;
    document.getElementById("descriptografar").disabled = false;
  } else {
    //desabilita o botão se o conteúdo do input ficar em branco
    document.getElementById("criptografar").disabled = true;
    document.getElementById("descriptografar").disabled = true;
    exibirTelaInicial();
  }
});
