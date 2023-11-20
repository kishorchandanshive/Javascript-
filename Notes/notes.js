const Elbtn=document.querySelector("#btn");
const main=document.querySelector("#main");

function save(){
    const savetext=document.querySelectorAll(".note textarea");

    const data=[];

    savetext.forEach((Savetext)=>{
        data.push(Savetext.value)
    })
if(data.length===0){
    localStorage.removeItem("savetext")
}
else{
    localStorage.setItem("savetext",JSON.stringify(data))

}}

Elbtn.addEventListener("click",()=>{
    
        addnote();
    
})

function addnote(){
    const note=document.createElement("div");

    note.classList.add("note");

    note.innerHTML=`
         <div class="note">
    <div class="tool">
        <i class="trash solid fa-trash"></i>
        <i class="save solid fa-floppy-disk"></i>
    </div>
    <textarea></textarea>
</div> 
    `
    main.appendChild(note);
note.querySelector(".trash").addEventListener("click",()=>{
  
    note.remove();  
    save();


})
note.querySelector(".save").addEventListener("click",()=>{
    save()
});

}

function local(){

    const notedata=JSON.parse(localStorage.getItem("savetext"))
    if(notedata===null){
        addnote();
    }
    else{
       notedata.forEach((Notedata)=>{
        addnote(Notedata)
       })
    }
}
local();













































