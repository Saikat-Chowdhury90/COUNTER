var current=document.querySelector(".current");
var next=document.querySelector(".next");
count=2;
function startcounter() 
{
    var input=parseInt(document.getElementById("text-input").value);
    
    
        var interval=setInterval(function()  {
            if(count>input)
            {
                clearInterval(interval);
                return;
            }
            animate();

        }, 1000); 
       
    
  
    
       
}


function animate() {
   
   
     
        next.classList.add('animate');
        
        setTimeout(function() {
            next.classList.remove('animate');
            current.innerHTML=next.innerHTML;
            next.innerHTML=++count;
            
        }, 500);
     
    

}