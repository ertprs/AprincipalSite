function produtos(){
  $.ajax({
    type: 'POST',
    url: "control/listaProdutos.php",
    dataType: "json",
    success: function(data) {
      var tam = data.length;
      var tam2 = tam;
      tam = tam/4;
      tam = Math.ceil(tam);
      var ol = document.createElement("ol");
      ol.className = "carousel-indicators";
      for (var i = 0; i < tam; i++) {
        var li = document.createElement("li");
        li.setAttribute("data-target", "#blogCarousel");
        li.setAttribute("data-slide-to", i);
        if (i==0) {
          li.className = "active";
        }
        ol.appendChild(li);
      }
      var divP = document.createElement("div");
      divP.className = "carousel slide"
      divP.id = "blogCarousel";
      divP.dataRide ="carousel";
      divP.appendChild(ol);

      var divInner = document.createElement("div");
      divInner.className = "carousel-inner";
       for (var i = 0; i < tam; i++) {
         var div = document.createElement("div");
         if (i==0) {
           div.className = "carousel-item active"
         }else {
           div.className = "carousel-item"
         }
         var divRow = document.createElement("div");
         divRow.className = "row"
         var div1 = document.createElement("div"); var div2 = document.createElement("div"); var div3 = document.createElement("div"); var div4 = document.createElement("div");
         div1.className = "col-md-3";div2.className = "col-md-3"; div3.className = "col-md-3";div4.className = "col-md-3";
         var a1 = document.createElement("a"); var a2 = document.createElement("a"); var a3 = document.createElement("a");var a4 = document.createElement("a");


         if (i==0) {
           if (tam2>=1) {
             var img1 = document.createElement("img");
             img1.alt = "Image";
             img1.style.maxWidth = "100%";
             img1.src = "portal/"+data[0].foto;
             a1.appendChild(img1);
           }
           if (tam2>=2) {
             var img2 = document.createElement("img");
             img2.alt = "Image";
             img2.style.maxWidth = "100%";
             img2.src = "portal/"+data[1].foto;
             a2.appendChild(img2);
           }
           if (tam2>=3) {
             var img3 = document.createElement("img");
             img3.alt = "Image";
             img3.style.maxWidth = "100%";
             img3.src = "portal/"+data[2].foto;
             a3.appendChild(img3);
           }
           if (tam2>=4) {
             var img4 = document.createElement("img");
             img4.alt = "Image";
             img4.style.maxWidth = "100%";
             img4.src = "portal/"+data[3].foto;
             a4.appendChild(img4);
           }

           div1.appendChild(a1);div2.appendChild(a2);div3.appendChild(a3);div4.appendChild(a4);
           divRow.appendChild(div1);divRow.appendChild(div2);divRow.appendChild(div3);divRow.appendChild(div4);
           div.appendChild(divRow);
           divInner.appendChild(div);
         }else if(i==1){
          if (tam2>=5) {
            var img5 = document.createElement("img");
            img5.alt = "Image";
            img5.style.maxWidth = "100%";
            img5.src = "portal/"+data[4].foto;
            a1.appendChild(img5);
          }
           if (tam2>=6) {
             var img6 = document.createElement("img");
             img6.alt = "Image";
             img6.style.maxWidth = "100%";
             img6.src = "portal/"+data[5].foto;
             a2.appendChild(img6);
           }
           if (tam2>=7) {
             var img7 = document.createElement("img");
             img7.alt = "Image";
             img7.style.maxWidth = "100%";
             img7.src = "portal/"+data[6].foto;
             a3.appendChild(img7);
           }
           if (tam2>=8) {
             var img8 = document.createElement("img");
             img8.alt = "Image";
             img8.style.maxWidth = "100%";
             img8.src = "portal/"+data[7].foto;
             a4.appendChild(img8);
           }

           div1.appendChild(a1);div2.appendChild(a2);div3.appendChild(a3);div4.appendChild(a4);
           divRow.appendChild(div1);divRow.appendChild(div2);divRow.appendChild(div3);divRow.appendChild(div4);
           div.appendChild(divRow);
           divInner.appendChild(div);
         }else if(i==2){
           if (tam2>=9) {
             var img9 = document.createElement("img");
             img9.alt = "Image";
             img9.style.maxWidth = "100%";
             img9.src = "portal/"+data[8].foto;
             a1.appendChild(img9);
           }
            if (tam2>=10) {
              var img10 = document.createElement("img");
              img10.alt = "Image";
              img10.style.maxWidth = "100%";
              img10.src = "portal/"+data[9].foto;
              a2.appendChild(img10);
            }
            if (tam2>=11) {
              var img11 = document.createElement("img");
              img11.alt = "Image";
              img11.style.maxWidth = "100%";
              img11.src = "portal/"+data[10].foto;
              a3.appendChild(img11);
            }
            if (tam2>=12) {
              var img12 = document.createElement("img");
              img12.alt = "Image";
              img12.style.maxWidth = "100%";
              img12.src = "portal/"+data[11].foto;
              a4.appendChild(img12);
            }

            div1.appendChild(a1);div2.appendChild(a2);div3.appendChild(a3);div4.appendChild(a4);
            divRow.appendChild(div1);divRow.appendChild(div2);divRow.appendChild(div3);divRow.appendChild(div4);
            div.appendChild(divRow);
            divInner.appendChild(div);
         }

       }
         divP.appendChild(divInner);
         $("#auxiliar").html(divP);
    }
  });
}

