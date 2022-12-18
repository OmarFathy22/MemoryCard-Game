let counter = 0 
let firstSelection = 0;
let secondSelection = 0;


const cards = document.querySelectorAll(".card");
cards.forEach((card)=>{
    card.addEventListener("click" , ()=>{
        card.classList.add("clicked")
        if(counter === 0)
        {
            firstSelection = card.getAttribute("gem")   ;
            counter++;
        }
        else{
            secondSelection = card.getAttribute("gem");
            counter = 0;
            if(firstSelection === secondSelection)
            {
                const correctMatching = document.querySelectorAll(
                    ".card[gem='" + firstSelection + "']"
                    )
                    correctMatching[0].classList.add("checked");
                    correctMatching[1].classList.add("checked");
                    correctMatching[0].classList.remove("clicked");
                    correctMatching[1].classList.remove("clicked");
            }
            else{
                const incorrectMatching = document.querySelectorAll(".card.clicked")
                setTimeout(()=>{
                    incorrectMatching[0].classList.remove("clicked")
                   incorrectMatching[1].classList.remove("clicked")
                } , 800)
            }
            } 
        })
        
    })