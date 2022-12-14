function calcular(tipo) {
  const capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  const quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  const taxaJurosPoupanca = Number(document.getElementById('taxaJurosPoupanca').value);
  const taxaCDB = Number(document.getElementById('taxaCDB').value);
  const taxaDI = Number(document.getElementById('taxaDI').value);
  const taxaLCI = Number(document.getElementById('taxaLCI').value);

  if (tipo === 'poupanca') {
    calcularPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses);
    return;
  }

  if (tipo === 'LCI') {
    calcularLCI(capitalInvestido, taxaDI, taxaLCI, quantidadeMeses);
    return;
  }

  if (tipo === 'CDB') {
    calcularCDB(capitalInvestido, taxaDI, taxaCDB, quantidadeMeses);
    return;
  }

  calcularPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses);
  calcularLCI(capitalInvestido, taxaDI, taxaLCI, quantidadeMeses);
  calcularCDB(capitalInvestido, taxaDI, taxaCDB, quantidadeMeses);
}

function calcularMeses(quantidadeMeses) {
  return quantidadeMeses / 12;
}

function calcularCDB(capitalInvestido, taxaDI, taxaCDB, quantidadeMeses) {
  
  const jurosCompostosCDB = (1 + ((taxaCDB / 100) * taxaDI));
  const periodoCDB = calcularMeses(quantidadeMeses);
  const resultadoFinalCDB = Math.pow(jurosCompostosCDB, periodoCDB) - 1;

  const rendimentoCDBBruto = capitalInvestido * resultadoFinalCDB;
  const rendimentoCDBLiquido = calcularCDBLiquido(rendimentoCDBBruto, quantidadeMeses)
  
  const montanteFinalCDB = capitalInvestido + rendimentoCDBLiquido;
  resultadoCDB = document.getElementById('montanteCDB');
  resultadoCDB.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montanteFinalCDB));
}

function calcularCDBLiquido(rendimentoCDBBruto, quantidadeMeses) {
  if (quantidadeMeses <= 6) {
    return rendimentoCDBBruto * 0.775;
  }

  if (quantidadeMeses > 6 && quantidadeMeses <= 12) {
    return rendimentoCDBBruto * 0.8;
  }

  if (quantidadeMeses > 12 && quantidadeMeses <= 24) {
    return rendimentoCDBBruto * 0.825;
  }

  return rendimentoCDBBruto * 0.85;
}

function calcularPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses) {
  const poupanca1 = (1 + taxaJurosPoupanca / 100);
  const poupanca2 = calcularMeses(quantidadeMeses);
  const poupanca3 = Math.pow(poupanca1, quantidadeMeses);

  const montantePoupanca = capitalInvestido * poupanca3;
  
  resultadoPoupanca = document.getElementById('montantePoupanca');
  resultadoPoupanca.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montantePoupanca));
}

function calcularLCI(capitalInvestido, taxaDI, taxaLCI, quantidadeMeses) {
  const lci1 = (1 + (taxaLCI / 100) * taxaDI);
  const lci2 = calcularMeses(quantidadeMeses);
  const lci3 = Math.pow(lci1, lci2);

  const montanteLCI = capitalInvestido * lci3;
  resultadoLCI = document.getElementById('montanteLCI');
  resultadoLCI.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montanteLCI));
}
//

document.addEventListener("click", handle);

function handle(evento) {
   if (evento.target.type === "button") {
    controleBotao(evento.target);
    calcular();
    return
  }
}

function controleBotao(botao) {
  const elemento = document.querySelector(`#${botao.dataset.for}`);
  const nwValue = +elemento.value + (botao.value === "-" ? -1 : 1);
  elemento.value = nwValue >= +elemento.min ? nwValue : elemento.min;
  atualizarInputMeses(elemento.value);
}

function atualizarInputMeses(novoValor){
  const input = document.getElementById('rangenumber');
  input.value = novoValor;
}

//

const rangeInputs = document.getElementById('input[type="range"]')
const numberInput = document.getElementById('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('quantidadeMeses')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)

//
