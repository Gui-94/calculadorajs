function calcular() {
  // Captura os inputs
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  if (altura.length === 3) {
    altura = altura[0] + "." + altura.slice(1);
  }

  // Transforma em número
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  // Valida campos
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    document.getElementById("result").innerHTML = "Valor Inválido";
    return;
  }
  
  // Calcula IMC
  let resultado = peso / Math.pow(altura, 2);
  document.getElementById("result").innerHTML =
    "Seu IMC é " + resultado.toFixed(2);
    // Troca imagem de acordo com o IMC
  let imagenCurseada = document.querySelector("img"); 
  imagenCurseada.setAttribute(
    "src",
    resultado > 25
      ? "./assets/img/sobrepeso.jpg"
      : resultado >= 18.6
      ? "./assets/img/normal.webp"
      : "./assets/img/magro2.jpg"
  );
}
