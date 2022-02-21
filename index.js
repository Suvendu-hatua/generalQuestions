const plus=document.querySelectorAll("i");
plus.forEach(function (icon) {
    icon.addEventListener("click",function (i) {
        const btn=icon.classList;
        if(btn[0]==="btn1")
        {
            if(btn.contains("fa-plus-square"))
              {
                icon.classList.remove("fa-plus-square");
                icon.classList.add("fa-minus-square");
                document.getElementById("ans1").style.display="contents";
              }
              else{
                icon.classList.remove("fa-minus-square");
                icon.classList.add("fa-plus-square");
                document.getElementById("ans1").style.display="none";
              }
        }
        else if(btn[0]==="btn2")
        {
            if(btn.contains("fa-plus-square"))
              {
                icon.classList.remove("fa-plus-square");
                icon.classList.add("fa-minus-square");
                document.getElementById("ans2").style.display="contents";
              }
              else{
                icon.classList.remove("fa-minus-square");
                icon.classList.add("fa-plus-square");
                document.getElementById("ans2").style.display="none";
              }
        }
        else if(btn[0]==="btn3")
        {
            if(btn.contains("fa-plus-square"))
            {
              icon.classList.remove("fa-plus-square");
              icon.classList.add("fa-minus-square");
              document.getElementById("ans3").style.display="contents";
            }
            else{
              icon.classList.remove("fa-minus-square");
              icon.classList.add("fa-plus-square");
              document.getElementById("ans3").style.display="none";
            }
        }
        else{
            if(btn.contains("fa-plus-square"))
            {
              icon.classList.remove("fa-plus-square");
              icon.classList.add("fa-minus-square");
              document.getElementById("ans4").style.display="contents";
            }
            else{
              icon.classList.remove("fa-minus-square");
              icon.classList.add("fa-plus-square");
              document.getElementById("ans4").style.display="none";
            }
        }
    
  
        
      
        // const answer=document.querySelectorAll(".ans");
        // answer[1].style.display="contents";
     
      })
  })
// console.log(plus)