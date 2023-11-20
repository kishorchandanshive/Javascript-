const Elbtn=document.querySelector("#btn");
const Elmain=document.querySelector("#main");


function save(){
    const savetext=document.querySelectorAll(".note textarea");
    const data=[];
    console.log(savetext)
    savetext.forEach(
        (Savetext)=>{
            data.push(Savetext.value)
        }
    )
    if(data.length===0){
        localStorage.removeItem("savetext");
    }
    else{
        localStorage.setItem("savetext",JSON.stringify(data))
    }
    

}


Elbtn.addEventListener("click",function (){
    
      anote();
});



const anote=(text="")=>{
    const Eldiv=document.createElement("div");
    Eldiv.classList.add("note")

    Eldiv.innerHTML=`
        <div class="note">
    <div class="tool">
        <i class="trash solid fa-trash"></i>
        <i class="save solid fa-floppy-disk"></i>
    </div>
    <textarea> ${text}</textarea>
</div>
    `;
    Eldiv.querySelector(".trash").addEventListener("click",function (){
        Eldiv.remove();
        save();
    });

    Eldiv.querySelector(".save").addEventListener("click",()=>{
        save();
    })
    Elmain.appendChild(Eldiv);


}
function local (){
    const notes=JSON.parse(localStorage.getItem("savetext"))
    if(notes===null){
        anote();
    }
    else{
        notes.forEach((note)=>{
            anote(note);
        })
    }
    
    
}
;local();