/*variables*/
let TextoEncriptar= document.getElementById('textoEncriptar');
let MensajeEncriptar= document.getElementById('mensajeEncriptar');
let Resultado = document.getElementById('resultado-mostrar');
let copy = document.querySelector('#copiar');
let lista = document.querySelector('#lista')

//let datos = ''
let expresion = /^[a-z]+$/

//TextoEncriptar.addEventListener('input', leerTexto);

//function leerTexto(){
//if (!expresion.test(TextoEncriptar)){
  //alert("Solo se admiten letras minusculas sin acentos");
  //return false;
//}
//}

const letrasMatriz = [
  ["e","enter"],
  ["i","imes"],
  ["a","ai"],
  ["o","ober"],
  ["u","ufat"],
];

function Intentoencriptar() {
   let texto = encriptar (TextoEncriptar.value);
   if (!expresion.test(texto)) {
    mostrarError ();
    limpiarcaja();
   } else {
    document.getElementById('mensajeEncriptar').style.display = 'block';
    MensajeEncriptar.value = texto;
    document.getElementById('con-mensaje').style.display = 'none';
    Resultado.innerHTML = 'Mensaje encriptado con éxito'
   console.log(texto);
   }
   
}

function limpiarcaja(){
  let cajaVacia = document.querySelector('#textoEncriptar');
  cajaVacia.value = "";
}

function borrar(){
  let borrarTodo = document.querySelector('#textoEncriptar');
  let borrarTodos = document.querySelector('#mensajeEncriptar');
  borrarTodo.value = "";
  borrarTodos.value = "";
  document.getElementById('mensajeEncriptar').style.display = 'none';
  document.getElementById('con-mensaje').style.display = 'block';
}


copy.addEventListener('click', e => {
  MensajeEncriptar.select();
  document.execCommand('copy');
})


function mostrarError (){
  const error = document.createElement ('P');
  error.textContent = ("Solo se admiten letras minusculas sin acentos");
  error.classList.add("error");
  lista.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 4000);
}

function IntentoDesencriptar (){
   let textoo= desencriptar (TextoEncriptar.value);
   let texto = encriptar (TextoEncriptar.value);
   if (!expresion.test(textoo)) {
    mostrarError ();
    limpiarcaja();
   } else {
   
    document.getElementById('mensajeEncriptar').style.display = 'block';
    MensajeEncriptar.value = textoo
    document.getElementById('con-mensaje').style.display = 'none';
    Resultado.innerHTML = 'Mensaje desencriptado con éxito'
}
}

function encriptar(fraseEncriptar){
  for(let i = 0; i < letrasMatriz.length; i++){
    if (fraseEncriptar.includes(letrasMatriz[i][0])) {
      fraseEncriptar = fraseEncriptar.replaceAll (
        letrasMatriz[i][0],
        letrasMatriz[i][1]
      )
    }
  }
  return fraseEncriptar;
}

function desencriptar(frasedesencriptar){
  for(let i = letrasMatriz.length - 1; i >= 0; i--){
    if (frasedesencriptar.includes(letrasMatriz[i][1])) {
      frasedesencriptar = frasedesencriptar.replaceAll (
        letrasMatriz[i][1],
        letrasMatriz[i][0]
      )
    }
  }
  return frasedesencriptar;
}