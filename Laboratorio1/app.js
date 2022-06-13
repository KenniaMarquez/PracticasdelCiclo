//ocultar o mostrar div que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

//constantes para agregar elementos a la lista

const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton'); //input

//eliminar el ultimo tem
const removeItemButton = document.querySelector('button#removeItemButton');

//eliminar elemento seleccionado
const removeItem = document.querySelector('button#removeItem');


//mostrar y ocultar lista

hide.addEventListener('click', () =>
{
 if (listDiv.style.display == 'none') 
 
 {
   listDiv.style.display = 'block';
   hide.textContent = '<<';
 } else {    

   listDiv.style.display = 'none';
   hide.textContent = '>>';

  } 

});

//agregar elementos a la tabla
addItemButton.addEventListener('click', () =>{
 let list = document.querySelector('ul');
 let li = document.createElement('li');
 li.textContent = addItemInput.value;
 list.appendChild(li); // agregar elemto a la lista
 addItemInput.value="";


});

//eliminar ultimo elemento agregado de la lista

removeItemButton.addEventListener('click', () =>{
   let list = document.querySelector('ul');
   let li = document.querySelector('li:last-child');
   list.removeChild(li);

   swal("Se elimino ☞ "+ (li).innerHTML,
    "Click en OK para salir ツ", "success");
  
});



function findIndex(elem)
{

 var i, len = items.length;
 for (i=0; i<len; i++){
   if (items[i]===elem){
      return i;

   }

 }
   return -1;

}

//obtener index of element in list

var list = document.getElementById("listItems"),
  items = list.getElementsByTagName("li");
list.onclick = function(e)
{
var event = e || window.event,
src = event.target ||  event.srcElement;
var myIndex = findIndex(src);
//alert(myIdex);
index=myIndex;
console.log(myIndex);


//cambiar color de los elementos seleccionado

if (event.target.tagName==='LI'){

 list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-success')); // se agregan clases bootstrap para los elementos
 items[index].classList.add('alert', 'alert-success');

}

};