function noticias(){
  $.ajax({
    type: 'POST',
    url: "control/listaNoticias.php",
    dataType: "json",
    success: function(data) {
      var noticias = document.createElement("div");
      noticias.className = "row row-eq-height";
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.className = "col-lg-4 info_box_col";
        div.style.marginBottom = "15px";
        var div2 = document.createElement("div");
        div2.className = "info_box";
        var div3 = document.createElement("div");
        div3.className = "info_image";
        var img = document.createElement("img");
        img.src = "portal/"+data[i].fotos;
        img.className = "img_blog";
        div3.appendChild(img);
        div2.appendChild(div3);
        var div4 = document.createElement("div");
        div4.className = "info_content";
        var divTitle = document.createElement("div");
        divTitle.className = "info_title";
        var divTitle2 = document.createTextNode(data[i].titulo);
        divTitle.appendChild(divTitle2);
        var divtext = document.createElement("div");
        divtext.className = "info_text";
        var divtext2 = document.createTextNode(data[i].resumo);
        divtext.appendChild(divtext2);
        div4.appendChild(divTitle);
        div4.appendChild(divtext);
        div2.appendChild(div4);
        div.appendChild(div2);
        var br = document.createElement("br");
        if (i==3) {
          noticias.appendChild(br)
        }
        noticias.appendChild(div);
      }
      $("#painel_Noticias").html(noticias);
    }
  });
}

function filtros(){
  $.ajax({
    type: 'POST',
    url: "control/listaCat.php",
    dataType: "json",
    success: function(data) {
      var array = []
      for (var i = 0; i < data.length; i++) {
        array.push(data[i].categoria);
      }
    }});
}

function categoria(){

  $.ajax({
    type: 'POST',
    url: "control/listaCategoria.php",
    dataType: "json",
    success: function(data) {
      var list = document.createElement("ul");
      data.map(function(item,index){
        var li = document.createElement("li");
        var a = document.createElement("a");
        var categoria = [];
        categoria.push(item.categoria);
        var cat = JSON.stringify(categoria);
        a.setAttribute("onclick","FiltroCat("+cat+")");
        a.style.cursor = "pointer";
        var div1 = document.createElement("div");
        div1.className="d-flex flex-row align-items-center justify-content-start";
        var div2 = document.createElement("div");
        var div2T = document.createTextNode(item.categoria);
        div2.appendChild(div2T);
        var div3 = document.createElement("div");
        div3.className = "ml-auto";
        div1.appendChild(div2);
        div1.appendChild(div3);
        a.appendChild(div1);
        li.appendChild(a);
        list.appendChild(li);
      });
      $("#lista_categoria").html(list);
    }});
}

function FiltroCat(cat){
  var categoria = cat[0];
noticiasCat(categoria);
}

