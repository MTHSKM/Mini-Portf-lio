//Seleção dos elementos
const abas = document.querySelectorAll('.aba')

//Funções
console.log(` __  ___  __  .___  ___.  __   __  \r\n|  |\/  \/ |  | |   \\\/   | |  | |  | \r\n|  \'  \/  |  | |  \\  \/  | |  | |  | \r\n|    <   |  | |  |\\\/|  | |  | |  | \r\n|  .  \\  |  | |  |  |  | |__| |__| \r\n|__|\\__\\ |__| |__|  |__| (__) (__) \r\n                                   `)

function selecionarAba(aba){
     const abaSelecionada = document.querySelector('.aba.selecionado')
        abaSelecionada.classList.remove('selecionado')

        aba.classList.add('selecionado')
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector('.informacao.selecionado')
        informacaoSelecionada.classList.remove('selecionado')
        
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add('selecionado')
}

//Eventos
abas.forEach((aba)=>{
    aba.addEventListener('click', ()=>{

        if(aba.classList.contains('selecionado')){
            return;
        }
       
        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
    })
})