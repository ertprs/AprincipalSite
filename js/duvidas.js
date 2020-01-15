function duvidaAbrir(id){
  id2 = "corpo"+id;
  id3 = "icon"+id;
  id4 = "#a"+id;
  id5 = "#icon"+id;
  var duvida = document.getElementById(id2);
  duvida.style.display = "block";
  var icon = document.getElementById(id3);
  icon.className = "fa fa-minus icon_";
  var a = document.getElementById(id4);
  $(id4).attr("onclick","duvidaFechar("+id+")");
  $(id5).attr("onclick","duvidaFechar("+id+")");
}

function duvidaFechar(id){
  id2 = "corpo"+id;
  id3 = "icon"+id;
  id4 = "#a"+id;
  id5 = "#icon"+id;
  var duvida = document.getElementById(id2);
  duvida.style.display = "none";
  var icon = document.getElementById(id3);
  icon.className = "fa fa-plus icon_";
  var a = document.getElementById(id4);
  $(id4).attr("onclick","duvidaAbrir("+id+")");
  $(id5).attr("onclick","duvidaAbrir("+id+")");
}