function noticiasCat(categoria){

    $.ajax({
      type: 'POST',
      url: "control/listaNoticias4.php",
      dataType: "json",
      data: {cat:categoria},
      success: function(data) {
        data.sort((a,b)=>{
          return b.id - a.id;
        })
        var noticias = document.createElement("div");
        noticias.className = "news_posts";
        for (var i = 0; i < data.length; i++) {
          var div1 = document.createElement("div");
          div1.className = "news_post";
          var img = document.createElement("img");
          img.src = "portal/"+data[i].fotos;
          var div2 = document.createElement("div");
          div2.className = "news_post_image";
          div2.appendChild(img);
          div1.appendChild(div2);
          var div3 = document.createElement("div");
          div3.className = "news_post_content";

          var a2 = document.createElement("a");
          var aT2 = document.createTextNode(data[i].titulo);
          a2.appendChild(aT2);
          a2.href = "#";
          var div3_2 = document.createElement("div");
          div3_2.className = "news_post_title";
          div3_2.appendChild(a2);
          var div3_3 = document.createElement("div");
          var ul = document.createElement("ul");
          ul.className = "d-flex flex-row align-items-center justify-content-start";
          var li = document.createElement("li");
          var li2 = document.createElement("li");
          var a3 = document.createElement("a");
          var aT3 = document.createTextNode(data[i].autor+" - ");
          a3.appendChild(aT3);
          var a4 = document.createElement("a");
          var aT4 = document.createTextNode(data[i].data);
          a4.appendChild(aT4);
          li.appendChild(a3);
          li.className = "teste";
          li2.appendChild(a4);
          ul.appendChild(li);
          ul.appendChild(li2);
          div3_3.appendChild(ul);
          var div3_4 = document.createElement("div");
          div3_4.className = "news_post_text";
          var p = document.createElement("p");
          p.className = "block-with-text";
          var idbutton = "text"+i;
          var a = document.createElement("a");
          a.id = "click"+i;
          a.style.cursor = "pointer";
          a.setAttribute("onclick","abrirNoticia("+i+")");
          p.id = idbutton;
          var pT = document.createTextNode(data[i].texto);
          p.appendChild(pT);
          div3_4.appendChild(p);
          var divButton = document.createElement("div");
          divButton.className = "button news_post_button";
          var t = document.createTextNode("Leia Mais");
          var t2 = document.createTextNode("Leia Mais");
          var span = document.createElement("span");
          var span2 = document.createElement("span");
          span.appendChild(t);
          span2.appendChild(t2);
          span.id = "button"+i;
          span2.id = "buttonx"+i;
          span.color = "white";
          span2.color = "white";
          a.appendChild(span);
          a.appendChild(span2);
          divButton.appendChild(a);
          div3.appendChild(div3_2);
          div3.appendChild(div3_3);
          div3.appendChild(div3_4);
          div3.appendChild(divButton);
          div1.appendChild(div3);

          noticias.appendChild(div1);
        }
        var pagination = document.createElement("div");
        pagination.className = "pagination";
        var ul2 = document.createElement("ul");
        ul2.className = "d-flex flex-row align-items-center justify-content-start";
        var li4 = document.createElement("li");
        li4.className = "active";
        var li5 = document.createElement("li");
        var li6 = document.createElement("li");
        var a4 = document.createElement("a");
        var a5 = document.createElement("a");
        var a6 = document.createElement("a");
        var aT4 = document.createTextNode("01");
        var aT5 = document.createTextNode("02");
        var aT6 = document.createTextNode("03");
        a4.appendChild(aT4);
        a5.appendChild(aT5);
        a6.appendChild(aT6);
        li4.appendChild(a4);
        li5.appendChild(a5);
        li6.appendChild(a6);
        ul2.appendChild(li4);
        ul2.appendChild(li5);
        ul2.appendChild(li6);
        pagination.appendChild(ul2);
        noticias.appendChild(pagination);
        $("#painel_Noticias").html(noticias);
      }
    });
}


