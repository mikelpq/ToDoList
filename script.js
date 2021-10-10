function addItem(){
   event.preventDefault();
   let inputText = document.getElementById("todo-input");
   
   db.collection("todo-items").add({
      text: inputText.value,
      status: "active"
   })
   inputText.value = "";
}


function getItems(){
   db.collection("todo-items").onSnapshot((snapshot) =>{
      let items = [];

      snapshot.docs.forEach((doc) =>{
         items.push({
            id: doc.id,
            ...doc.data()
         })
      })
      generateItems(items);
   })
}

function generateItems(items){
   let itemsHTML = "";

   items.forEach((item) =>{
      itemsHTML += `
         <div class="todo-item">
            <div class="check">
               <div data-id="${item.id}"  class="check-mark ${item.status == "completed" ? "checked" : ""}">
                  <img src="/assets/icon-check.svg">
               </div>
            </div>
            <div class="todo-text ${item.status == "completed" ? "checked" : ""}">
               ${item.text}
            </div>
         </div>
      `
   })

   document.querySelector(".todo-items").innerHTML = itemsHTML;
   createEventListeners();
}

function createEventListeners(){
   let todoCheckMark = document.querySelectorAll(".todo-item .check-mark");
   todoCheckMark.forEach((checkMark) =>{
      checkMark.addEventListener("click", function(){
         markCompleted(checkMark.dataset.id);
      })
   })
}

function markCompleted(id){
   let item = db.collection("todo-items").doc(id);

   item.get().then(function(doc){
      if(doc.exists){
         let status = doc.data().status;
         if(status == "active"){
            item.update({
               status: "completed"
            })
         }else if(status == "completed"){
            item.update({
               status: "active"
            })
         }
      }
   })
}

getItems();