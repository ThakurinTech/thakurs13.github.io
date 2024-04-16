// Function for first button

function greetUser() {
   const now = new Date();
   const hour =now.getHours();
   let greeting;

   if(hour >5 && hour <11) {
      greeting= "Good Morning";
   } else if (hour >12 && hour <18) {
      greeting ="Good Day";
   } else {   
      greeting ="Good Evening";
   }
   alert(greeting);
}


// Function for Second button

function changeButtonTextAndClass() {
    let button= document.getElementById("button2")
    console.log("Before change:",button.textContent,button.className);

    button.textContent="Done";
    button.className="btn btn-success";
    console.log("After change:",button.textContent,button.className)
}

// Function to change the label and color of the button
function changeButtonLabel() {
   var button = document.getElementById("changeButton");
   console.log("Button before change:", button);

   button.innerText = "Done";
   button.classList.remove("btn-primary");
   button.classList.add("btn-success");

   console.log("Button after change:", button);
 }


//Add event listeners
document.getElementById("button1").addEventListener("click",greetUser
);
document.getElementById("button2").addEventListener("click",changeButtonTextAndClass);

