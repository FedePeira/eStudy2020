$(document).ready(function() 
{
    var Editor = new MathEditor("math")
    var MQ = MathQuill.getInterface(2);
    MQ.textcolor
    var inp = "";
    var antLin = 0;
    var curLin = 1;
    var curRender= "";

    $(".dropdown-trigger").dropdown();
    
    Editor.buttons = ["fraction","root",'superscript','subscript','plus_minus','pi','not_equal','greater_equal','less_equal','angle','parallel_to','perpendicular','triangle','parallelogram'];
    Editor.removeButtons(["square_root","cube_root",'multiplication','division','degree','greater_than','less_than',]);
    Editor.styleMe({
          width: 500,
          height: 100,
          textarea_background:"#FFFFFF",
          textarea_foreground:"#111111",
          textarea_border:"#111111",
          toolbar_background:"#671EB0",
          toolbar_foreground:"#FFFFFF",
          toolbar_border:"#000000",
          button_background:"#FFFFFF",
          button_border:"#000000",
        });
    $('.line').on('click', function(e) 
    {   
        inp = Editor.getValue();
        curRender = "<br> <div class='linea" + curLin + "' id='mathquill" + curLin + "'>" + inp + "</div>"
        $(curRender).insertAfter(".linea" + antLin);
        var problema = document.getElementById('mathquill'+curLin);
        MQ.StaticMath(problema);
    });

    
});