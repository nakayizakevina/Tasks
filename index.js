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
      container.style.borderBottom = "1px solid grey";
    
      radioButton.addEventListener("click", function(){
        taskItem.style.textDecoration = "line-through"
        taskItem.style.color = "grey"
         
       })
    }

  //  if (nav.length > 0){
  //   for (let K = 0; K<=0; K++);{
  //     let itemNumber = document.createElement("p");
  //     itemNumber.id ="itemsleft";
  //     itemNumber.textContent = "0 items left";
  //   nav[0].appendChild(itemNumber);
  //   function updateItemsLeft(count){
  //     document.getElementById("itemsleft").textContent = `$ {count} items left`;
  //   }
  //   }
    
  //  }
   
    const nav = document.getElementsByClassName("nav");
    if (nav.length > 0){
     
      for (let K = 0; K <=0; K++){
        const itemNumber = document.createElement("p");
        itemNumber.textContent = `${K} Items left`;
        nav[0].appendChild(itemNumber)
      }
    }
  });
  

 
 

          
       
    