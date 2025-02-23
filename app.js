arrayAmigo=[];
modalError=document.getElementById("modal")
modalTituloError=document.getElementById("title-modal");
function agregarAmigo(){
    let amig=document.getElementById("amigo").value;
    if(typeof amig =="string" && amig!=""){
        arrayAmigo.push(amig);
        console.log(arrayAmigo);
        document.getElementById("amigo").value="";
        document.getElementById("listaAmigos").innerHTML+=`<li>${amig}<li>`
    }
    else{
        modalTituloError.innerHTML="Ingrese un nombre correcto";
        modalError.showModal();
    }
}
document.getElementById("btn-cerrar-modal").addEventListener("click",()=>
{modalError.close();
    console.log("Prueba");
}
)
function sortearAmigo(){
    longitudArray=arrayAmigo.length;
    if(longitudArray>1){
        randomNum=Math.floor(Math.random()*longitudArray);
        console.log(randomNum);
        modalTituloError.innerHTML=`El amigo secreto es ${arrayAmigo[randomNum]}`;
        modalError.showModal();

    }
    else{
        modalTituloError.innerHTML="Debe ingresar más de 1 amigo para jugar";
        modalError.showModal();
    }

}