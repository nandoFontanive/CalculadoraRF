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
//pq esses calcularX estão repetidos aqui? esses dentro dos ifs não são suficientes?
  calcularPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses);
  calcularLCI(capitalInvestido, taxaDI, taxaLCI, quantidadeMeses);
  calcularCDB(capitalInvestido, taxaDI, taxaCDB, quantidadeMeses);
}

//precisa chamar parâmetro quantidadeMeses aqui e na linha 37?
function calcularFoo2(quantidadeMeses) {
  return quantidadeMeses / 12;
}

function calcularCDB(capitalInvestido, taxaDI, taxaCDB, quantidadeMeses) {
  
  const foo1 = (1 + ((taxaCDB / 100) * taxaDI));
  const foo2 = calcularFoo2(quantidadeMeses);
  const foo3 = (Math.pow(foo1), foo2) - 1;

  const rendimentoCDBBruto = capitalInvestido * foo3;
  const rendimentoCDBLiquido = calcularCDBLiquido(rendimentoCDBBruto, quantidadeMeses)

  const finalCDB = capitalInvestido + rendimentoCDBLiquido;
  resultadoCDB = document.getElementById('montanteCDB');
  resultadoCDB.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(finalCDB));
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
  /*
  const fooP1 = (1 + taxaJurosPoupanca / 100)
  const fooP2 = calcularFoo2(quantidadeMeses);
  const fooP3 = (Math.pow(fooP1), fooP2);

  const montantePoupanca = capitalInvestido * fooP3;*/
  const montantePoupanca = capitalInvestido * (Math.pow(1 + taxaJurosPoupanca / 100, quantidadeMeses));
  resultadoPoupanca = document.getElementById('montantePoupanca');
  resultadoPoupanca.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montantePoupanca));
}

function calcularLCI(capitalInvestido, taxaDI, taxaLCI, quantidadeMeses) {
  const fooL1 = (1 + (taxaLCI / 100) * taxaDI);
  const fooL2 = calcularFoo2(quantidadeMeses);
  const fooL3 = (Math.pow(fooL1), fooL2);

  const montanteLCI = capitalInvestido * fooL3;
  resultadoLCI = document.getElementById('montanteLCI');
  resultadoLCI.innerText = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(montanteLCI));
}




/*
slider
const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.getElementById('capitalInvestido')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
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
*/



/*
  const montantePoupanca = capitalInvestido * (Math.pow(1 + taxaJurosPoupanca / 100, quantidadeMeses));
  montanteLCI = capitalInvestido * (Math.pow((1 + ((taxaLCI/100) * taxaDI)), quantidadeMeses/12));
  rendimentoCDB = capitalInvestido * (Math.pow((1 + ((taxaCDB/100) * taxaDI)), quantidadeMeses/12)-1)
*/