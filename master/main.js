function craeter(){

  // Добавляем только что созданый элемент в дерево DOM
  var elem = document.createElement("div");
  elem.id = 'main';


  document.body.appendChild(elem);
}

function addNewElement(name){
  return document.createElement(name);
}

creater();
