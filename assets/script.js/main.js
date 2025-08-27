// Estoy listo para recibir los putos datos

function calcular() {
  let resultado;
  // Variables del usuario.
  let peso = document.getElementById("peso");
  let altura = document.getElementById("altura");
  //Transformar los datos a numero
  altura = parseFloat(altura.value);
  peso = parseFloat(peso.value);

  resultado = peso / Math.pow(altura, 2);

  if (!resultado) {
    let Elementoresultado = (document.getElementById("result").innerHTML =
      "Valor Inválido");
    return 1;
  }

  let Elementoresultado=resultado.toFixed(2); // Redondondear a dos digitos.
  document.getElementById("result").innerHTML = "Seu IMC é " + Elementoresultado;

  let imagenCurseada = document.querySelector("img");
  let miSrc = imagenCurseada.getAttribute("src");
  if (resultado > 30) { 
  } else if (resultado > 25 && resultado) {
    imagenCurseada.setAttribute("src", "./assets/img/sobrepeso.jpg");
  } else if (resultado > 18.6 && resultado < 25) {imagenCurseada.setAttribute ("src", "./assets/img/normal.webp");
  } else if (resultado < 18.5) {
    imagenCurseada.setAttribute("src", "./assets/img/magro2.jpg");
  } else {
    imagenCurseada.setAttribute("src", "");  
  }
}
