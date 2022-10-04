/*addEventListener;
document.getElementById(capitalInvestido);
document.getElementById(taxaJurosPoupanca);
document.getElementById(quantidadeMeses);

-> juntar as 3 funções pra uma só, calcular()

function calculoJurosPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses){
  capitalInvestido = document.getElementById('capitalInvestido').value;
  taxaJurosPoupanca = document.getElementById('taxaJurosPoupanca').value;
  quantidadeMeses = document.getElementById('quantidadeMeses').value;

  calculoJurosPoupanca = parseFloat(capitalInvestido) + parseFloat(taxaJurosPoupanca) + parseFloat(quantidadeMeses);

  //calculoJurosPoupanca = parseFloat(capitalInvestido) * Math.pow((1 + parseFloat(taxaJurosPoupanca)), parseFloat(quantidadeMeses))- capitalInvestido;
  document.write(calculoJurosPoupanca.toFixed(2));
}

function calculoJurosPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses) {
  capitalInvestido = document.getElementById('capitalInvestido').value;
  taxaJurosPoupanca = document.getElementById('taxaJurosPoupanca').value;
  quantidadeMeses = document.getElementById('quantidadeMeses').value;
  
  elemResult = document.getElementById('resultado');
  'resultado' = parseFloat(capitalInvestido) + parseFloat(taxaJurosPoupanca) + parseFloat(quantidadeMeses);

     elemResult.innerNumber = "O resultado é " + Number(calculoJurosPoupanca);
  }
*/

function calcular(){
  //variáveis gerais
  const capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  const taxaJurosPoupanca = Number(document.getElementById('taxaJurosPoupanca').value);
  const quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  
  //poupança
  const resultadoPoupanca = document.getElementById('montantePoupanca');
  const montantePoupanca = capitalInvestido * (Math.pow(1 + taxaJurosPoupanca / 100, quantidadeMeses));
  resultadoPoupanca.innerText = (montantePoupanca.toFixed(2));
  
  //LCI
  const taxaDI = Number(document.getElementById('taxaDI').value);
  const taxaLCI = Number(document.getElementById('taxaLCI').value);
  resultadoLCI = document.getElementById('montanteLCI');
  montanteLCI = capitalInvestido * (Math.pow((1 + ((taxaLCI/100) * taxaDI)), quantidadeMeses/12));
  resultadoLCI.innerText = (montanteLCI.toFixed(2));

  //CDB
  taxaCDB = Number(document.getElementById('taxaCDB').value);
  resultadoCDB = document.getElementById('montanteCDB');
  rendimentoCDB = capitalInvestido * (Math.pow((1 + ((taxaCDB/100) * taxaDI)), quantidadeMeses/12)-1)

  //cálculo imposto de renda CDB
  if (quantidadeMeses <= 6){
    rendimentoCDB = rendimentoCDB * 0.775;
  }
    else if (quantidadeMeses > 6 && quantidadeMeses <= 12){
      rendimentoCDB = rendimentoCDB * 0.8;
  }
    else if (quantidadeMeses >12 && quantidadeMeses <= 24){
      rendimentoCDB = rendimentoCDB * 0.825;
  }
    else {
      rendimentoCDB = rendimentoCDB * 0.85;
  }

  finalCDB = capitalInvestido + rendimentoCDB;
  montanteCDB = finalCDB
  resultadoCDB.innerText = (montanteCDB.toFixed(2));
  // -> porque não consigo fazer cálculos com montanteCDB??
}
/*
function calcularPoupanca() {
  const capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  const taxaJurosPoupanca = Number(document.getElementById('taxaJurosPoupanca').value);
  const quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  const elemResult = document.getElementById('montantePoupanca');

  //const montantePoupanca = capitalInvestido * (Math.pow((1 + (taxaJurosPoupanca * 12)/100), quantidadeMeses/12));
  const montantePoupanca = capitalInvestido * (Math.pow(1 + taxaJurosPoupanca / 100, quantidadeMeses));
  elemResult.innerText = (montantePoupanca.toFixed(2));
  }

function calcularLCI() {
  const capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  const taxaDI = Number(document.getElementById('taxaDI').value);
  const taxaLCI = Number(document.getElementById('taxaLCI').value);
  const quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  
  elemResult = document.getElementById('montanteLCI');

  montanteLCI = capitalInvestido * (Math.pow((1 + ((taxaLCI/100) * taxaDI)), quantidadeMeses/12));
  elemResult.innerText = (montanteLCI.toFixed(2));
}

function calcularCDB(){
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  taxaDI = Number(document.getElementById('taxaDI').value);
  taxaCDB = Number(document.getElementById('taxaCDB').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  
  elemResult = document.getElementById('montanteCDB');

  rendimentoCDB = capitalInvestido * (Math.pow((1 + ((taxaCDB/100) * taxaDI)), quantidadeMeses/12)-1)

  if (quantidadeMeses < 6){
    rendimentoCDB = rendimentoCDB * 0.775;
  }
    else if (quantidadeMeses >= 6 && quantidadeMeses < 12){
      rendimentoCDB = rendimentoCDB * 0.8;
  }
    else if (quantidadeMeses >=12 && quantidadeMeses < 24){
      rendimentoCDB = rendimentoCDB * 0.825;
  }
    else {
      rendimentoCDB = rendimentoCDB * 0.85;
  }
  finalCDB = capitalInvestido + rendimentoCDB;
  
  montanteCDB = finalCDB
  
  elemResult.innerText = (montanteCDB.toFixed(2));
  // -> porque não consigo fazer cálculos com montanteCDB??
}*/