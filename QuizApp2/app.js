const quetions=[{
    question: "What is 10/2?",
		answers: [{
			text: '3',correct:false},
			{text: '5',correct:true},
			{text: '115',correct:false},
            {text:'120',correct:false}
		]
		
	},
	{
		question: "What is 30/3?",
		answers: [{
			text: '3',correct:false},
			{text: '10',correct:true},
			{text: '11',correct:false},
            {text:'12',correct:false}
		]
    },
    {
        question: "What is 10/1?",
            answers:[ {
                text: '3',correct:false},
                {text: '1',correct:true},
                {text: '11',correct:false},
                {text:'14',correct:false}
            ]
            
        },
        {
            question: "What is 50/2?",
            answers: [{
                text: '3',correct:false},
                {text: '25',correct:true},  
                {text: '15',correct:false},
                {text:'10',correct:false}
            ]
        }
];
const quetionElement=document.getElementById("quetion");
const answerbutton=document.getElementById("answerbutton");
const nextbutton=document.getElementById("next-btn");

let currentQuetionIndex=0;
let score=0;

function startQuiz(){
    currentQuetionIndex=0;
    score=0;

    showQuetion();
    nextbutton.innerHTML="next";
    
} 

function showQuetion(){
    resetState();
    let currentQution=quetions[currentQuetionIndex];
    let quetionNo=currentQuetionIndex + 1;
    quetionElement.innerHTML=quetionNo+"."+currentQution.question;
    
    currentQution.answers.forEach(answer=>{
       const button =document.createElement("button");
       button.innerHTML =answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectanswer)
    })
};

function resetState(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectanswer(e){
    const selectbtn = e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
        // answerbutton.innerHTML="correct";
        // answerbutton.style.color="white";

    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block"
}

function showscore(){
    resetState();
    quetionElement.innerHTML=`you scored ${score} out of ${quetions.length}`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";

}


function handlnextbutton(){
    currentQuetionIndex++;
    if(currentQuetionIndex<quetions.length){
        showQuetion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuetionIndex<quetions.length){
        handlnextbutton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
