

function calcularPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses){
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);

  taxaJurosPoupanca = Number(document.getElementById('taxaJurosPoupanca').value);
  resultadoPoupanca = document.getElementById('montantePoupanca');
  montantePoupanca = capitalInvestido * (Math.pow(1 + taxaJurosPoupanca / 100, quantidadeMeses));
  
  resultadoPoupanca.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montantePoupanca));
}

function calcularLCI(capitalInvestido, taxaDI, taxaLCI, quantidadeMeses){
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);

  taxaDI = Number(document.getElementById('taxaDI').value);
  taxaLCI = Number(document.getElementById('taxaLCI').value);
  resultadoLCI = document.getElementById('montanteLCI');
  montanteLCI = capitalInvestido * (Math.pow((1 + ((taxaLCI/100) * taxaDI)), quantidadeMeses/12));
  
  resultadoLCI.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montanteLCI));
}

function calcularCDB(capitalInvestido, taxaDI, taxaCDB, quantidadeMeses){
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);

  taxaDI = Number(document.getElementById('taxaDI').value);
  taxaCDB = Number(document.getElementById('taxaCDB').value);
  resultadoCDB = document.getElementById('montanteCDB');
  rendimentoCDB = capitalInvestido * (Math.pow((1 + ((taxaCDB/100) * taxaDI)), quantidadeMeses/12)-1)

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
  resultadoCDB.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(finalCDB));
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