function noticias2(id,pagination){

  $.ajax({
    type: 'POST',
    url: "control/listaNoticias2.php",
    dataType: "json",
    data: {id:id,pagination:pagination},
    success: function(data) {

      var noticias = document.createElement("div");
      noticias.className = "news_posts";
      console.log(data);
      console.log("Qnt Noticias:"+data.length);
      for (var i = 0; i < data.length; i++) {
          if(data[i]==null){

          }else{
        var div1 = document.createElement("div");
        div1.className = "news_post";
        var img = document.createElement("img");
        console.log(data[i].fotos);
        img.src = "portal/"+data[i].fotos;
        var div2 = document.createElement("div");
        div2.className = "news_post_image";
        div2.appendChild(img);
        div1.appendChild(div2);
        var div3 = document.createElement("div");
        div3.className = "news_post_content";

        var a2 = document.createElement("a");
        var aT2 = document.createTextNode(data[i].titulo);
        a2.appendChild(aT2);
        a2.href = "#";
        var div3_2 = document.createElement("div");
        div3_2.className = "news_post_title";
        div3_2.appendChild(a2);
        var div3_3 = document.createElement("div");
        var ul = document.createElement("ul");
        ul.className = "d-flex flex-row align-items-center justify-content-start";
        var li = document.createElement("li");
        var li2 = document.createElement("li");
        var a3 = document.createElement("a");
        var aT3 = document.createTextNode(data[i].autor+" - ");
        a3.appendChild(aT3);
        var a4 = document.createElement("a");
        var aT4 = document.createTextNode(data[i].data);
        a4.appendChild(aT4);
        li.appendChild(a3);
        li.className = "teste";
        li2.appendChild(a4);
        ul.appendChild(li);
        ul.appendChild(li2);
        div3_3.appendChild(ul);
        var div3_4 = document.createElement("div");
        div3_4.className = "news_post_text";
        var p = document.createElement("p");
        p.className = "block-with-text";
        var idbutton = "text"+i;
        var a = document.createElement("a");
        a.id = "click"+i;
        a.style.cursor = "pointer";
        a.setAttribute("onclick","abrirNoticia("+i+")");
        p.id = idbutton;
        var pT = document.createTextNode(data[i].texto);
        p.appendChild(pT);
        div3_4.appendChild(p);
        var divButton = document.createElement("div");
        divButton.className = "button news_post_button";
        var t = document.createTextNode("Leia Mais");
        var t2 = document.createTextNode("Leia Mais");
        var span = document.createElement("span");
        var span2 = document.createElement("span");
        span.appendChild(t);
        span2.appendChild(t2);
        span.id = "button"+i;
        span2.id = "buttonx"+i;
        span.color = "white";
        span2.color = "white";
        a.appendChild(span);
        a.appendChild(span2);
        divButton.appendChild(a);
        div3.appendChild(div3_2);
        div3.appendChild(div3_3);
        div3.appendChild(div3_4);
        div3.appendChild(divButton);
        div1.appendChild(div3);

        noticias.appendChild(div1);}
      }
      /////////////////////////////////////////////
      $.ajax({
        type: 'POST',
        url: "control/buscaPag.php",
        dataType: "json",
        success: function(data3) {
          var tam3 = data3.length;
          var pagination3 = document.createElement("div");
          pagination3.className = "pagination";
          tam3 = tam3/5;
          tam3 = Math.ceil(tam3);
          console.log(tam3);
          for (var i = 0; i < tam3; i++) {
            var ul23 = document.createElement("ul");
            ul23.className = "d-flex flex-row align-items-center justify-content-start";
            var li43 = document.createElement("li");
            var a43 = document.createElement("a");
            var j = i+1;
            var aT43 = document.createTextNode(j);
            a43.setAttribute("onclick","pagination("+i+")");
            if (j==pagination) {
              a43.className = "active";
              a43.style.background = "#f91d81 !important";

            }
            a43.appendChild(aT43);
            li43.appendChild(a43);
            ul23.appendChild(li43);
            pagination3.appendChild(ul23);
          }
          /////////////////////////////////////////////
          noticias.appendChild(pagination3);
          $("#painel_Noticias").html(noticias);

        }});

    }
  });
}

function pagination(id){
id = id+1;
}

function abrirNoticia(id){
var idbutton = "text"+id;
var button = "#button"+id;
var buttonx = "#buttonx"+id;
var click = "click"+id;
document.getElementById(idbutton).className ="block-with-text2";
$(button).html("Fechar");
$(buttonx).html("Fechar");
document.getElementById(click).setAttribute("onclick","fechaNoticia("+id+")");
}

function fechaNoticia(id){
  var idbutton = "text"+id;
  var button = "#button"+id;
  var buttonx = "#buttonx"+id;
  var click = "click"+id;
  document.getElementById(idbutton).className ="block-with-text";
  $(button).html("Ler Mais");
  $(buttonx).html("Ler Mais");
  document.getElementById(click).setAttribute("onclick","abrirNoticia("+id+")");
}

function noticias3(){
  $.ajax({
    type: 'POST',
    url: "control/listaNoticias3.php",
    dataType: "json",
    success: function(data) {
      var noticias = document.createElement("div");
      noticias.className = "sidebar_latest_container";
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.className = "latest d-flex flex-row align-items-start justify-content-start";
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.className = "latest_image";
        var img = document.createElement("img");
        img.src = "portal/"+data[i].fotos;
        div2.appendChild(img);
        div1.appendChild(div2);
        div.appendChild(div1);
        var div3 = document.createElement("div");
        div3.className = "latest_content";
        var div4 = document.createElement("div");
        div4.className = "latest_title";
        var a = document.createElement("a");
        var aT = document.createTextNode(data[i].titulo);
        a.appendChild(aT);
        a.setAttribute("onclick", "noticias2("+data[i].id+","+0+")");
        a.style.cursor = "pointer";
        div4.appendChild(a);
        div3.appendChild(div4);
        var div5 = document.createElement("div");
        var ul = document.createElement("ul");
        ul.className = "d-flex flex-row align-items-start justify-content-start";
        var li = document.createElement("li");
        li.className = "teste";
        var li2 = document.createElement("li");
        var a3 = document.createElement("a");
        var aT3 = document.createTextNode(data[i].autor+" - ");
        a3.appendChild(aT3);
        var a4 = document.createElement("a");
        var aT4 = document.createTextNode(data[i].data);
        a4.appendChild(aT4);
        li.appendChild(a3);
        li2.appendChild(a4);
        ul.appendChild(li);
        ul.appendChild(li2);
        div5.appendChild(ul);
        div3.appendChild(div5);

        div.appendChild(div3);
        noticias.appendChild(div);
      }
      $("#painel_Noticias2").html(noticias);

    }
  });
}
