/*addEventListener;
document.getElementById(capitalInvestido);
document.getElementById(taxaJurosPoupanca);
document.getElementById(quantidadeMeses);

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
function calcularPoupanca() {
  const capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  const taxaJurosPoupanca = Number(document.getElementById('taxaJurosPoupanca').value);
  const quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  console.log({capitalInvestido, taxaJurosPoupanca, quantidadeMeses})
  const elemResult = document.getElementById('montantePoupanca');

  const montantePoupanca = capitalInvestido * (Math.pow((1 + (taxaJurosPoupanca * 12)/100), quantidadeMeses/12));
  elemResult.innerText = (montantePoupanca.toFixed(2));
  }

function calcularLCI() {
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  taxaDI = Number(document.getElementById('taxaDI').value);
  taxaLCI = Number(document.getElementById('taxaLCI').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  
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
  
  montanteCDB = capitalInvestido * (Math.pow((1 + ((taxaCDB/100) * taxaDI)), quantidadeMeses/12));
  
  if (quantidadeMeses < 6){
    montanteCDB = montanteCDB * 0.775;
  }
    else if (quantidadeMeses >= 6 && quantidadeMeses < 12){
      montanteCDB = montanteCDB * 0.8;
  }
    else if (quantidadeMeses >=12 && quantidadeMeses < 24){
      montanteCDB = montanteCDB * 0.825;
  }
    else {
      montanteCDB = montanteCDB * 0.85;
  }
  elemResult.innerText = (montanteCDB.toFixed(2));
}