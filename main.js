//console.log('in the main');

var canvas=document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
c.strokeStyle="BADA55";
c.lineCap="round";
c.lineJoin="round";
c.lineWidth=hue;
c.font="40px Brush Script MT"
c.fillText("Click The Mouse to Draw",550,230);
var drawing=false;

var mouseX=0;
var mouseY =0;
var hue=0;
var size=true;
function draw(e)
{
	if(!drawing)
	{
		return;
	}

	//console.log(e);
	console.log('X is ' +e.offsetX);
	console.log('Y is ' +e.offsetY);
	console.log(e.offsetY);
	c.strokeStyle=`hsl(${hue} , 100%, 50%)`;
	c.beginPath();
	c.moveTo(mouseX,mouseY);
	c.lineTo(e.offsetX,e.offsetY);
	c.stroke();
	
	mouseX=e.offsetX;
    mouseY=e.offsetY;
    hue=hue+1;
    if(hue>=600)
    {
    	hue=0;
    }

 if(c.lineWidth>=100 || c.lineWidth<=1)
 {
 	size=!size;
 }
 if(size)
 {
 	c.lineWidth=c.lineWidth+1;
 }
 else
 {
 	c.lineWidth=c.lineWidth-1;
 }
}
canvas.addEventListener('mousemove',draw);

canvas.addEventListener('mousedown',function(e){

	
drawing=true;
mouseX=e.offsetX;
mouseY=e.offsetY;

});
canvas.addEventListener('mouseup',function()
{
	drawing=false;
});
canvas.addEventListener('mouseout',function()
{
drawing=false;
});

// in case of mobile  Interface

/*function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
      }
      function 

function init() 
{
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    
}*/