const enddate=document.getElementById("enddate")

const currentdate="12 June 2023 9:00 PM"
enddate.textContent=currentdate;

const Elinput=document.querySelectorAll("input");
console.log(Elinput)


const countdown=()=>{
    const newenddate=new Date(currentdate);
    const newcurrentdate=new Date
    const differencedate=(newenddate-newcurrentdate)/1000
    
    const days=Math.floor(differencedate/3600/24);
    
    const hourse=Math.floor(differencedate/3600)%24;
    
    const minutes=Math.floor(differencedate/60)%60
    
    const seconds=Math.floor(differencedate)%60

    Elinput[0].value=days
    Elinput[1].value=hourse
    Elinput[2].value=minutes
    Elinput[3].value=seconds

}
countdown();