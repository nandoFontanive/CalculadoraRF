/*addEventListener;
document.getElementById(capitalInvestido);
document.getElementById(taxaJurosPoupanca);
document.getElementById(quantidadeMeses);

//montante = capital * (1 + taxa)^tempo
//  var montante = capital * ;
//https://mundoeducacao.uol.com.br/matematica/juros-compostos.htm



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
function calcular(capitalInvestido, taxaJurosPoupanca, quantidadeMeses) {
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  taxaJurosPoupanca = Number(document.getElementById('taxaJurosPoupanca').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  
  elemResult = document.getElementById('montantePoupanca');

  montantePoupanca = capitalInvestido * (Math.pow((1 + (taxaJurosPoupanca * 12)/100), quantidadeMeses/12));
  
  elemResult.innerText = (montantePoupanca.toFixed(2));
  }

function calcularLCI(capitalInvestido, taxaJurosPoupanca, quantidadeMeses) {
  capitalInvestido = Number(document.getElementById('capitalInvestido').value);
  taxaLCI = Number(document.getElementById('taxaLCI').value);
  quantidadeMeses = Number(document.getElementById('quantidadeMeses').value);
  
  taxaLCI = taxaLCI * 

  elemResult = document.getElementById('montanteLCI');

  montantePoupanca = capitalInvestido * (Math.pow((1 + (taxaLCI * 12)/100), quantidadeMeses/12));
  
  elemResult.innerText = (montanteLCI.toFixed(2));
  }