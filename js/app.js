
var    teclaOn= document.getElementById('on');
var    teclaSign= document.getElementById('sign');
var    teclaRaiz= document.getElementById('raiz');
var    teclaDividido= document.getElementById('dividido');
var    teclaPor= document.getElementById('por');
var    teclaMenos= document.getElementById('menos');
var    teclaPunto= document.getElementById('punto');
var    teclaMas= document.getElementById('mas');
var    teclaIgual= document.getElementById('igual');
var    tecla1= document.getElementById('1');
var    tecla2= document.getElementById('2');
var    tecla3= document.getElementById('3');
var    tecla4= document.getElementById('4');
var    tecla5= document.getElementById('5');
var    tecla6= document.getElementById('6');
var    tecla7= document.getElementById('7');
var    tecla8= document.getElementById('8');
var    tecla9= document.getElementById('9');
var    tecla0= document.getElementById('0');
var    resultado= document.getElementById('display');
var    numeroa;
var    numerob;
var    operacion;

tecla0.addEventListener("mousedown",teclear)
tecla0.addEventListener("mouseup",teclear2)
tecla1.addEventListener("mousedown",teclear)
tecla1.addEventListener("mouseup",teclear2)
tecla2.addEventListener("mousedown",teclear)
tecla2.addEventListener("mouseup",teclear2)
tecla3.addEventListener("mousedown",teclear)
tecla3.addEventListener("mouseup",teclear2)
teclaPunto.addEventListener("mousedown",teclear)
teclaPunto.addEventListener("mouseup",teclear2)
teclaIgual.addEventListener("mousedown",teclear)
teclaIgual.addEventListener("mouseup",teclear2)
tecla4.addEventListener("mousedown",teclear5)
tecla4.addEventListener("mouseup",teclear6)
tecla5.addEventListener("mousedown",teclear5)
tecla5.addEventListener("mouseup",teclear6)
tecla6.addEventListener("mousedown",teclear5)
tecla6.addEventListener("mouseup",teclear6)
tecla7.addEventListener("mousedown",teclear5)
tecla7.addEventListener("mouseup",teclear6)
tecla8.addEventListener("mousedown",teclear5)
tecla8.addEventListener("mouseup",teclear6)
tecla9.addEventListener("mousedown",teclear5)
tecla9.addEventListener("mouseup",teclear6)
teclaMas.addEventListener("mousedown",teclear3)
teclaMas.addEventListener("mouseup",teclear4)
teclaMenos.addEventListener("mousedown",teclear5)
teclaMenos.addEventListener("mouseup",teclear6)
teclaDividido.addEventListener("mousedown",teclear5)
teclaDividido.addEventListener("mouseup",teclear6)
teclaOn.addEventListener("mousedown",teclear5)
teclaOn.addEventListener("mouseup",teclear6)
teclaPor.addEventListener("mousedown",teclear5)
teclaPor.addEventListener("mouseup",teclear6)

teclaSign.onclick= function (e) {
  resultado.textContent="-"+ resultado.textContent
}
tecla1.onclick= function (e) {
  resultado.textContent= resultado.textContent + "1";
  quitar0();
}
tecla2.onclick= function (e) {
  resultado.textContent= resultado.textContent + "2"
}
tecla3.onclick= function (e) {
  resultado.textContent= resultado.textContent + "3"
}
tecla4.onclick= function (e) {
  resultado.textContent= resultado.textContent + "4"
}
tecla5.onclick= function (e) {
  resultado.textContent= resultado.textContent + "5"
}
tecla6.onclick= function (e) {
  resultado.textContent= resultado.textContent + "6"
}
tecla7.onclick= function (e) {
  resultado.textContent= resultado.textContent + "7"
}
tecla8.onclick= function (e) {
  resultado.textContent= resultado.textContent + "8"
}
tecla9.onclick= function (e) {
  resultado.textContent= resultado.textContent + "9"
}
tecla0.onclick= function (e) {
  resultado.textContent= resultado.textContent + "0"
}
teclaPunto.onclick= function (e) {
  resultado.textContent= resultado.textContent + "."
}
teclaOn.onclick= function (e) {
  resetear();
}
teclaMas.onclick= function (e) {
  numeroa= resultado.textContent;
  operacion="+";
  limpiar();
}
teclaMenos.onclick= function (e) {
  numeroa= resultado.textContent;
  operacion="-";
  limpiar();
}
teclaPor.onclick= function (e) {
  numeroa= resultado.textContent;
  operacion="*";
  limpiar();
}
teclaDividido.onclick= function () {
  numeroa= resultado.textContent;
  operacion="/";
  limpiar();
}
teclaIgual.onclick= function (e) {
  numerob= resultado.textContent;
  resolver();
}
function teclear() {
  this.style="width:27%"
}
function teclear2() {
  this.style="width:30%"
}

 function teclear3() {
  this.style="width:85%"
}
function teclear4() {
  this.style="width:91%"
}
function teclear5() {
 this.style="width:20%"
}
function teclear6() {
 this.style="width:22%"
}
function limpiar() {
  resultado.textContent=""
}
function resetear() {
  resultado.textContent="0";
  numeroa=0;
  numerob=0;
  operacion="";
}


function resolver() {
  var res=0;
  switch (operacion) {
    case "+":
      res=parseFloat(numeroa)+parseFloat(numerob);
      break;
    case "-":
      res=parseFloat(numeroa)-parseFloat(numerob);
      break;
    case "*":
      res=parseFloat(numeroa)*parseFloat(numerob);
      break;
    case "/":
        res=parseFloat(numeroa)/parseFloat(numerob);
      break;


  }
  resetear();
  resultado.textContent=res;
}
if (resultado.textContent=="0") {
  tecla0.disabled=true
}
