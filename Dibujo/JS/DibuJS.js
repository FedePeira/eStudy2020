$(document).ready(function() 
{
    var context = document.getElementById("canvas").getContext("2d");
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;
    var curColor = "FFFFFF";
    var clickColor = new Array();
    var colorWhite = "#FFFFFF";
    var sizSmall = 5;
    var sizMid = 10;
    var sizBig = 15;
    var clickSize = new Array();
    var curSize = sizSmall;

    $(".dropdown-trigger").dropdown();

    $('#picker').spectrum({
        type: "color"
    });

    $(".toggle").click(function() {
        console.log("apreto");
        curColor = $("#picker").spectrum("get");
    });

    $('.chiq').on('click', function(e) 
    {        
        curSize = sizSmall;
    });

    $('.med').on('click', function(e) 
    {        
        curSize = sizMid;
    });

    $('.grand').on('click', function(e) 
    {        
        curSize = sizBig;
    });

    $('.gom').on('click', function(e) 
    {        
        curColor = colorWhite;
    });
    
    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
        clickColor.push(curColor);
        clickSize.push(curSize);
    }

    function redraw()
    {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.lineJoin = "round";
                
        for(var i=0; i < clickX.length; i++) {		
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        }else{
            context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickSize[i];
        context.stroke();
        }
    }

    $('#canvas').mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
            
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });

    $('#canvas').mousemove(function(e){
        if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
        }
    });

    $('#canvas').mouseup(function(e){
        paint = false;
    });

    $('#canvas').mouseleave(function(e){
        paint = false;
    });
});