// Variáveis globais
var valorDisplay = "";
var valorResultado = "";

// Função para limpar o display e o resultado
function limpar() {
  valorDisplay = "";
  valorResultado = "";
  atualizarDisplay();
  atualizarResultado();
}

// Função para apagar o último caractere do display
function apagar() {
  valorDisplay = valorDisplay.slice(0, -1);
  atualizarDisplay();
}

// Função para adicionar um valor ao display
function adicionarValor(valor) {
  valorDisplay += valor;
  atualizarDisplay();
}

// Função para adicionar um ponto decimal ao display
function adicionarPonto() {
  if (valorDisplay.indexOf(".") == -1) {
    valorDisplay += ".";
    atualizarDisplay();
  }
}

// Função para calcular a expressão e exibir o resultado
function calcular(operador) {
  switch (operador) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      valorDisplay += operador;
      break;
    case "=":
      valorResultado = eval(valorDisplay);
      atualizarResultado();
      break;
  }
}

// Função para atualizar o display
function atualizarDisplay() {
  document.getElementById("display").innerHTML = valorDisplay;
}

// Função para atualizar o resultado
function atualizarResultado() {
  document.getElementById("resultado").innerHTML = valorResultado;
}