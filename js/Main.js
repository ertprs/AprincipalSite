function produtos(){
  $.ajax({
    type: 'POST',
    url: "control/listaProdutos.php",
    dataType: "json",
    success: function(data) {

// var slide_produtos = document.createElement("div");
// slide_produtos.className = "owl-carousel owl-theme dept_slider";
//       data.map(function(item,index){
//         var div1 = document.createElement("div");
//         div1.className = "owl-item dept_item";
//         div1.style.display = "block !important";
//         var div2 = document.createElement("div");
//         div2.className = "dept_image";
//         var img = document.createElement("img");
//         img.src = "portal/"+item.foto;
//         img.alt = "";
//         div2.appendChild(img);
//         div1.appendChild(div2);
//         var div3 = document.createElement("div");
//         div3.className = "dept_content";
//         var div4 = document.createElement("div");
//         div4.className = "dept_title";
//         var div5 = document.createElement("div");
//         div5.className = "dept_link";
//         var a = document.createElement("a");
//         var aT = document.createTextNode("");
//         a.appendChild(aT);
//         div5.appendChild(a);
//
//         var divT = document.createTextNode(item.titulo)
//         div4.appendChild(divT);
//         div3.appendChild(div4);
//         div3.appendChild(div5);
//         div1.appendChild(div3);
//         slide_produtos.appendChild(div1);
//       });
//       var slide = document.createElement("div");
//       slide.className = "dept_slider_container";
//       slide.appendChild(slide_produtos);
//       var slide2 = document.createElement("div");
//       slide2.className = "dept_slider_container_outer";
//       slide2.appendChild(slide);
//       var slideAux = document.createElement("div");
//       slideAux.className = "dept_slider_nav";
//       var i7 = document.createElement("i");
//       i7.className = "fa fa-chevron-right";
//       i7.ariaHidden = "true";
//       slideAux.appendChild(i7);
//       slide2.appendChild(slideAux);
//       var slide3 = document.createElement("div");
//       slide3.className = "col";
//       slide3.appendChild(slide2);
//       document.getElementById("aux").appendChild(slide3);
//       console.log(slide3);
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
        var divButton = document.createElement("div");
        divButton.className = "button info_button";
        var a = document.createElement("a");
        a.href = "#";
        var t = document.createTextNode("Leia Mais");
        var t2 = document.createTextNode("Leia Mais");
        var span = document.createElement("span");
        var span2 = document.createElement("span");
        span.appendChild(t);
        span2.appendChild(t2);
        span.color = "white";
        span2.color = "white";
        a.appendChild(span);
        a.appendChild(span2);
        divButton.appendChild(a);
        div4.appendChild(divTitle);
        div4.appendChild(divtext);
        div4.appendChild(divButton);
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

function noticias2(){
  $.ajax({
    type: 'POST',
    url: "control/listaNoticias2.php",
    dataType: "json",
    success: function(data) {
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
        var aT3 = document.createTextNode(data[i].autor);
        a3.appendChild(aT3);
        var a4 = document.createElement("a");
        var aT4 = document.createTextNode(data[i].data);
        a4.appendChild(aT4);
        li.appendChild(a3);
        li2.appendChild(a4);
        ul.appendChild(li);
        ul.appendChild(li2);
        div3_3.appendChild(ul);
        var div3_4 = document.createElement("div");
        div3_4.className = "news_post_text";
        var p = document.createElement("p");
        var pT = document.createTextNode(data[i].texto);
        p.appendChild(pT);
        div3_4.appendChild(p);
        var divButton = document.createElement("div");
        divButton.className = "button news_post_button";
        var a = document.createElement("a");
        a.href = "#";
        var t = document.createTextNode("Leia Mais");
        var t2 = document.createTextNode("Leia Mais");
        var span = document.createElement("span");
        var span2 = document.createElement("span");
        span.appendChild(t);
        span2.appendChild(t2);
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
        a.href = "#";
        div4.appendChild(a);
        div3.appendChild(div4);
        var div5 = document.createElement("div");
        var ul = document.createElement("ul");
        ul.className = "d-flex flex-row align-items-start justify-content-start";
        var li = document.createElement("li");
        var li2 = document.createElement("li");
        var a3 = document.createElement("a");
        var aT3 = document.createTextNode(data[i].autor);
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

        // var div6 = document.createElement("div");
        // div6.className = "latest_title";
        // var a5 = document.createElement("a");
        // var aT5 = document.createTextNode(data[i].titulo);
        // a5.appendChild(aT5);
        // a5.href = "#";
        // div6.appendChild(a5);
        // div3.appendChild(div6);

        div.appendChild(div3);
        noticias.appendChild(div);
      }
      $("#painel_Noticias2").html(noticias);

    }
  });
}
