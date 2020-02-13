// function batting()
// {
//     var a=document.getElementById("bat").innerHTML;
//     document.getElementById("select").innerHTML=a;
// }
// function bowling()
// {    
// }

var x=document.getElementById("player");
var v;
var i;
var runp=0;
var runc=0;
var target=0;
var key;

function bowling()
{
    key=1;
    window.location.href="front.html";

}
function batting()
{
    key=0;
    window.location.href="front.html";
}



function play()
{
    var t=document.getElementById("tscore");

    var pic=document.getElementById("computer"); 
    var no=Math.floor((Math.random() * 6) + 1);

    var op=document.getElementById("sel").value;
    if(op=="1")
    {
        document.getElementById("player").src="one.png";
        runp= runp+1;
    }
    if(op=="2")
    {
        document.getElementById("player").src="two.png";
        runp= runp+2;
    }
    if(op=="3")
    {
        document.getElementById("player").src="three.png";
        runp= runp+3;
    }
    if(op=="4")
    {
        document.getElementById("player").src="four.png";
        runp= runp+4;
    }
    if(op=="5")
    {
        document.getElementById("player").src="five.png";
        runp= runp+5;
    }
    if(op=="6")
    {
        document.getElementById("player").src="six.png";
        runp= runp+6;
    }
    

    if(no==6)
    {
        pic.src="six.png";
        runc=runc+6;
    }
    else if(no==5)
    {
    pic.src="five.png";
    runc=runc+5;
    }
    else if(no==4)
    {
    pic.src="four.png";
    runc=runc+4;
    }
    else if(no==3)
    {
    pic.src="three.png";
    runc=runc+3;
    }
    else if(no==2)
    {
    pic.src="two.png";
    runc=runc+2;
    }
    else if(no==1)
    {
    pic.src="one.png";
    runc=runc+1;
    }


    if(no==op)
    {   
        
        alert("YOU ARE OUT ...!!!!!!");
            if(key==0)
            {
                if(runp<t.innerHTML)
                {
                    alert("computer won");
                }
                else{
                t.innerHTML=(runp-op)+1;
                runc=0;
                key=1;
                alert("now computer us batting");
                }
            }
            else
            {
                if(runc<t.innerHTML)
                {
                    alert("player won");
                }
                else{
                key=0;
                alert("now player us batting");
                t.innerHTML=(runc-no)+1;
                runp=0;
                }
            }           
        
    }
      else if(key==0)
        {
            document.getElementById("pscore").innerHTML=runp;
            if(t.innerHTML!=0)
                {
                    if(runp>=t.innerHTML)
                    {
                        alert("player won");
                    }
                }
        }
        else
        {
            document.getElementById("cscore").innerHTML=runc;
            if(t.innerHTML!=0)
            {
                if(runc>=t.innerHTML)
                {
                    alert("computer won");
                   
                }
            }
        }



}
