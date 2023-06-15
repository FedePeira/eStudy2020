$(document).ready(function() 
{
    $('#color-picker').spectrum({
        type: "color",
      });

    $("#picker").spectrum("get");
});
function changeFont(){
    var myFont = document.getElementById("input-font").value;
    document.execCommand('fontName', false, myFont);
  }
function chooseColor(){
    var mycolor = document.getElementById("myColor").value;
    document.execCommand('foreColor', false, mycolor);
}
function changeSize(){
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mysize);
  }
function init(x) {
    if (x=="h") {document.getElementById('txtbox').style.display='none';document.getElementById('text').style.display='block';}
    if (x=="s") {document.getElementById('txtbox').style.display='block';document.getElementById('text').style.display='none';}
    document.getElementById('text').value=document.getElementById('txtbox').innerHTML;
    if (x!="h" || x!="s") document.execCommand(x,false,null);
    document.getElementById('txtbox').focus();
    }