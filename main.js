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
      "Ingresa um valor valido");
    return 1;
  }

  let Elementoresultado=resultado.toFixed(2); // Redondondear a dos digitos.
  document.getElementById("result").innerHTML = "Seu IMC é " + Elementoresultado;

  let imagenCurseada = document.querySelector("img");
  let miSrc = imagenCurseada.getAttribute("src");
  if (resultado > 30) {
    imagenCurseada.setAttribute("src", "img/ThorGoWR.webp");
  } else if (resultado > 25 && resultado < 29.99) {
    imagenCurseada.setAttribute("src", "img/majin.jpg");
  } else if (resultado > 18.5 && resultado < 24.9) {
    imagenCurseada.setAttribute("src", "img/star-platinum-power-pose-f5lg7apgc2c4wjdv-f5lg7apgc2c4wjdv.jpg");
  } else if (resultado < 18.5) {
    imagenCurseada.setAttribute("src", "img/Evil_buu.webp");
  } else {
    imagenCurseada.setAttribute("src", "img/MajinBuuKidDebutNV.webp");
  }
}
// cu save