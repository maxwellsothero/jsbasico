const BTN_AVANCAR = document.getElementById('avancar');
const BTN_VOLTAR = document.getElementById('voltar');
const PROGRESSO = document.getElementById('progresso'); 

let fechartela1 =document.querySelector('#form1');
let fechartela2 =document.querySelector('#form2');
let fechartela3 =document.querySelector('#form3');

let passoAtual =1;

function  avancar(){    
    if(passoAtual===3){
        return;
    }
    if(passoAtual === 1){
            fechartela2.style.display = "block";
            fechartela1.style.display = "none";
    }else if(passoAtual === 2){        
            fechartela2.style.display = "none";
            fechartela3.style.display = "block";
            BTN_AVANCAR.innerHTML='Confirmar';
                        }
            BTN_VOLTAR.style.display = "block";
           /*  BTN_VOLTAR.removeAttribute('disabled'); */

            passoAtual += 1;
            PROGRESSO.innerHTML = passoAtual + "/3";

}   
function voltar(){
    if(passoAtual === 1){        
        return; 
    }
    if(passoAtual === 3){
            fechartela2.style.display = "block";
            fechartela3.style.display = "none";
            BTN_AVANCAR.innerHTML='Avançar'
    }else if(passoAtual === 2){
            fechartela1.style.display = "block";
            fechartela2.style.display = "none";
            BTN_VOLTAR.style.display = "none";
            /* BTN_VOLTAR.setAttribute('disabled','disabled',); */
    }
    passoAtual -= 1;
    PROGRESSO.innerHTML = passoAtual + "/3";
}

