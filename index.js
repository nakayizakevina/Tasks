const save = document.getElementById("save");
const input = document.getElementById("inputfield");
const tasklist = document.getElementById("tasklist");
save.addEventListener("click", function(){
    const taskText = input.value.trim();
    if (taskText !==""){
      
       
      

        const taskItem = document.createElement("li");
       taskItem.textContent = taskText;
    
       input.value = "";
       taskItem.style.listStyle = "none";
       taskItem.style.padding = "8px";
      
       const radioButton = document.createElement("input");
       radioButton.type = "radio";
       radioButton.style.border ="1px solid blue";

      
      const container = document.createElement("div")
      container.appendChild(radioButton)
      container.appendChild(taskItem)
      tasklist.appendChild(container)
      container.style.display = "flex"
    //   container.style.flexDirection = "row-reverse"
      container.style.borderBottom = "1px solid grey";
    
      radioButton.addEventListener("click", function(){
        taskItem.style.textDecoration = "line-through"
         
       })
    }

    
});



          
       
    //    tasklist.style.display = "flex";
    //    tasklist.style.flexDirection = "row";
    //    tasklist.style.gap = "3px";