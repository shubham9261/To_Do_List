var add=document.querySelector(".Add");
var myul=document.querySelectorAll(".list li");
var completed_task=0;
var pending=7;
var arr=new Array();
document.querySelector(".pending-tasks").innerHTML="No of tasks pending" + pending;
document.querySelector(".completed-tasks").innerHTML="No of tasks completed" + completed_task;
// Adding close buttons on each activity 
for(let i=0;i<myul.length;i++)
{
    var span = document.createElement("span");
     var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myul[i].appendChild(span); 
}
//performing actions on close button
var close = document.querySelectorAll(".close");
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click",function()
  {
      var temp=this.parentElement;
      temp.style.display="none";
      pending--;
      if(pending<0)
        pending=0;
      document.querySelector(".pending-tasks").innerHTML="No of tasks pendin:  " + pending;
  }
  );
}
// clearing all the checked lists
var check=document.querySelectorAll(".list li");

for(let i=0;i<check.length;i++)
{
    check[i].addEventListener("click",function()
    {
        let flag=0;
        var temp=this.parentElement;
        console.log(flag);
        //temp.style.display="none";
        if(flag%2==0)
            check[i].style.t
          pending=0;
          completed_task=0;
        document.querySelector(".pending-tasks").innerHTML="No of tasks pendin:  " + pending;
        document.querySelector(".completed-tasks").innerHTML="No of tasks completed:  " + completed_task;
        flag=1-flag;
    }
    );
}
//performing actions on the completed task
document.querySelector(".clear-list").addEventListener("click",function()
    {

        pending--;
        completed_task++;
        document.querySelector(".pending-tasks").innerHTML="No of tasks pending" + pending;
        document.querySelector(".completed-tasks").innerHTML="No of tasks completed" + completed_task;
        document.querySelector(".list").innerHTML="";
    }
);

add.addEventListener("click",function()
    {
        let lst=document.createElement("li");
        let inp=document.querySelector("#Input").value;
        let temp=document.createTextNode(inp);
        lst.appendChild(temp);
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        lst.appendChild(span);
        
        span.addEventListener("click",function()
        {
            temp=this.parentElement;
            temp.style.display="none";
        }
        );
        document.querySelectorAll(".list")[0].appendChild(lst);
        pending++;
        document.querySelector(".pending-tasks").innerHTML="No of tasks pending" + pending;
    }
);