function showTask(){
     let task = document.getElementById("input1").value
     
     let span =  document.createElement("span");
     
     span.textContent = task + "☑️";


     document.getElementById("to-do").appendChild(document.createElement("br"));
     document.getElementById("to-do").appendChild(span);
     document.getElementById("to-do").style.margin = "320px";

    
}

function removetask(){
    document.getElementById("to-do").remove();
}
