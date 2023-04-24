const button = document.getElementById("button"),
    dropDown = document.querySelector(".dropdown");
    
    button.addEventListener("click", ()=>{
      button.classList.toggle("active");
      dropDown.classList.toggle("active");
    });