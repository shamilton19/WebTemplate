/* ****This is the javascript for my canvas drawing app***** */

context = document.getElementById('canvasDiv').getContext("2d");

//addClick records mouse. redraw draws the data.

    ('#canvas').mousedown(function (e) ){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this .offsetTop;
        
        paint= true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });

    //mouse move event draws on the canvas when the mouse is pressed
    $('#canvas').mousemove(function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop,true);
            redraw();
        }
        
    });

    //Mouse up event-identifies when the mouse is off the papernot being clicked

    ('#canvas').mouseup(function (e) ){
    paint = false;
    });
    //mouse leave event: If the maker goes off the paper, then nothing 
    ('#canvas').mouseleave(function(e) ){
        paint = false;                     
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new array();
    var paint;
// This saves the click position of the mouse
function addClick(x, y, dragging)
{ 
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}
function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // clears the canvas
    context.strokeStyle = "df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;
    
    for(var i=0; i < clikcX.length; i++){
        context.beginPath();
        if(clikcDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                
            }
    }
}