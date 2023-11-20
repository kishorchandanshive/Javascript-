const getcolor=()=>{
    const randomnumber=Math.floor(Math.random()*16777215);
    console.log(randomnumber)
    const randomcode= "#" + randomnumber.toString(16);
    console.log(randomcode)
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerHTML=randomcode
}
document.getElementById("btn").addEventListener("click",getcolor)