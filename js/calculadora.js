addEventListener;
document.getElementById(capitalInvestido);
document.getElementById(taxaJurosPoupanca);
document.getElementById(quantidadeMeses);
/*
//montante = capital * (1 + taxa)^tempo
//  var montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao);
//https://mundoeducacao.uol.com.br/matematica/juros-compostos.htm


*/
function calculoJurosPoupanca(capitalInvestido, taxaJurosPoupanca, quantidadeMeses){
  capitalInvestido = document.getElementById('capitalInvestido').value;
  taxaJurosPoupanca = document.getElementById('taxaJurosPoupanca').value;
  quantidadeMeses = document.getElementById('quantidadeMeses').value;

  calculoJurosPoupanca = parseFloat(capitalInvestido) + parseFloat(taxaJurosPoupanca) + parseFloat(quantidadeMeses);

  //calculoJurosPoupanca = parseFloat(capitalInvestido) * Math.pow((1 + parseFloat(taxaJurosPoupanca)), parseFloat(quantidadeMeses))- capitalInvestido;
  document.write(calculoJurosPoupanca.toFixed(2));
}
