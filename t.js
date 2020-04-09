for (var i = 0; i <data.length; i++) {
    data1.push({"nome":data[i].nome_convenio,
    "ativo":"<div class='custom-control custom-switch'><input type='checkbox' class='custom-control-input' id='customSwitch"+data[i].id+"' value='ativo'><label class='custom-control-label' for='customSwitch"+data[i].id+"'></label></div>",
    "botoes":"<button class='btn btn-info fa fa-edit' type='button' onclick='Edita("+data[i].id+","+aux2+")' style='margin-right: 15px'></button>"
    +"<button class='btn btn-warning fa fa-trash-alt' style='color:white' type='button' onclick='ExcluiColaborador("+data[i].id+")'></button>"
    });
  }
