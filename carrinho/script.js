const QUANTIDADE = document.querySelector('#quantidade');
const PRECO = document.querySelector('#preco');


function add(){
       let q = parseInt(QUANTIDADE.innerHTML) + 1;
   QUANTIDADE.innerHTML = q;
   PRECO.innerHTML = 16 * q;
}

function remove (){
       let q = parseInt(QUANTIDADE.innerHTML) -1;

        if(q === 0){
            return;
        }

    QUANTIDADE.innerHTML = q;
    PRECO.innerHTML = 16 * q;

}

