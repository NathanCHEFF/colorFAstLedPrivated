function creater(){
  // Добавляем только что созданый элемент в дерево DOM
  var elem = document.createElement("div");
  elem.id = 'main';


  document.body.appendChild(elem);
}

function addNewElement(name){
  return document.createElement(name);
}

colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {

    alert(event.target.value);

}

document.body.onload = 'creater';
