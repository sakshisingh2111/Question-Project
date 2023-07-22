const quesBtn=document.querySelector(".question-btn");
const quesText= document.querySelector(".question-text");
const quesTitle=document.querySelector(".question-title");
const plusIcon = document.querySelector(".plus-icon")
const minusIcon = document.querySelector(".minus-icon")

// quesBtn.addEventListener('click', function() {

//     quesText.classList.toggle("show-text");

//     if(plusIcon.classList.contains("show-icon")){
//         plusIcon.classList.remove("show-icon");
//         minusIcon.classList.add("show-icon")

//     }
//     else{
//         plusIcon.classList.add("show-icon");
//         minusIcon.classList.remove("show-icon")
//     }

    

// })


function toggleClick(id){
   

  const element= document.getElementById(id);
  element.classList.toggle("show-text");

    if(plusIcon.classList.contains("show-icon")){
        plusIcon.classList.remove("show-icon");
        minusIcon.classList.add("show-icon")

    }
    else{
        plusIcon.classList.add("show-icon");
        minusIcon.classList.remove("show-icon")
    }

}

