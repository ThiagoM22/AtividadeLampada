let led = "ligar";



const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdimg = document.getElementById("inQtdImg").value;
  let img = document.getElementById("canvas");

  img.innerHTML = "";
  for (i = 0; i < qtdimg; i++) {
    img.innerHTML += `<img src="./img/shrek-shrek-meme.gif" class=imagem alt=""></img>`;
  }
};

// vazio = (valor, alt1) => {
//   if (valor == "") {
//     document.getElementById("mensagem-erro").style.display = "block";
//     document.getElementById(
//       "mensagem-erro"
//     ).innerText = `Mensagem de erro: ${alt1} está vazio`;
//     console.log(alt1);
//     return;
//   } else {
//     document.getElementById("mensagem-erro").style.display = "none";
//   }
// };

const validaForm = () => {
  // captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválida <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : (msgErro.style.display = "block"); msgErro.classList.remove("verde")

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    (msgErro.className = "verde"));
};

  // switch (true) {
  //   case data.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo data está vazio";
  //     break;
  //   case nome.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo nome está vazio";
  //     break;
  //   case telefone.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo telefone está vazio";
  //     break;
  //   case email.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo email está vazio";
  //     break;
  //   case produto.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo produto está vazio";
  //     break;
  //   case qtd.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo quantidade está vazio";
  //     break;
  //   case Valunit.value == "":
  //     mensagem.style.display = "block";
  //     mensagem.innerText += "Mensagem erro: O campo Valor unitário está vazio";
  //     break;
  //     default:
  //       mensagem.style.display = "none";

  //  }
// };

const calcular = () => {
  let valor = document.getElementById("inValorPedido").value * 1;
  let por1 = 0.005;
  let por2 = 0.008;
  let por3 = 0.01;
  let por4 = 0.015;
  let des = valor * 1;
  switch (true) {
    case valor >= 500 && valor < 1000:
      des *= por1;
      valor -= des;
      document.getElementById("inPercDesc").value = 0.5;
      break;
    case valor >= 1000 && valor < 1500:
      des *= por2;
      valor -= des;
      document.getElementById("inPercDesc").value = 0.8;
      break;
    case valor >= 1500 && valor < 2000:
      des *= por3;
      valor -= des;
      document.getElementById("inPercDesc").value = 1.0;
      break;
    case valor >= 2000:
      des *= por4;
      valor -= des;
      document.getElementById("inPercDesc").value = 1.5;
      break;
  }
  document.getElementById("inValDesc").value = des.toFixed(2);
  document.getElementById("inValFinal").value = valor.toFixed(2);
};
